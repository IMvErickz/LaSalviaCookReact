import { useState } from 'react'
import Logo from './Logo'

function App() {
  function redirect() {
      window.location.href = '../pages/recepies.html'
    
  }

  return (
    <div className='w-screen h-screen bg-background flex flex-col items-center'>
      <header className='flex flex-col items-center'>
        <Logo className='w-40' />
        <h1 className='text-6xl text-tittle bold font-cursive'>LaSalviaCook</h1>
        <p className='text-white text-3xl font-cursive'>O seu site de receitas favorito!</p>
      </header> <br /> <br />
      <div className='flex flex-col items-center'>
        <button onClick={redirect} className='bg-[#fcd34d] p-2 rounded-lg hover:bg-[#fde68a] font-bold'>Clique aqui para ver todas as receitas</button>

      </div> <br /> <br /> <br />

      <footer className='flex flex-col items-center bg-[#fcd34d] rounded-lg'>
        <h2 className='text-4xl font-freeMono'>Redes sociais</h2>
        <a href=""><p className='font-freeMono'>Instagram</p></a>
        <a href=""><p className='font-freeMono'>Twitter</p></a>
        <a href=""><p className='font-freeMono'>Linkedin</p></a>
      </footer>
    </div>
  )
}

export default App