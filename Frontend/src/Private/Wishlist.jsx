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

  const goToDetails = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Your Wishlist</h2>

      {wishlist.length === 0 ? (
        <p className="text-center text-muted">No items in your wishlist yet.</p>
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
                  <div className="d-flex justify-content-between">
                    <button
                      className="btn btn-outline-primary btn-sm"
                      onClick={() => goToDetails(item.id)}
                    >
                      View Details
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
