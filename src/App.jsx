import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'
import Body from './Body'
import Jumbotron from './Jumbotron'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <Navbar/>
        <div className='container'>
          <Jumbotron/>
          <Body/>
        </div>
      <Footer/>  
    </div>
      
  )
}

export default App
