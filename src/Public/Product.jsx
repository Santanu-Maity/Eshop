import React from 'react'

export default function Product() {
  const products=[
    {id:1,name:"Speaker",price:1000},
    {id:2,name:"TV",price:20000},
    {id:3,name:"Shoe",price:900},
    {id:4,name:"Smart Phone",price:30000},
    {id:5,name:"Laptop",price:60000},
    {id:6,name:"Shirt",price:1000},
    {id:7,name:"Smart Watch",price:1000},
    {id:8,name:"Headphone",price:1200},
    {id:9,name:"Wall Clock",price:700},
    {id:10,name:"Cycle",price:2500},
    {id:11,name:"Shampoo",price:800},
    {id:12,name:"Perfume",price:900},

    
  ]
  return (
    <>
      <div className="row">
        {products.map((product) => (
          <div className="col-sm-3 mb-3" key={product.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Price:Rs{product.price}</p>
              </div>
            </div>
            </div>
        ))}
        </div>
        </>
  )
}

   
