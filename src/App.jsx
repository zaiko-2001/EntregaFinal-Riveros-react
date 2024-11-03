import { useState } from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'


function App() {
  

  return (
    <>
     <NavBar/>
     <ItemListContainer saludo={'Bienvenido a mi tienda'}/>

    </>
  )
}

export default App
