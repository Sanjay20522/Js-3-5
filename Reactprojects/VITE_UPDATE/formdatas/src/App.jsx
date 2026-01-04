import React, { useState } from 'react'

const App = () => {

    const [formData, setFormData] = useState({
        name: "",
        age: "",
        email: "",
        address: "",
        phone: ""

    });

    const handleChange = (e) => {
      setFormData({...formData,[e.target.name]:e.target.value})



    }

    const handleSubmit = (e)=> {
      e.preventDefault()



    }


  return (
    <>
    <h1>Enter Your Information:</h1>
    <div>
      <form onClick={handleSubmit} >
       <label>Name:<input onChange={handleChange} name='name' type="text" placeholder='Enter the Name' /></label> 
       <label>Age: <input onChange={handleChange} name='age' type="text" placeholder='Enter the Age' /></label>
       <label>Email:<input onChange={handleChange} name='email' type="text" placeholder='Enter the Email' /></label>
       <label>Address:<input onChange={handleChange} name='address' type="text" placeholder='Enter the Address' /></label>      
       <label>Phone:<input onChange={handleChange} name='phone' type="text" placeholder='Enter the Phone Number' /></label>
      <label className='p-20px w-200'><input onChange={handleChange} type="submit" value="Register" /></label> 




      </form>
    </div>
    
    
    </>
  )
  
} 

export default App