import React from 'react'
import { Route } from 'react-router-dom'
import Contact from './components/Contact'
import About from './components/About'
import Home from './components/Home'

const App = () => {
  return (
    <div>
      <Routers>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Navbar/>
      </Routers>
    </div>
  )
}

export default App