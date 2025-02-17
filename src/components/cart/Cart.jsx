import React from 'react'
import './Cart.css'

function Cart({show, addedData, closeLogic, checkOutLogic, quantityData, plusLogic, minusLogic}) {
  return (
    <div className={show}>
        <h1>Shopping Cart</h1>
        <div className="listCart">
            {addedData.map((item) => { 
                return (
                <div className='item' key={item.productId}>
                    <div className="image">
                        <img src={item.productImage}></img>
                    </div>
                    <div className="name">
                    {item.productName}
                    </div>
                    <div className="totalPrice">{item.productPrice}$</div>
                    <div className="quantity">
                        <span className="minus" onClick={() => minusLogic(item.productId)}>-</span>
                        <span>{quantityData[item.productId]}</span>
                        <span className="plus" onClick={() => plusLogic(item.productId)}>+</span>
                    </div>
                    </div>
                    )
            }
            )}
            
        </div>
        <div className="btn">
            <button className="close" onClick={closeLogic}>CLOSE</button>
            <button className="checkOut" onClick={checkOutLogic}>Check Out</button>
        </div>
    </div>
  )
}

export default Cart;