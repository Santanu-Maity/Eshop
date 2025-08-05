import React from 'react'
import { Link } from 'react-router-dom'

export default function MostBuy() {
  const products = [
    { id: 13, name: "Washing Machine", price: 6490, image: './img/washing machine2.jpg' },
    { id: 14, name: "Smart Watch", price: 1299, image: './img/smart Watch12.jpg' },
    { id: 15, name: "Neck band", price: 699, image: './img/neck band.jpg' },
    { id: 16, name: "Buds", price: 1399, image: './img/buds3.jpg' },
    { id: 17, name: "Laptop", price: 49500, image: './img/laptop2.jpg' },
    { id: 18, name: "T-Shirt", price: 398, image: './img/t-shirt2.jpg' },


  ]
  return (
    <>

      <div className="container-fluid mt-5 px-4">
        <div className="row g-3">
          {products.map((product) => (
            <div key={product.id} className="col-6 col-sm-4 col-md-3 col-lg-2">
              <Link to={`/${product.id}`} style={{ textDecoration: "none" }}>
                <div className="card h-100 shadow-sm" style={{ borderRadius: "1rem" }}>
                  <div className="card-header text-center fw-bold text-white"
                    style={{
                      background: "#0955a0ff",
                      borderTopLeftRadius: "1rem",
                      borderTopRightRadius: "1rem"
                    }}>
                    {product.name}
                  </div>
                  <div className="card-body d-flex align-items-center justify-content-center p-2">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="img-fluid"
                      style={{ maxHeight: "130px", objectFit: "contain" }}
                    />
                  </div>
                  <div className="card-footer text-center">
                    <span className="fw-bold text-dark">₹{product.price}</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

