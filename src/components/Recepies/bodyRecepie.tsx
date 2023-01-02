import { Link } from "react-router-dom";
import { api } from "../../../lib/axios";
import { Header } from "../Header/Header";


export function BodyRecepie() {

     const getTittleRecepie = localStorage.getItem("ValButton")
    //console.log(getTittleRecepie)

    function setBodyRecepie() {
        api.get('recepies/count')
            .then(function (response) {
            let res = response.data.count
                let div = (document.getElementById('blockRecepie') as HTMLElement)
            
                for (let i = 0; i < res.length; i++) {
                
                    let transformTitle = response.data.count[i].tittle 
                    let transformbody = response.data.count[i].body

        
                    //console.log(JSON.stringify(transformTitle))

                    // const paragraph = document.createElement('p') 
                    // paragraph.innerHTML = transformTitle
                    // const pp = (document.getElementById('p') as HTMLElement)
                    // pp.appendChild(paragraph)
                }
        })
    }

    setBodyRecepie()

    return (
        <div className="w-screen h-screen flex flex-col items-start justify-start bg-background">
            <div className="flex flex-col items-start justify-start">
            <Link to='/receitas'><button className="bg-tittle p-3 rounded font-bold text-2xl">Voltar</button></Link>
            </div>

            <div className="flex flex-col items-center justify-center w-full h-full">
                <Header />
                <h1 className="text-white text-6xl font-apple">{getTittleRecepie }</h1>
            </div>

            <div className="flex flex-col items-center justify-center w-full h-full bg-[#1f2937]">
                <p className="text-white text-2xl" id="p"></p>
            </div>
            
        </div>
    )
}