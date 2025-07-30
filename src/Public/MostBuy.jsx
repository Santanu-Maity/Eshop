import React from 'react'
import { Link } from 'react-router-dom'

export default function MostBuy() {
  const products = [
    { id: 11, name: "Buds", price: 300, image: './img/buds.jpg' },
    { id: 12, name: "Cycle", price: 5202, image: './img/cycle.jpg' },
    { id: 13, name: "TV", price: 18999, image: './img/TV.jpg' },
    { id: 14, name: "Neck band", price: 699, image: './img/neck band.jpg' },
    { id: 15, name: "Laptop", price: 49500, image: './img/laptop.jpg' },
    { id: 16, name: "T-Shirt", price: 398, image: './img/t-shirt2.jpg' },
    

  ]
  return (
    <>
      <div className="row m-3">
        {products.map((product) => (
          <Link to={`/${product.id}`} style={{ textDecoration: "None" }} className="col-sm-2 mb-2" key={product.id}>
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



