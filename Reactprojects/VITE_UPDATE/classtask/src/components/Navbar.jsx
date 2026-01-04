import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-gray-600 '>
        <div>
            LOGO
        </div>
        <div>
            <button onClick={()=>("home")}>Home</button>
            <button onClick={()=>("about")}>About</button>
            <button onClick={()=>("contact")}>Contact</button>
        </div>
    </div>
  )
}

export default Navbar