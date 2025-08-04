import React from "react";
import { useParams } from "react-router-dom";


const productList = JSON.parse(localStorage.getItem("productList")) || [];

const Details = () => {
  const { id } = useParams();
  const product = productList.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="container text-center mt-5">
        <h2 className="text-danger">❌ Product Not Found</h2>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="row g-4 align-items-center">
        {}
        <div className="col-md-6 text-center">
          <div className="bg-light p-3 rounded shadow" style={{ height: "400px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img
              src={product.image}
              alt={product.name}
              className="rounded shadow-sm"
              style={{
                maxHeight: "100%",
                maxWidth: "100%",
                objectFit: "contain"
              }}
              draggable="false"
            />
          </div>
        </div>

        {}
        <div className="col-md-6">
          <h2 className="fw-bold mb-2">{product.name}</h2>
          <h4 className="text-success mb-3">₹{product.price.toLocaleString()}</h4>
          <p className="text-muted">{product.description}</p>

          {}
          <div className="mb-3">
            {[...Array(5)].map((_, index) => {
              const full = index + 1 <= Math.floor(product.rating);
              const half = index + 0.5 === product.rating;

              return (
                <i
                  key={index}
                  className={`bi me-1 ${full
                    ? "bi-star-fill text-warning"
                    : half
                      ? "bi-star-half text-warning"
                      : "bi-star text-secondary"
                    }`}
                />
              );
            })}
            <span className="text-muted ms-1">{product.rating || 0}</span>
          </div>

          {}
          <button className="btn btn-primary px-4">
            <i className="bi bi-cart-plus me-2"></i> Add to Cart
          </button>

        </div>
      </div>
    </div>
  );
};



export default Details;
