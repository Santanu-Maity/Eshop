import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [Auth, setAuth] = useState(false);
  const [totalItems, setTotalItems] = useState(
    JSON.parse(localStorage.getItem("cart"))?.length || 0
  );

  const [notifications, setNotifications] = useState([
    { id: 1, message: "🎉 Welcome to Eshop!", read: false },
    { id: 2, message: "🔥 Flat 20% off on Electronics!", read: false },
  ]);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((notif) => ({ ...notif, read: true }))
    );
  };

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      setTotalItems(cart.length);
    };
    window.addEventListener("cartUpdated", updateCartCount);

    return () => {
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, []);

  // 🔍 Search State
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const productList = JSON.parse(localStorage.getItem("productList")) || [];

    if (search.trim() === "") {
      setSuggestions([]);
    } else {
      const filtered = productList.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
      setSuggestions(filtered);
    }
  }, [search]);

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        background: "linear-gradient(90deg, #ebf4f7ff 0%, #4f97e5ff 100%)",
        boxShadow: "0 4px 24px rgba(118,75,162,0.08)",
      }}
    >
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="/img/Eshop.png"
            width="140px"
            height="40"
            alt="Eshop Logo"
            style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.08))" }}
          />
        </Link>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Content */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex align-items-center gap-2">
            <li className="nav-item">
              <Link
                className="btn btn-sm fw-bold px-3"
                to="/"
                style={{
                  borderRadius: "2rem",
                  color: "#764ba2",
                  background: "#fcfcfcff",
                  border: "none",
                  boxShadow: "0 2px 8px rgba(118,75,162,0.08)",
                }}
              >
                <i className="bi bi-house-door-fill me-1"></i> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="btn btn-sm fw-bold px-3"
                to="/Product"
                style={{
                  borderRadius: "2rem",
                  color: "#764ba2",
                  background: "#fcfcfcff",
                  border: "none",
                  boxShadow: "0 2px 8px rgba(118,75,162,0.08)",
                }}
              >
                <i className="bi bi-bag me-1"></i> Product
              </Link>
            </li>
          </ul>

          <div className="d-flex align-items-center position-relative">
            {/* 🔍 Search */}
            <div style={{ maxWidth: 400, position: "relative" }}>
              <div className="input-group input-group-sm mb-0">
                <input
                  type="text"
                  className="form-control me-2"
                  placeholder="Search Here"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  style={{ borderRadius: "2rem 0 0 2rem" }}
                />
                <button
                  className="btn btn-light"
                  type="button"
                  style={{
                    borderRadius: "0 2rem 2rem 0",
                    background: "#fff",
                    color: "#764ba2",
                    fontWeight: "bold",
                  }}
                >
                  <i className="bi bi-search"></i>
                </button>
              </div>

              {/* 📄 Suggestions Dropdown */}
              {suggestions.length > 0 && (
                <ul
                  className="list-group position-absolute mt-1 shadow-sm"
                  style={{
                    width: "100%",
                    zIndex: 1000,
                    borderRadius: "10px",
                    maxHeight: "200px",
                    overflowY: "auto",
                  }}
                >
                  {suggestions.map((item) => (
                    <Link
                      key={item.id}
                      to={`/product-details/${item.id}`}
                      className="list-group-item list-group-item-action"
                      onClick={() => {
                        setSearch("");
                        setSuggestions([]);
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
                </ul>
              )}
            </div>

            {/* 🛒 Cart Button */}
            <div className="ms-3">
              <Link
                className="btn btn-sm btn-warning fw-bold px-3 d-flex align-items-center"
                to="/Cart"
                style={{
                  borderRadius: "2rem",
                  color: "#764ba2",
                  background: "#ffffffff",
                  border: "none",
                  boxShadow: "0 2px 8px rgba(118,75,162,0.08)",
                }}
              >
                <i className="bi bi-cart3 me-2"></i> Cart
                <span className="badge text-bg-secondary ms-2">
                  {totalItems}
                </span>
              </Link>
            </div>

            {/* 🔔 Notifications */}
            <div className="ms-3 dropdown">
              <button
                className="btn btn-light position-relative"
                data-bs-toggle="dropdown"
                onClick={markAllAsRead}
                style={{
                  borderRadius: "50%",
                  boxShadow: "0 2px 8px rgba(118,75,162,0.08)",
                }}
              >
                <i className="bi bi-bell-fill fs-5 text-primary"></i>
                {unreadCount > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {unreadCount}
                  </span>
                )}
              </button>
              <ul className="dropdown-menu dropdown-menu-end p-2 shadow-sm">
                {notifications.length === 0 ? (
                  <li className="text-muted px-3">No notifications</li>
                ) : (
                  notifications.map((notif) => (
                    <li
                      key={notif.id}
                      className={`dropdown-item small ${
                        notif.read ? "text-muted" : "fw-bold"
                      }`}
                    >
                      {notif.message}
                    </li>
                  ))
                )}
              </ul>
            </div>

            {/* 👤 Login Dropdown */}
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
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="loginDropdown"
              >
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
                {Auth && (
                  <>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/auth/profile">
                        <i className="bi bi-person-lines-fill me-2"></i>Profile
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
