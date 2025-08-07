import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function ThankYou() {
  useEffect(() => {
    window.scrollTo(0, 0); // Smooth UX when redirected here
  }, []);

  return (
    <div className="container text-center my-5 animate__animated animate__fadeIn">
      <div className="card shadow-lg p-5 border-0 rounded-5 mx-auto" style={{ maxWidth: "600px" }}>
        <h1 className="text-success fw-bold mb-3 display-5">🎉 Payment Successful!</h1>
        <p className="fs-5 text-secondary">
          Thank you for shopping with <span className="fw-bold text-dark">Eshop</span>.<br />
          Your order has been placed and is being processed.
        </p>

        <div className="my-4">
          <p className="text-muted">🧾 Order ID: <strong>ES-{Math.floor(Math.random() * 1000000)}</strong></p>
          <p className="text-muted">📦 Estimated Delivery: <strong>3 - 5 Business Days</strong></p>
        </div>

        <Link to="/" className="btn btn-success btn-lg px-4 rounded-4 mt-3">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
