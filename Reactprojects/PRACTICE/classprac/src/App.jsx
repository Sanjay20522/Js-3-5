import React from 'react'

const App = () => {

  const users = ["Sanjay","Naresh"];
  return (
    <div>
      {users.map((user)=>(
        <p>{user}</p>
      ))}
    </div>  
  )
}

export default App