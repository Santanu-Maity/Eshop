import React from 'react';
import { Link } from 'react-router-dom';
import Tbox2 from './Component/Tbox2';

export default function Product() {
  const productList = JSON.parse(localStorage.getItem("productList")) || [];
  return (
    <>
      <Tbox2 />
      <div className="container-fluid mt-5 px-4">
        <div className="row g-3">
          {productList.map((product) => (
            <div key={product.id} className="col-6 col-sm-4 col-md-3 col-lg-2">
              <Link to={`/product/${product._id}`} style={{ textDecoration: "none" }}>
                <div className="card h-100 shadow-sm" style={{ borderRadius: "1rem" }}>
                  <div className="card-header text-center fw-bold text-white"
                    style={{
                      background: "#4d77e1ff",
                      borderTopLeftRadius: "1rem",
                      borderTopRightRadius: "1rem"
                    }}>
                    {product.name}
                  </div>
                  <div className="card-body d-flex align-items-center justify-content-center p-2">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="img-fluid"
                      style={{ maxHeight: "130px", objectFit: "contain" }}
                    />
                  </div>
                  <div className="card-footer text-center">
                    <span className="fw-bold text-dark">₹{product.price}</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
