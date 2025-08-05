import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const productList = JSON.parse(localStorage.getItem("productList")) || [];

const Details = () => {
  const { id } = useParams();
  const product = productList.find((p) => p.id === parseInt(id));

  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    if (!product) return;
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setQuantity(existingProduct.quantity);
    }
  }, [product]);

  const updateCartInLocalStorage = (newQuantity) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const productIndex = cart.findIndex((item) => item.id === product.id);

    if (newQuantity > 0) {
      if (productIndex !== -1) {
        cart[productIndex].quantity = newQuantity;
      } else {
        cart.push({ ...product, quantity: newQuantity });
      }
    } else {
      if (productIndex !== -1) {
        cart.splice(productIndex, 1);
      }
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    // 👇 Trigger update event for Navbar
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const handleAddToCart = () => {
    setQuantity(1);
    updateCartInLocalStorage(1);
  };

  const handleIncrement = () => {
    const newQty = quantity + 1;
    setQuantity(newQty);
    updateCartInLocalStorage(newQty);
  };

  const handleDecrement = () => {
    const newQty = quantity - 1;
    if (newQty < 1) {
      setQuantity(0);
      updateCartInLocalStorage(0);
    } else {
      setQuantity(newQty);
      updateCartInLocalStorage(newQty);
    }
  };

  if (id && !product) {
    return (
      <div className="container text-center mt-5">
        <h2 className="text-danger">❌ Product Not Found</h2>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="row g-4 align-items-center">
        {/* Left: Image */}
        <div className="col-md-6 text-center">
          <div
            className="bg-light p-3 rounded shadow"
            style={{
              height: "400px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="rounded shadow-sm"
              style={{
                maxHeight: "100%",
                maxWidth: "100%",
                objectFit: "contain",
              }}
              draggable="false"
            />
          </div>
        </div>

        {/* Right: Table + Cart */}
        <div className="col-md-6">
          <table className="table table-bordered border-dark" style={{ borderWidth: "2px" }}>
            <tbody>
              <tr>
                <th className="fw-bold bg-light" style={{ width: "150px" }}>Name</th>
                <td>{product.name}</td>
              </tr>
              <tr>
                <th className="fw-bold bg-light">Price</th>
                <td>₹{product.price.toLocaleString()}</td>
              </tr>
              <tr>
                <th className="fw-bold bg-light">Rating</th>
                <td>
                  {[...Array(5)].map((_, index) => {
                    const full = index + 1 <= Math.floor(product.rating);
                    const half = index + 0.5 === product.rating;
                    return (
                      <i
                        key={index}
                        className={`bi me-1 ${
                          full
                            ? "bi-star-fill text-warning"
                            : half
                            ? "bi-star-half text-warning"
                            : "bi-star text-secondary"
                        }`}
                      />
                    );
                  })}
                  <span className="text-muted ms-1">{product.rating || 0}</span>
                </td>
              </tr>
              <tr>
                <th className="fw-bold bg-light align-top" style={{ width: "150px" }}>
                  Description
                </th>
                <td style={{ minHeight: "120px", whiteSpace: "pre-wrap" }}>
                  {product.description}
                </td>
              </tr>
            </tbody>
          </table>

          {/* Cart Buttons */}
          {quantity === 0 ? (
            <button className="btn btn-primary px-4" onClick={handleAddToCart}>
              <i className="bi bi-cart-plus me-2"></i> Add to Cart
            </button>
          ) : (
            <div className="d-flex align-items-center gap-3 mt-3">
              <button className="btn btn-outline-secondary" onClick={handleDecrement}>
                -
              </button>
              <span>{quantity}</span>
              <button className="btn btn-outline-secondary" onClick={handleIncrement}>
                +
              </button>
              <button className="btn btn-success" disabled>
                In Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Details;
