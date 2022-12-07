import React from 'react'
import Menu from '../../style/menu'
import { Link } from 'react-router-dom'
import { api } from '../../../lib/axios'

interface HomeProps{
    recRecepie: Function;
}

export default function App(props: HomeProps) {

        function recRecepie() {
        api.get('recepies/count')
        
    
        .then(function (response) {
        
            let res = response.data.count
            let div = (document.getElementById('blockRecepie') as HTMLDivElement)
            
            for (let i = 0; i < res.length; i++){ 
                
                let transformTitle = response.data.count[i].tittle
        
                console.log(JSON.stringify(transformTitle))
                
                let span = (document.getElementById('tittle') as HTMLSpanElement)
                let t = document.createElement('button')
                t.style.color = 'white'
                t.style.fontWeight = 'bold'
                t.style.fontSize='30px'

                t.innerHTML = transformTitle

                div.appendChild(t)
            }
  })
} 
   
    recRecepie()
   

        return (
            <div className="w-screen h-screen bg-background flex flex-col items-center gap-y-5">
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

                <div id='blockRecepie' className='flex flex-col items-center border-solid border-black bg-[#1f2937] rounded-2xl w-80 gap-y-5'>
                    <h1 id='tittle' className='font-bold text-3xl text-white'></h1>
                </div>

            </div>
        )
    
}



    

