import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'

import Products from './components/Products/Products'

function App() { 
return (
    <div className='App'>
      <Navbar></Navbar>
      <Home></Home>
      <Products></Products>
    </div>
  )
}

export default App
