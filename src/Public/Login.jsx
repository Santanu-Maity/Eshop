import React, { useState } from 'react';

export default function Login() {
  const [updateForm, setupdateForm] = useState(false);

  const handelSubmit = (e) => {
    e.preventDefault();
    setupdateForm(true);
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "90vh", background: "linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)" }}>
      <div className="card shadow-lg p-4" style={{ maxWidth: 420, width: "100%", borderRadius: "1.5rem" }}>
        <h2 className="text-center mb-4 fw-bold" style={{ color: "#2d3a4b" }}>Login</h2>
        {updateForm ? (
          <form>
            <div className="mb-3">
              <label htmlFor="otp" className="form-label">Enter OTP</label>
              <input type="text" className="form-control" id="otp" placeholder="Enter OTP" required />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-success btn-lg rounded-pill mt-2">
                Submit
              </button>
            </div>
          </form>
        ) : (
          <form onSubmit={handelSubmit}>
            <div className="mb-3">
              <label htmlFor="userid" className="form-label">User Id</label>
              <input type="text" className="form-control" id="userid" placeholder="Email or Mobile Number" required />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Enter your password" minLength={8} pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}' required />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary btn-lg rounded-pill mt-2" style={{ background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)", border: "none" }}>
                SUBMIT
              </button>
              <p className='ms-5'>Don't have an account? <a href="#!" class="link-info">Register here</a></p>
            </div>

            <div className="text-center mt-3">
              <span className="text-secondary">Don't have an account? </span>
              <a href="/Signup" className="text-primary fw-bold">Sign Up</a>
            </div>
          </form>


         
        )}
      </div>
    </div>
  );
}