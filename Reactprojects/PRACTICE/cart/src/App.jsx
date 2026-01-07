import React from 'react'
import CartProvider from './provider/CartProvider'
import NavBar from './components/NavBar'
import ProductList from './components/ProductList'

const App = () => {
  return (
    <>
    <CartProvider>
    <NavBar/>
    <ProductList/>
    </CartProvider>


    
    </>
  )
}

export default App