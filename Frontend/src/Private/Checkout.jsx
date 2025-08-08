import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Add this

export default function Checkout() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 fw-bold text-primary">Checkout</h2>
      <div className="row">
        {/* Billing Section */}
        <div className="col-md-6">
          <div className="card shadow p-4 rounded-4 border-0">
            <h4 className="mb-4 text-secondary">Billing Information</h4>
            <form>
              <div className="mb-3">
                <label className="form-label fw-semibold">Full Name</label>
                <input
                  type="text"
                  className="form-control rounded-3"
                  placeholder="Virat Kohli"
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Email</label>
                <input
                  type="email"
                  className="form-control rounded-3"
                  placeholder="viratkohli@gmail.com"
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Address</label>
                <input
                  type="text"
                  className="form-control rounded-3"
                  placeholder="10 London"
                />
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold">City</label>
                  <input
                    type="text"
                    className="form-control rounded-3"
                    placeholder="City"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold">Zip Code</label>
                  <input
                    type="text"
                    className="form-control rounded-3"
                    placeholder="123456"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Order Summary */}
        <div className="col-md-6 mt-4 mt-md-0">
          <div className="card shadow p-4 rounded-4 border-0 bg-light">
            <h4 className="mb-4 text-secondary">Order Summary</h4>
            <ul className="list-group mb-3">
              {cart.length === 0 ? (
                <li className="list-group-item text-muted text-center border-0 bg-transparent">
                  Your cart is empty
                </li>
              ) : (
                cart.map((item, index) => (
                  <li
                    className="list-group-item d-flex justify-content-between align-items-center rounded-3 mb-2 border-0 shadow-sm"
                    key={index}
                  >
                    <div>
                      <h6 className="mb-1">{item.name}</h6>
                      <small className="text-muted">Qty: {item.quantity}</small>
                    </div>
                    <span className="fw-bold">
                      ₹{(item.price * item.quantity).toLocaleString()}
                    </span>
                  </li>
                ))
              )}
              <li className="list-group-item d-flex justify-content-between align-items-center rounded-3 border-0 bg-white mt-3">
                <strong className="text-dark fs-5">Total</strong>
                <strong className="text-dark fs-5">
                  ₹{totalAmount.toLocaleString()}
                </strong>
              </li>
            </ul>

            {/* ✅ Updated Button with Redirect */}
            <button
              className="btn btn-lg btn-primary w-100 mt-3 rounded-4"
              disabled={cart.length === 0}
              onClick={() => navigate("/Paymentpage", { state: { totalAmount } })} // ✅ Redirect with total
            >
              <i className="bi bi-credit-card-fill me-2"></i>Proceed to Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 500,
    margin: "40px auto",
    padding: 20,
    border: "1px solid #ccc",
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
    fontFamily: "Arial, sans-serif",
  },
  productBox: {
    marginBottom: 20,
    padding: 10,
    border: "1px solid #ddd",
    borderRadius: 6,
    backgroundColor: "#fff",
  },
  methodContainer: {
    display: "flex",
    gap: 10,
    marginBottom: 20,
  },
  methodButton: {
    padding: 10,
    borderRadius: 4,
    border: "none",
    cursor: "pointer",
    flex: 1,
  },
  cardElement: {
    padding: 10,
    border: "1px solid #ccc",
    borderRadius: 6,
    marginBottom: 20,
  },
  form: {
    marginTop: 10,
  },
  button: {
    padding: 12,
    fontSize: 16,
    width: "100%",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
  },
  message: {
    marginTop: 20,
    fontWeight: "bold",
    color: "#333",
  },
};
