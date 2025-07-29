import React from 'react'

export default function Product() {
  const products=[
    {id:1,name:"Speaker",price:1000},
    {id:1,name:"Speaker",price:1000},
    {id:1,name:"Speaker",price:1000},
    {id:1,name:"Speaker",price:1000},
    {id:1,name:"Speaker",price:1000},
    {id:1,name:"Speaker",price:1000},
    {id:1,name:"Speaker",price:1000},
    {id:1,name:"Speaker",price:1000},
    {id:1,name:"Speaker",price:1000},
    {id:1,name:"Speaker",price:1000},

    
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

   
