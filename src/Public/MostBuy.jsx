import React from 'react'
import { Link } from 'react-router-dom'

export default function MostBuy() {
  const products = [
    { id: 13, name: "Washing Machine", price: 6490, image: './img/washing machine2.jpg' },
    { id: 14, name: "Smart Watch", price: 1299, image: './img/smart Watch12.jpg' },
    { id: 15, name: "Neck band", price: 699, image: './img/neck band.jpg' },
    
    
   
    
    
     { id: 16, name: "Buds", price: 1399, image: './img/buds.jpg' },
    { id: 17, name: "Laptop", price: 49500, image: './img/laptop2.jpg' },
    { id: 18, name: "T-Shirt", price: 398, image: './img/t-shirt.jpg' },
    

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

