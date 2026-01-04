import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='bg-gray-600 text-white p-5'>
        <div>
            Logo
        </div>
        <div>
            <Link to="/">Home</Link>
            <Link to="/Login">Login</Link>
        </div>
    </div>
  )
}

export default Nav