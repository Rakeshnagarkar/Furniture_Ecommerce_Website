import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Shop from './pages/Shop'
import Footer from './components/Footer'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'


function App() {
 

  return (
    <Router> 
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
        <Footer/>
      </>
    </Router> 
  )
}

export default App
