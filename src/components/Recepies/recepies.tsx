import React, { FormEvent, useState } from 'react'
import Menu from '../../style/menu'
import { Link } from 'react-router-dom'
import { api } from '../../../lib/axios'

interface RecepieProps{
    tittle: string
    body: string
}

export default function App() {



    const [recepie, getRecepie] = useState<RecepieProps[]>([])

    function recRecepie(){
        api.get('recepies/count')
            
            .then(function (response) {
                getRecepie(response.data.count)
            })
    }

    const [recepieTittle, setRecepieTittle] = useState('')
    console.log(recepieTittle)

    function setTittleRecepieParams(event: FormEvent) {
        event.preventDefault()
        api.post('getRecepieTittle', {
            tittle: recepieTittle
        })
        
    }


    recRecepie()

        return (
            <div className="h-full w-full bg-background flex flex-col items-center gap-y-5">
                <header className='flex flex-col items-center'>
                    <Menu className='w-40' />
                    <h1 className="font-cursive text-6xl text-tittle">Receitas</h1>
                </header> <br />

                <div>
                    <Link to="/AdcionarReceita"><button className='bg-tittle p-2 rounded-lg hover:bg-[#fde68a] font-bold w-full'>Adicione sua receita</button></Link>
                </div>

                <form onSubmit={setTittleRecepieParams}>
                    <ul className='flex flex-col itens-center justify-center gap-y-4'>
                    {recepie.map(recepies => {
                        return (
                            <li className='flex flex-col items-center justify-center text-white text-2xl gap-y-4 p-4 bg-black rounded-lg font-bold'>
                                <h1 className='text-4xl'>{recepies.tittle}</h1>
                                <p>{recepies.body}</p>
                            </li>
                        )
                    })}
                   
                </ul>
                </form>

            </div>  
        )
    
}



