import React from "react";
import { useParams, Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Speaker",
    price: 300,
    image: "./img/speaker.jpg",
    description: "Wireless Bluetooth speaker with 8-hour battery life.",
  },
  {
    id: 2,
    name: "Cycle",
    price: 5202,
    image: "./img/cycle.jpg",
    description: "21-speed mountain bike, perfect for city and off-road.",
  },
  {
    id: 3,
    name: "TV",
    price: 18999,
    image: "./img/TV.jpg",
    description: "32-inch Full HD Smart TV with voice control.",
  },
  {
    id: 4,
    name: "Chair",
    price: 3590,
    image: "./img/Chair.jpg",
    description: "Ergonomic office chair with lumbar support.",
  },
  {
    id: 5,
    name: "Coffee",
    price: 740,
    image: "./img/Coffee.jpg",
    description: "Premium roasted Arabica coffee, 500g pack.",
  },
  {
    id: 6,
    name: "Bed",
    price: 14999,
    image: "./img/Bed.jpg",
    description: "Queen-size wooden bed with storage.",
  },
  {
    id: 7,
    name: "Analog Watch",
    price: 292,
    image: "./img/Analog Watch.jpg",
    description: "Classic leather strap analog watch.",
  },
  {
    id: 8,
    name: "Headphone",
    price: 1799,
    image: "./img/head phone.jpg",
    description: "Over-ear noise-cancelling Bluetooth headphones.",
  },
  {
    id: 9,
    name: "Wall Clock",
    price: 215,
    image: "./img/wall clock.jpg",
    description: "Modern design wall clock for living room.",
  },
  {
    id: 10,
    name: "Smart Phone",
    price: 12998,
    image: "./img/smart phone.jpg",
    description: "6.5-inch AMOLED display, 64MP camera, 5G.",
  },
  {
    id: 11,
    name: "Shoe",
    price: 599,
    image: "./img/shoe.jpg",
    description: "Comfortable running shoes for men.",
  },
  {
    id: 12,
    name: "Perfume",
    price: 199,
    image: "./img/perfume.jpg",
    description: "Long-lasting unisex fragrance, 100ml.",
  },
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
