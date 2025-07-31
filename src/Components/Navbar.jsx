import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [Activate, setActivate] = useState("")
  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{
          background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
          boxShadow: "0 4px 24px rgba(118,75,162,0.08)",
        }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              src="./img/Eshop.png"
              width="140px"
              height="40"
              className="d-inline-block align-top me-2"
              alt=""
              style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.08))" }}
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li
                className="nav-item"
                onMouseEnter={() => setActivate("active")}
                onMouseLeave={() => setActivate("")}
              >
                <Link
                  className={`nav-link ${Activate} text-white fw-bold`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>

              <li
                className="nav-item"
                onMouseEnter={() => setActivate("active")}
                onMouseLeave={() => setActivate("")}
              >
                <Link
                  className={`nav-link ${Activate} text-white fw-bold`}
                  aria-current="page"
                  to="/Product"
                >
                  Product
                </Link>
              </li>
            </ul>

            <div className="d-flex align-items-center">
              <div className="input-group input-group-sm mb-0" style={{ maxWidth: 200 }}>
                <input
                  type="text"
                  className="form-control me-2"
                  placeholder="Search Here"
                  aria-describedby="button-addon2"
                  style={{ borderRadius: "2rem 0 0 2rem" }}
                />
                <button
                  className="btn btn-light"
                  type="button"
                  id="button-addon2"
                  style={{
                    borderRadius: "0 2rem 2rem 0",
                    background: "#fff",
                    color: "#764ba2",
                    fontWeight: "bold",
                  }}
                >
                  <i className="bi bi-search"></i> Search
                </button>
              </div>

              {/* Cart Button */}
              <div className="ms-3">
                <Link
                  className="navbar-btn btn btn-sm btn-warning lift ms-auto fw-bold px-3 d-flex align-items-center"
                  to="/Cart"
                  style={{
                    borderRadius: "2rem",
                    color: "#243de2ff",
                    background: "#fff3cd",
                    border: "none",
                    boxShadow: "0 2px 8px rgba(23, 75, 206, 0.08)",
                  }}
                >
                  <i className="bi bi-cart3 me-2"></i> Cart
                </Link>
              </div>

              {/* Login Dropdown */}
              <div className="ms-3 dropdown">
                <button
                  className="btn btn-light btn-sm dropdown-toggle fw-bold px-3 d-flex align-items-center"
                  type="button"
                  id="loginDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{
                    borderRadius: "2rem",
                    color: "#764ba2",
                    background: "#fff",
                    border: "none",
                    boxShadow: "0 2px 8px rgba(118,75,162,0.08)",
                  }}
                >
                  <i className="bi bi-person-circle me-2"></i> Login
                </button>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="loginDropdown">
                  <li>
                    <Link className="dropdown-item" to="/Login">
                      <i className="bi bi-box-arrow-in-right me-2"></i>Login
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Signup">
                      <i className="bi bi-person-plus me-2"></i>Signup
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      <i className="bi bi-person-lines-fill me-2"></i>Profile
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}