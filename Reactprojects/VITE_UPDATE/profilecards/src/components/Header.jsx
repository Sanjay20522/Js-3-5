import React from 'react'

const Header = ({dashboardtitle}) => {
  return (
    <div>
        <h1 className='bg-yellow-600 text-3xl font-bold text-center my-5'>

          <h1>{dashboardtitle}</h1>
        </h1>



    </div>
  )
}

export default Header