import React from 'react'
import './Header.css'
import { FaCartShopping } from "react-icons/fa6";

function Header({onCartToggle, cartProductCount}) {
  return (
    <header>
        <div className="title">Shopping Cart</div>
            <div className="icon-cart">
                <FaCartShopping className='header__icon' onClick={onCartToggle}></FaCartShopping>
                <span>{cartProductCount}</span>
            </div>
    </header>
  )
}

export default Header