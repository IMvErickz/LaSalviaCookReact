import { useState } from 'react'
import reactLogo from './assets/react.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <nav className='bg-black w-screen h-16'>
        <h1 className='text-white text-3xl'>logo</h1>
      </nav>

      <div className='w-screen h-screen bg-slate-500'>

      </div>
    </div>
  )
}

export default App
