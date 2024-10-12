import { useState } from 'react'
import './App.css'
import Header from './Header'
import login from './login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <login/>
    </>
  )
}

export default App
