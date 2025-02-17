import React from 'react'
import './Store.css'
import Product from '../product/Product'



function Store({fetchData, onAddStore}) {
  return (
    <div className="listProduct">
      {fetchData.map((item) => <Product key={item.id} {...item} onAddProduct={onAddStore}></Product>)}
        </div>
  )
}

export default Store