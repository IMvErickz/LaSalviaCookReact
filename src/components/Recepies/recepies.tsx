import React, { useState } from 'react'
import Menu from '../../style/menu'
import { Link } from 'react-router-dom'
import { api } from '../../../lib/axios'

interface RecepieProps{
    tittle: string
}

export default function App() {

    const [recepie, getRecepie] = useState<RecepieProps[]>([])

    function recRecepie(){
        api.get('recepies/count')
            
            .then(function (response) {
                getRecepie(response.data.count)
            })
    }

    recRecepie()

        return (
            <div className="bg-background flex flex-col items-center gap-y-5">
                <header className='flex flex-col items-center'>
                    <Menu className='w-40' />
                    <h1 className="font-cursive text-6xl text-tittle">Receitas</h1>
                </header> <br />

                <div className='flex flex-col justify-center items-center'>
                    <span id='recTittle' className='text-white text-6xl'></span> <br />
                    <span id='bodyRec' className='text-white text-6xl'></span>

                </div>

                <div>
                    <Link to="/AdcionarReceita"><button className='bg-tittle p-2 rounded-lg hover:bg-[#fde68a] font-bold w-full'>Adicione sua receita</button></Link>
                </div>

                <ul className='flex flex-col itens-center justify-center gap-y-4'>
                    {recepie.map(recepies => {
                        return (
                            <li className='flex flex-col items-center justify-center text-white text-2xl p-4 bg-black rounded-lg font-bold'>
                                <Link to='/receita'>{recepies.tittle}</Link>
                            </li>
                        )
                    })}
                   
                </ul>

            </div>

            
            
        )
    
}



