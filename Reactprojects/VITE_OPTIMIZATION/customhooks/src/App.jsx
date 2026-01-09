import React from 'react'
import ToggleButton from './components/ToggleButton'
import LoginForm from './components/LoginForm'
import Counter from './components/Counter'

const App = () => {
  return (
    <div style={{padding: "20px"}}>
      <h2>useToggle</h2>
      <ToggleButton/>

      <h2>useCounter</h2>
      <Counter initial={0} step={1}/>
      <Counter initial={5} step={5}/>

    </div>

  )
}

export default App
