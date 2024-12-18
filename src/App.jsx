import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import  About  from "./pages/About";
import  Contact  from "./pages/Contact";
import  Product  from "./pages/Product";
import  Cart  from "./pages/Cart";
import  Order  from "./pages/Order";
import  Placeorder  from "./pages/Placeorder";
import  Login  from "./pages/Login";
import  Collection  from "./pages/Collection";
import Footer from './components/Footer';
import Searchbar from './components/Searchbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer/>
      <Navbar/>
      <Searchbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Product/:productId' element={<Product/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Order' element={<Order/>}/>
        <Route path='/Placeorder' element={<Placeorder/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Collection' element={<Collection/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
