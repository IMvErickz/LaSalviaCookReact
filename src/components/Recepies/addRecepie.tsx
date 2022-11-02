import React from 'react'
import Swal from 'sweetalert2'

function Add() {

    function addedRecepie() {
        const recepie = {
            Tittle: (document.getElementById("tittle") as HTMLInputElement).value,
            Body: (document.getElementById("body") as HTMLTextAreaElement).value 
        }

           Swal.fire(
                'Parabéns',
                'Sua receita foi salva com sucesso',
                'success'
)
    }

    return (
        <div className='w-screen h-screen flex flex-col justify-center items-center bg-background'>
            <h1 className='text-tittle font-cursive text-6xl'>Adicione sua receita</h1>  <br /> <br /> <br />
            <div className='flex flex-col justify-center items-center'>
                <label htmlFor="tittle" className='text-3xl text-zinc-200'>Título da receita</label>
                <input id='tittle' type="text" className='rounded text-black w-56 h-9' /> <br />

                <label htmlFor="body" className='text-3xl text-zinc-200'>Corpo da receita</label>
                <textarea name="" id="body" cols={60} rows={10} placeholder="Digite aqui sua receita" className='rounded text-black'></textarea> <br /> <br />
                <button onClick={addedRecepie} className='rounded bg-tittle w-full p-3 font-bold text-2xl hover:bg-slate-400'>Adcionar</button>

            </div>

        </div>
    )
}

export default Add