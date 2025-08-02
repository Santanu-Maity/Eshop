import React from 'react';
import { Link } from 'react-router-dom';
import Tbox2 from './Tbox2';

const products = [
  { id: 1, name: "Speaker", price: 300, image: './img/speaker.jpg' },
  { id: 2, name: "Cycle", price: 5202, image: './img/cycle.jpg' },
  { id: 3, name: "TV", price: 18999, image: './img/TV.jpg' },
  { id: 4, name: "Chair", price: 3590, image: './img/Chair.jpg' },
  { id: 5, name: "Coffee", price: 740, image: './img/Coffee.jpg' },
  { id: 6, name: "Bed", price: 14999, image: './img/Bed.jpg' },
  { id: 7, name: "Analog Watch", price: 292, image: './img/Analog Watch.jpg' },
  { id: 8, name: "Headphone", price: 1799, image: './img/head phone.jpg' },
  { id: 9, name: "Wall Clock", price: 215, image: './img/wall clock.jpg' },
  { id: 10, name: "Smart Phone", price: 12998, image: './img/smart phone.jpg' },
  { id: 11, name: "Shoe", price: 599, image: './img/shoe.jpg' },
  { id: 12, name: "Perfume", price: 199, image: './img/perfume.jpg' },
];

export default function Product() {
  return (
    <>
      <Tbox2 />
      <div className="container my-4">
        <div className="row g-3">
          {products.map((product) => (
            <div key={product.id} className="col-6 col-sm-4 col-md-3 col-lg-2">
              <Link to={`/${product.id}`} style={{ textDecoration: "none" }}>
                <div className="card h-100 shadow-sm" style={{ borderRadius: "1rem" }}>
                  <div className="card-header text-center fw-bold text-white"
                    style={{
                      background: "#764ba2",
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
                      style={{ maxHeight: "120px", objectFit: "contain" }}
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
  );
}
