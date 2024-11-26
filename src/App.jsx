import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import NavBar from './components/Navbar/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'
import Footer from './components/Footer/Footer.jsx';
import SearchResults from "./components/SearchResults/SearchResults.jsx";




function App() {
  

  return (
    <>
     <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/search" element={<SearchResults />} />

      </Routes>
    </BrowserRouter>
    <Footer />
    </>
  )
}

export default App
