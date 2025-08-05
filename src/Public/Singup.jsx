import React from 'react';

export default function Signup() {
  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)",
        padding: "1rem",
      }}
    >
      <div className="row justify-content-center w-100">
        <div className="col-12 col-md-10 col-lg-8 col-xl-7">
          <div
            className="card shadow-lg p-4"
            style={{ borderRadius: "1.5rem", backgroundColor: "#fff" }}
          >
            <h2 className="text-center mb-4 fw-bold" style={{ color: "#2d3a4b" }}>
              Create Account
            </h2>

            <form>
              <div className="row">
                {/* Left Column */}
                <div className="col-12 col-md-6">
                  <div className="mb-3">
                    <label className="form-label">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Rohit"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Sharma"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Mobile</label>
                    <input
                      type="tel"
                      minLength={10}
                      maxLength={10}
                      className="form-control"
                      placeholder="9876543210"
                      pattern="[6-9]{1}[0-9]{9}"
                      required
                    />
                  </div>
                </div>

                {/* Right Column */}
                <div className="col-12 col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Gender</label>
                    <select className="form-select" required>
                      <option value="" disabled selected>
                        Select Your Gender
                      </option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">DOB</label>
                    <input type="date" className="form-control" required />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="name@example.com"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="d-grid mt-3">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg rounded-pill"
                  style={{
                    background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
                    border: "none",
                  }}
                >
                  SUBMIT
                </button>
              </div>

              <div className="text-center mt-3">
                <span>Already Have an Account? </span>
                <a
                  href="/Login"
                  className="text-primary fw-bold"
                  style={{ textDecoration: "none" }}
                >
                  Login
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
