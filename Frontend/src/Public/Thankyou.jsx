import React from "react";
import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <div className="container text-center my-5">
      <h1 className="text-success fw-bold mb-3">🎉 Thank You!</h1>
      <p className="lead">Your payment was successful and your order has been placed.</p>
      <Link to="/" className="btn btn-primary rounded-4 mt-4">
        Continue Shopping
      </Link>
    </div>
  );
}
