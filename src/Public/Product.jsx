import React from 'react'

export default function Product() {
  const products=[
    {id:1,name:"Speaker",price:399,image:'./img/speaker.jpg'},
    {id:2,name:"Shoe",price:599,image:'./img/shoe.jpg'},
    {id:3,name:"TV",price:17999,image:'./img/TV.jpg'},
    {id:4,name:"Smart Phone",price:13999,image:'./img/smart phone.jpg'},
    {id:5,name:"Laptop",price:55999,image:'./img/laptop.jpg'},
    {id:6,name:"T-Shirt",price:699,image:'./img/t-shirt.jpg'},
    {id:7,name:"Smart Watch",price:1299,image:'./img/smart Watch.jpg'},
    {id:8,name:"Headphone",price:1799,image:'./img/head phone.jpg'},
    {id:9,name:"Wall Clock",price:215,image:'./img/wall clock.jpg'},
    {id:10,name:"Cycle",price:5200,image:'./img/cycle.jpg'},
    {id:11,name:"Shampoo",price:637,image:'./img/shampoo.jpg'},
    {id:12,name:"Perfume",price:199,image:'./img/perfume.jpg'},

    
  ]
  return (
    <>
      <div className="row">
        {products.map((product) => (
          <div className="col-sm-2 mb-2" key={product.id}>
            <div className="card">
              <img src={product.image} className="card-img-top"/>
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

   
