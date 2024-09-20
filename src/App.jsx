import Navbar from './Navbar'
import Footer from './Footer'
import Body from './Body'
import Jumbotron from './Jumbotron'

function App() {

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
