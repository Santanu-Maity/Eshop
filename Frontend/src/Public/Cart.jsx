import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Cart() {
  const [Auth, setAuth] = useState(true);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // ✅ Define the function BEFORE using it
    const fetchCart = () => {
      const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCart(savedCart);
      setAuth(savedCart.length > 0);
    };

    fetchCart(); // ✅ use it after defining

    // ✅ Listen for custom 'cartUpdated' events
    window.addEventListener("cartUpdated", fetchCart);

    return () => {
      window.removeEventListener("cartUpdated", fetchCart);
    };
  }, []);

  const updateCartInLocalStorage = (id, newQuantity) => {
    let updatedCart = [...cart];
    const index = updatedCart.findIndex((item) => item.id === id);

    if (newQuantity > 0) {
      if (index !== -1) {
        updatedCart[index].quantity = newQuantity;
      }
    } else {
      if (index !== -1) {
        updatedCart.splice(index, 1);
      }
    }

    updatedCart = updatedCart.map(item => ({
      ...item,
      price: Number(item.price), // Ensure unit price
    }));

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartUpdated")); // ✅ Trigger update
  };

  const handleIncrement = (id, quantity) => {
    updateCartInLocalStorage(id, quantity + 1);
  };

  const handleDecrement = (id, quantity) => {
    updateCartInLocalStorage(id, quantity - 1);
  };

  return (
    <>
      {Auth ? (
        <div className="container py-5">
          <h2 className="mb-4 text-center">Your Shopping Cart</h2>
          <div className="row">
            {/* Cart Items */}
            <div className="col-md-8 mb-2">
              {cart.map((item) => (
                <div key={item.id} className="card shadow-sm p-3 d-flex flex-row align-items-center mb-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: "100px", height: "100px", objectFit: "cover" }}
                    className="rounded"
                  />
                  <div className="ms-3 flex-grow-1">
                    <h5 className="mb-1">{item.name}</h5>
                    <p className="mb-1 text-muted">Price: ₹{item.price}</p>
                    <div className="btn-group" role="group">
                      <button className="btn btn-danger" onClick={() => handleIncrement(item.id, item.quantity)}>
                        +
                      </button>
                      <button className="btn btn-warning">{item.quantity}</button>
                      <button className="btn btn-success" onClick={() => handleDecrement(item.id, item.quantity)}>
                        -
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="col-md-4 mb-2 h-100">
              <div className="card shadow-sm p-3">
                <h5 className="mb-3">Order Summary</h5>
                <ul className="list-group list-group-flush">
                  {cart.map((item) => (
                    <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                      <div>
                        <div>{item.name}</div>
                        <small className="text-muted">Quantity: {item.quantity}</small>
                      </div>
                      <span>₹{item.price * item.quantity}</span>
                    </li>
                  ))}
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <strong>Total</strong>
                    <strong>₹{cart.reduce((total, item) => total + item.price * item.quantity, 0)}</strong>
                  </li>
                </ul>

                <div className="text-end mt-4">
                  <Link to="/checkout" className="btn btn-success">
                    Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container mt-5 d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "60vh" }}>
          <h2 className="mb-4">Your Cart</h2>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2762/2762885.png"
            alt="Empty Cart"
            style={{ width: "180px", opacity: 0.7 }}
            className="mb-4"
          />
          <p className="fs-5 text-secondary mb-4">Your cart is currently empty.</p>
          <Link to="/Login" className="btn btn-primary">
            Login to Buy
          </Link>
        </div>
      )}
    </>
  );
}