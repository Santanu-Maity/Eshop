import React, { use } from 'react';
import { Link } from 'react-router-dom';

export default function Cart() {

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const [Auth, setAuth] = React.useState(true);

  const updateCartInLocalStorage = (id, newQuantity) => {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const productIndex = cart.findIndex((item) => item.id === id);

    if (productIndex !== -1) {
      cart[productIndex].quantity = newQuantity;
    } else {
      console.error("Product not found in cart");
      return;
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const handleIncrement = (id, quantity) => {
    const newQty = quantity + 1;
    updateCartInLocalStorage(id, newQty);
  };

  const handleDecrement = (id, quantity) => {
    const newQty = quantity - 1;
    updateCartInLocalStorage(id, newQty);
  };


  return (
    <>
      {Auth ?
        (
          <>
            <div className="container py-5">
              <h2 className="mb-4 text-center">Your Shopping Cart</h2>
              <div className="row">
                <div className="col-md-8 mb-2">
                  {cart.map((cart) => (
                    <div key={cart.id} className="card shadow-sm p-3 d-flex flex-row align-items-center mb-3">
                      <img
                        src={cart.image}
                        alt={cart.name}
                        style={{ width: "100px", height: "100px", objectFit: "cover" }}
                        className="rounded"
                      />
                      <div className="ms-3 flex-grow-1">
                        <h5 className="mb-1">{cart.name}</h5>
                        <p className="mb-1 text-muted">Price:{cart.price} </p>


                        <div className="d-flex align-items-center">
                          <button className="btn btn-outline-secondary btn-sm me-2" onClick={(e) => handleIncrement(cart.id, cart.quantity)}>+
                          </button>
                          <span>{cart.quantity}</span>
                          <button className="btn btn-outline-secondary btn-sm ms-2" onClick={(e) => handleDecrement(cart.id, cart.quantity)}>-</button>
                        </div>
                      </div>
                    </div>))}
                </div>
                <div className="col-md-4 mb-2 h-100">
                  <div className="card shadow-sm p-3">
                    <h5 className="mb-3">Order Summary</h5>
                    <ul className="list-group list-group-flush" />
                    {cart.map((item) => (
                      <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                        {item.name}
                        <span>₹{item.price * item.quantity}</span>
                      </li>
                    ))}
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      <strong>Total</strong>
                      <strong>₹{cart.reduce((total, item) => total + item.price * item.quantity, 0)}</strong>
                    </li>
                    <div className="text-end mt-4">
                      <Link to="3" className="btn btn-success">
                        Checkout
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
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
          </>
        )}
    </>
  )
}



