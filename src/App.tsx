import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/index'
import Recepies from './pages/recep'
import Add from './pages/addRecepies'



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/receitas' element={<Recepies />} />
        <Route path='/AdcionarReceita' element={<Add />} />
        
        
        
      </Routes>
      
    </BrowserRouter>
)
}

export default App
