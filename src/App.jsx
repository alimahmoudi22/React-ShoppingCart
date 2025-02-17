import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Cart from './components/cart/Cart'
import Store from './components/Store/Store'

function App() {

  const [cartShow, setCartShow] = useState(false)
  const clickHandler = () => {
    setCartShow(!cartShow)
  }
  const closeHandler = () => {
    setCartShow(false)
  }


  const [shopData,setShopData] = useState([])
  useEffect(() => {
    fetch('../products.json')
    .then((res) => res.json())
    .then((data) => {
      setShopData(data)})
  },[])


  const [cartAdded,setCartAdded] = useState([])
  const productClickHandler = (productId , productImage, productName, productPrice) => {

    const findResult = cartAdded.find((item) => item.productId === productId)

    if (!findResult) {
      const addedProductData = {productId, productName,productImage,productPrice};
      setCartAdded((prev) => [...prev, addedProductData]);
      setQuantity((prev) => ({...prev, [productId]: 1}));
    } else {
      setQuantity((prev) => ({...prev, [productId]: prev[productId] + 1}))
    }

    setCartCount((prev) => prev + 1)
  }
  const checkOutHandler = () => {
    setCartAdded([])
    setCartCount(0)
  }


  const [cartCount,setCartCount] = useState(0)


  const [quantity,setQuantity] = useState({})
  const plusHandler = (productId) => {
    setQuantity((prev) => ({...prev, [productId]: prev[productId] + 1}))
    setCartCount((prev) => prev + 1)
  }
  const minusHandler = (productId) => {
    if (quantity[productId] > 1) {
      setQuantity((prev) => ({...prev, [productId]: prev[productId] - 1}))
    } else {
      const newCartAdded = cartAdded.filter((item) => item.productId !== productId);
      setCartAdded(newCartAdded)
    }
    setCartCount((prev) => prev - 1)
  }


  return (
    <>
    <div className={cartShow ? 'container showContainer' : 'container'}>
     <Header onCartToggle={clickHandler} cartProductCount={cartCount}></Header>

     <Store fetchData={shopData} onAddStore={productClickHandler}></Store>
    </div>

    <Cart show={cartShow ? 'cartTab showCart' : 'cartTab'} addedData={cartAdded} closeLogic={closeHandler} checkOutLogic={checkOutHandler} quantityData={quantity} plusLogic={plusHandler} minusLogic={minusHandler}></Cart>
    </>
  )
}

export default App
