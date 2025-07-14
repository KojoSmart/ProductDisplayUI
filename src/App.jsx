import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import ProductPage from './pages/ProductPage';
import ProductDetails from './pages/ProductDetails';
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
     <Routes>
      <Route path ="/" element = {<ProductPage/>}/>
      <Route path ="/product/:id" element = {<ProductDetails/>}/>

     </Routes>
    </BrowserRouter>
  )
}

export default App
