import React from 'react'
import { Link } from 'react-router-dom'

export default function Product() {
  const products = [
    { id: 1, name: "Speaker", price: 399, image: './img/speaker.jpg' },
    { id: 2, name: "Cycle", price: 5200, image: './img/cycle.jpg' },
    { id: 3, name: "TV", price: 17999, image: './img/TV.jpg' },
    { id: 4, name: "Neck band", price: 699, image: './img/neck band.jpg' },
    { id: 5, name: "Laptop", price: 55999, image: './img/laptop.jpg' },
    { id: 6, name: "T-Shirt", price: 398, image: './img/t-shirt2.jpg' },
    { id: 7, name: "Smart Watch", price: 1299, image: './img/smart Watch.jpg' },
    { id: 8, name: "Headphone", price: 1799, image: './img/head phone.jpg' },
    { id: 9, name: "Wall Clock", price: 215, image: './img/wall clock.jpg' },
    { id: 10, name: "Smart Phone", price: 13999, image: './img/smart phone.jpg' },
    { id: 11, name: "Shoe", price: 599, image: './img/shoe.jpg' },
    { id: 12, name: "Perfume", price: 199, image: './img/perfume.jpg' },


  ]
  return (
    <>
      <div className="row m-3">
        {products.map((product) => (
          <Link to={`/${product.id}`} style={{textDecoration:"None"}} className="col-sm-2 mb-2" key={product.id}>
            <div class="card text-center" style={{ height: "100%" }}>
              <div class="card-header">
                {product.name}
              </div>
              <div class="card-body">
                <img src={product.image} className="card-img-top" style={{ width: "100%" }} />
                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
              </div>
              <div class="card-footer text-body-secondary">
                Price:₹{product.price}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}


