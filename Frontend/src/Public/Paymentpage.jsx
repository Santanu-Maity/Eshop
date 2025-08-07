import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function PaymentPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("UPI");
  const [paid, setPaid] = useState(false);

  const [upiId, setUpiId] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCVV, setCardCVV] = useState("");

  const totalAmount = location.state?.totalAmount || 0;

  const handlePayment = () => {
    // Simple validation
    if (paymentMethod === "UPI" && !upiId) return alert("Please enter UPI ID");
    if (
      paymentMethod === "Card" &&
      (!cardNumber || !cardName || !cardExpiry || !cardCVV)
    )
      return alert("Please fill all card details");

    setPaid(true);

    setTimeout(() => {
      navigate("/thank-you");
    }, 2000);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 fw-bold text-success">Payment</h2>
      <div className="card shadow p-4 rounded-4 border-0 mx-auto" style={{ maxWidth: "500px" }}>
        <h4 className="mb-3 text-secondary">Total: ₹{totalAmount.toLocaleString()}</h4>

        {/* Payment Method Selection */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Select Payment Method</label>
          <select
            className="form-select rounded-3"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="UPI">UPI</option>
            <option value="Card">Credit / Debit Card</option>
            <option value="COD">Cash on Delivery</option>
          </select>
        </div>

        {/* Dynamic Fields */}
        {paymentMethod === "UPI" && (
          <div className="mb-3">
            <label className="form-label fw-semibold">Enter UPI ID</label>
            <input
              type="text"
              className="form-control rounded-3"
              placeholder="example@upi"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
            />
          </div>
        )}

        {paymentMethod === "Card" && (
          <>
            <div className="mb-3">
              <label className="form-label fw-semibold">Card Number</label>
              <input
                type="text"
                className="form-control rounded-3"
                placeholder="1234 5678 9012 3456"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label fw-semibold">Name on Card</label>
              <input
                type="text"
                className="form-control rounded-3"
                placeholder="John Doe"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
              />
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label fw-semibold">Expiry</label>
                <input
                  type="text"
                  className="form-control rounded-3"
                  placeholder="MM/YY"
                  value={cardExpiry}
                  onChange={(e) => setCardExpiry(e.target.value)}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label fw-semibold">CVV</label>
                <input
                  type="password"
                  className="form-control rounded-3"
                  placeholder="123"
                  value={cardCVV}
                  onChange={(e) => setCardCVV(e.target.value)}
                />
              </div>
            </div>
          </>
        )}

        {/* Pay Button */}
        {!paid ? (
          <button className="btn btn-primary w-100 mt-3 rounded-4" onClick={handlePayment}>
            <i className="bi bi-currency-rupee me-2"></i>Pay Now
          </button>
        ) : (
          <div className="alert alert-success text-center mt-3 rounded-3">
            Payment Successful! Redirecting...
          </div>
        )}
      </div>
    </div>
  );
}
