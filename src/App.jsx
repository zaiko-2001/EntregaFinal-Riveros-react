import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import NavBar from './components/Navbar/NavBar.jsx'
import CartSideBar from './components/Navbar/CartSideBar/CartSideBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'
import Footer from './components/Footer/Footer.jsx';
import CheckOut from "./components/CheckOut/CheckOut.jsx"



function App() {
  

  return (
    <>
     <BrowserRouter>
      <NavBar />
      <CartSideBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/checkout" element={<CheckOut />} /> 


      </Routes>
    </BrowserRouter>
    <Footer />
    </>
  )
}

export default App
