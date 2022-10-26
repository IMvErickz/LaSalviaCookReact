import { useState } from 'react'
import Logo from './Logo'

function App() {
  

  return (
    <div className='w-screen h-screen bg-[#393256] flex flex-col items-center'>
      <header className='flex flex-col items-center'>
        <Logo className='w-40' />
        <h1 className='text-6xl text-[#fcd34d] bold font-cursive'>LaSalviaCook</h1>
        <p className='text-white text-3xl font-cursive'>O seu site de receitas favorito!</p>
      </header>
    </div>
  )
}

export default App
