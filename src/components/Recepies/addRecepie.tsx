import { FormEvent, useState } from 'react'
import Swal from 'sweetalert2'
import { api } from '../../../lib/axios'
import { Header } from './../Header/Header'
import { Link } from "react-router-dom";




export default function Add() {

    

        const [recepieTittle, setRecepieTittle] = useState('')
        const [recepieBody, setRecepieBody] = useState('')
    
        async function createRecepie(event: FormEvent) {

            event.preventDefault()

            try {
                const recepie = await api.post('/AdcionarReceita', {
                    tittle: recepieTittle,
                    body: recepieBody
                })
                
                    const {code} = recepie.data
                    Swal.fire(
                    'Parabéns',
                    'Receita salva com sucesso',
                    'success'
                )
               
                await navigator.clipboard.writeText(code)
            } catch (err) {
                Swal.fire(
                    'Algo de errado aconteceu',
                    'Tente novamente',
                    'warning'
                )
            }

        }

    return (
        <div className='w-screen h-screen flex flex-col justify-center items-center bg-background'>
            <Link to="/"><Header/></Link>
            <form onSubmit={createRecepie} className='flex flex-col items-center justify-center'>
                 <h1 className='text-tittle font-cursive text-4xl'>Adicione sua receita</h1>  <br /> <br /> <br />
            <div className='flex flex-col justify-center items-center'>
                <label htmlFor="tittle" className='text-3xl text-zinc-200'>Título da receita</label>
                    <input id='tittle' onChange={event => setRecepieTittle(event.target.value)}
                        type="text" className='rounded text-black w-56 h-9'
                        value={recepieTittle}
                    /> <br />

                <label htmlFor="body" className='text-3xl text-zinc-200'>Corpo da receita</label>
                <textarea name="" onChange={event => setRecepieBody(event.target.value)} id="body" cols={60} rows={10} placeholder="Digite aqui sua receita" className='rounded text-black'></textarea> <br /> <br />
                <button type='submit' className='rounded bg-tittle w-full p-3 font-bold text-2xl hover:bg-slate-400'>Adcionar</button>
            </div>
            </form>
           

        </div>
    )
}


