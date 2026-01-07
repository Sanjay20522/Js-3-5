import React, { useContext } from 'react'
import { AddContext } from '../context/AddContext'

const NavBar = () => {
    const {cart} = useContext(AddContext)
  return (
<>
<div>
    AddtoCart
    <h1>{cart}</h1>
</div>
</> 
 )
}

export default NavBar