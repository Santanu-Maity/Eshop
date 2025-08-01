import React from 'react';

export default function Signup() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "90vh",
        background: "linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)",
      }}
    >
      <div
        className="card shadow-lg p-4"
        style={{ maxWidth: 500, width: "100%", borderRadius: "1.5rem" }}
      >
        <h2 className="text-center mb-4 fw-bold" style={{ color: "#2d3a4b" }}>
          Create Account
        </h2>

        <form>
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input type="text" className="form-control" placeholder="Example - Santanu" required />
          </div>

          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input type="text" className="form-control" placeholder="Example - Maity" required />
          </div>

          <div className="mb-3">
            <label className="form-label">Mobile</label>
            <input type="number" className="form-control" placeholder="+91 xxxxxxxxxx" required />
          </div>

          <div className="mb-3">
            <label className="form-label">DOB</label>
            <input type="date" className="form-control" required />
          </div>

          <div className="mb-3">
            <label className="form-label">Gender</label>
            <select className="form-select" required>
              <option selected>Select Your Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" placeholder="name@example.com" required />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}
