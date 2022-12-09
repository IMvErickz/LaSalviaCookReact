import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/index'
import Recepies from './pages/recep'
import Add from './pages/addRecepies'
import Body from './pages/body'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/receitas' element={<Recepies />} />
        <Route path='/AdcionarReceita' element={<Add />} />
        <Route path='/receita' element={<Body/>} />
        
        
      </Routes>
      
    </BrowserRouter>
)
}

export default App
