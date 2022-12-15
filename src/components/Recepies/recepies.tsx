import React, { useState } from 'react'
import Menu from '../../style/menu'
import { Link } from 'react-router-dom'
import { api } from '../../../lib/axios'
import CSS from 'csstype';



export default function App() {

    

    function recRecepie(){
        api.get('recepies/count')
        
    
            .then(function (response) {
        
                let res = response.data.count
                let div = (document.getElementById('blockRecepie') as HTMLElement)
            
                for (let i = 0; i < res.length; i++) {
                
                    let transformTitle = response.data.count[i].tittle
        
                    console.log(JSON.stringify(transformTitle))
                
                    let t = document.createElement('button')
                    t.value = transformTitle
                    t.style.color = 'white'
                    t.style.fontWeight = 'bold'
                    t.style.fontSize = '30px'
                    t.id = "openModal"
                    t.style.backgroundColor = 'black'
                    t.style.borderRadius = '8px'
                    t.style.width = "400px"
                    t.innerHTML = transformTitle

                    div.appendChild(t)
                }

                const buttonClicked = (document.getElementById('openModal') as HTMLButtonElement)
                buttonClicked.addEventListener("click", () => {
                    const buttonValue = (document.getElementById('openModal') as HTMLButtonElement).value 
                    const setLocalStorage = localStorage.setItem("ValButton", buttonValue)
                })
 
                
            })
    }

    recRecepie()
        
        

   
   

        return (
            <div className=" w-screen h-screen bg-background flex flex-col items-center gap-y-5">
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

                <ul>
                    <li  className='flex flex-col items-center justify-center'>
                        
                        <Link to='/receita' id='blockRecepie' className='flex flex-col items-center w-full h-full gap-y-5 '></Link>
                        
                    </li>
                </ul>

            </div>

            
            
        )
    
}



