import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HashLoader } from 'react-spinners'
import Home from './Home';
import NavBar from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './Products';
import Aboutus from './Aboutus';
import LoginPage from './LoginPage';
import Cartitems from './Cartitems';
import Plist from './Plist'
import './App.css'
import ProductProvider from './PContext';
import ProList from './ProList';
import ProductDetails from './ProductDetails';
import Pcart from './Pcart';
import RegisterPage from './RegisterPage';
import AuthDeitails from './images/AuthDeitails';
const App = () => {
  const [loading ,setloading] = useState(false)

  useEffect (() => {
    setloading(true)
    setTimeout(() => {
      setloading(false)
    }, 3000)
  }, []);

  return (
    <BrowserRouter>
    {loading ?
     <div className='load'><HashLoader color="#f1916d" /></div>
     : <>
     <NavBar />
     <AuthDeitails/>
    <ProductProvider>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Home' element={<Home/>} />
      <Route path='/Products' element={<Products/>} />
      <Route path='/Aboutus' element={<Aboutus/>} />
      <Route path='/LoginPage' element={<LoginPage/>} />
      <Route path='/Cartitems' element={<Cartitems/>} />
      <Route path='/Plist' element={<Plist/>} />
      <Route path='/ProList' element={<ProList/>} />
      <Route path='/Products/:id' element={<ProductDetails />} />
      <Route path='/Pcart' element={<Pcart />} />
      <Route path='/RegisterPage' element={<RegisterPage />} />






    </Routes>
    </ProductProvider>
      </>}
    </BrowserRouter>
  )
}

export default App