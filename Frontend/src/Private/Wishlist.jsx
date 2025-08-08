import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Wishlist() {
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);

  const removeFromWishlist = (id) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  // ✅ Go to details with product data
  const goToDetails = (item) => {
    navigate(`/details/${item.id}`, { state: { product: item } });
  };

  // ✅ Add to Cart
  const goToCart = (id) => {
    const item = wishlist.find((p) => p.id === id);
    if (!item) return;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // If item already in cart → increase quantity
    const existingIndex = cart.findIndex((c) => c.id === id);
    if (existingIndex >= 0) {
      cart[existingIndex].quantity += 1;
    } else {
      cart.push({ ...item, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    navigate("/cart");
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Your Wishlist</h2>

      {wishlist.length === 0 ? (
        <ul className="container mt-5 d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "60vh" }}>
         <img
            src="https://static.vecteezy.com/system/resources/previews/055/075/733/large_2x/illustration-of-shopping-wishlist-concept-vector.jpg"
            alt="Empty Cart"
            style={{ width: "400px", opacity: 0.7 }}
            className="mb-4"
          />
        <p className="text-center text-muted">No items in your wishlist yet.</p>
        </ul>
        
      ) : (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {wishlist.map((item) => (
            <div key={item.id} className="col">
              <div className="card h-100 shadow-sm">
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.name}
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">₹{item.price.toLocaleString()}</p>
                  <div className="d-flex justify-content-between gap-2">
                    
                    <button
                      className="btn btn-outline-success btn-sm"
                      onClick={() => goToCart(item.id)}
                    >
                      Add to Cart
                    </button>
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => removeFromWishlist(item.id)}
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
