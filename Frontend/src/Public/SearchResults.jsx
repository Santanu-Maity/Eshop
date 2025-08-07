// SearchResults.jsx
import React from "react";
import { useLocation } from "react-router-dom";

const productList = JSON.parse(localStorage.getItem("productList")) || [];

export default function SearchResults() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("query")?.toLowerCase() || "";

  const filteredProducts = productList.filter((p) =>
    p.name.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="container my-5">
      <h2>Search Results for "{searchQuery}"</h2>
      {filteredProducts.length > 0 ? (
        <div className="row">
          {filteredProducts.map((product) => (
            <div className="col-md-4" key={product.id}>
              <div className="card mb-4 shadow-sm">
                <img src={product.image} className="card-img-top" alt={product.name} />
                <div className="card-body">
                  <h5>{product.name}</h5>
                  <p className="text-muted">₹{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No products found matching your search.</p>
      )}
    </div>
  );
}
