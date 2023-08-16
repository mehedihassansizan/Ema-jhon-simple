import './App.css'
import Navbar from './components/Navbar/Navbar'
import Oder from './components/Oder/Oder'
import Products from './components/Products/Products'

function App() { 
return (
    <div className='App'>
      <Navbar></Navbar>
      {/* <Oder></Oder> */}
      <Products></Products>
    </div>
  )
}

export default App
