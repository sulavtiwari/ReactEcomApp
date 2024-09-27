
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Cart from './Cart'
import Error from './Error'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/about" element={<About />} ></Route>
          <Route path="/contact" element={<Contact />} ></Route>
          <Route path="/cart" element={<Cart />} ></Route>
          <Route path="*" element={<Error />} ></Route>
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App
