import React, {useContext } from 'react'
import { AddContext } from '../context/AddContext'

const ProductList = () => {
    const {cartValue} = useContext(AddContext)
  return (
    <>
    <button onClick={cartValue}>AddtoCart</button>

    </>
  )
}

export default ProductList