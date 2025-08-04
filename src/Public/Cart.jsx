import React from 'react';
import { Link } from 'react-router-dom';

export default function Cart() {

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const [Auth, setAuth] = React.useState(true);

  return (
    <>
      {Auth ?
        (
          <>
          
          </>
        ) : (
          <>
            <div className="container mt-5 d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "60vh" }}>
              <h2 className="mb-4">Your Cart</h2>
              <img
                src="https://cdn-icons-png.flaticon.com/512/2762/2762885.png"
                alt="Empty Cart"
                style={{ width: "180px", opacity: 0.7 }}
                className="mb-4"
              />
              <p className="fs-5 text-secondary mb-4">Your cart is currently empty.</p>
              <Link to="/Login" className="btn btn-primary">
                Login to Buy
              </Link>
            </div>
          </>
        )}
    </>
  )
}



