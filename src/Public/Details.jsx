import React from "react";
import { useParams } from "react-router-dom";

// Product List
const productList = [
  { id: 1, name: "Speaker", price: 300, image: '/img/speaker.jpg', description: "High-quality Bluetooth speaker with deep bass.", rating: 4 },
  { id: 2, name: "Cycle", price: 5202, image: '/img/cycle.jpg', description: "Durable mountain bike for all terrains.", rating: 5 },
  { id: 3, name: "TV", price: 18999, image: '/img/TV.jpg', description: "42-inch Smart LED TV with HD resolution.", rating: 4 },
  { id: 4, name: "Chair", price: 3590, image: '/img/Chair.jpg', description: "Ergonomic office chair with lumbar support.", rating: 3 },
  { id: 5, name: "Coffee", price: 740, image: '/img/Coffee.jpg', description: "Premium ground coffee beans for espresso.", rating: 4 },
  { id: 6, name: "Bed", price: 14999, image: '/img/Bed.jpg', description: "Queen size wooden bed with storage.", rating: 5 },
  { id: 7, name: "Analog Watch", price: 292, image: '/img/Analog Watch.jpg', description: "Classic design analog watch for men.", rating: 4 },
  { id: 8, name: "Headphone", price: 1799, image: '/img/head phone.jpg', description: "Noise-cancelling over-ear headphones.", rating: 4 },
  { id: 9, name: "Wall Clock", price: 215, image: '/img/wall clock.jpg', description: "Modern wall clock for home or office.", rating: 3 },
  { id: 10, name: "Smart Phone", price: 12998, image: '/img/smart phone.jpg', description: "Affordable smartphone with great features.", rating: 5 },
  { id: 11, name: "Shoe", price: 599, image: '/img/shoe.jpg', description: "Comfortable running shoes.", rating: 4.5 },
  { id: 12, name: "Perfume", price: 199, image: '/img/perfume.jpg', description: "Long-lasting fragrance for daily use.", rating: 3 }
];

const Details = () => {
  const { id } = useParams();
  const product = productList.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="container text-center mt-5">
        <h2 className="text-danger">❌ Product Not Found</h2>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="row g-4 align-items-center">
        {/* Product Image */}
        <div className="col-md-6 text-center">
          <div className="bg-light p-3 rounded shadow" style={{ height: "400px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img
              src={product.image}
              alt={product.name}
              className="rounded shadow-sm"
              style={{
                maxHeight: "100%",
                maxWidth: "100%",
                objectFit: "contain"
              }}
              draggable="false"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="col-md-6">
          <h2 className="fw-bold mb-2">{product.name}</h2>
          <h4 className="text-success mb-3">₹{product.price.toLocaleString()}</h4>
          <p className="text-muted">{product.description}</p>

          {/* Dynamic Star Ratings */}
          <div className="mb-3">
            {[...Array(5)].map((_, index) => {
              const full = index + 1 <= Math.floor(product.rating);
              const half = index + 0.5 === product.rating;

              return (
                <i
                  key={index}
                  className={`bi me-1 ${
                    full
                      ? "bi-star-fill text-warning"
                      : half
                      ? "bi-star-half text-warning"
                      : "bi-star text-secondary"
                  }`}
                ></i>
              );
            })}
            <small className="text-muted ms-1">({product.rating})</small>
          </div>

          {/* Add to Cart Button */}
          <button className="btn btn-primary px-4">
            <i className="bi bi-cart-plus me-2"></i> Add to Cart
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Details;
