import React from 'react'
import Menu from '../../style/menu'
import {Link} from 'react-router-dom'

function App() {

    window.onload = function () {
        const rec = localStorage.getItem("Recepie")

        const tittle = (document.getElementById("recTittle") as HTMLSpanElement)
        const body = (document.getElementById("body") as HTMLSpanElement)

        tittle.innerHTML = rec.Tittle
    }


        return (
            <div className="w-screen h-screen bg-background flex flex-col items-center">
                <header className='flex flex-col items-center'>
                    <Menu className='w-40' />
                    <h1 className="font-cursive text-6xl text-tittle">Receitas</h1>
                </header> <br />

                <div className='flex flex-col justify-center items-center'>
                    <span id='recTittle'></span> <br />
                    <span id='bodyRec'></span>

                </div>

                <div>
                    <Link to="/AdcionarReceita"><button className='bg-tittle p-2 rounded-lg hover:bg-[#fde68a] font-bold w-full'>Adicione sua receita</button></Link>
                </div>

            </div>
        )
    
}

export default App