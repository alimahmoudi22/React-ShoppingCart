import React from 'react'
import './Product.css'


function Product({id, image, name, price, onAddProduct}) {
  return (
    <div className="item">
                <img src={image} alt=""></img>
                <h2>{name}</h2>
                <div className="price">${price}</div>
                <button className="addCart" onClick={() => onAddProduct(id, image, name, price)}>Add To Cart</button>
    </div>
  )
}

export default Product