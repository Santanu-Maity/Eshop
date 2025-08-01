import React from "react";
import { useParams, Link } from "react-router-dom";

const products = [
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

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="text-center mt-5">Product not found</div>;
  }

  return (
    <div className="container mt-5">
      <Link to="/" className="btn btn-secondary mb-3">← Back to Products</Link>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg p-3">
            <img
              src={product.image}
              alt={product.name}
              className="card-img-top"
              style={{ objectFit: "contain", maxHeight: "300px" }}
            />
            <div className="card-body text-center">
              <h3 className="card-title">{product.name}</h3>
              <h5 className="text-success">₹{product.price}</h5>
              <p className="card-text text-muted mt-3">{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
