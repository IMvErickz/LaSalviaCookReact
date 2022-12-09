import { Link } from "react-router-dom";
import { Header } from "../Header/Header";


export function BodyRecepie() {
    return (
        <div className="w-screen h-screen flex flex-col items-start justify-start bg-background">
            <div className="flex flex-col items-start justify-start">
            <Link to='/receitas'><button className="bg-tittle p-3 rounded font-bold text-2xl">Voltar</button></Link>
            </div>

            <div className="flex flex-col items-center justify-center w-full h-full">
                <Header />
                <h1 className="text-white text-6xl font-apple">Título da Receita</h1>
            </div>

            <div className="flex flex-col items-center justify-center w-full h-full bg-[#1f2937]">
                <p className="text-white text-2xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad magnam, unde tempore, labore modi sit assumenda illum</p>
            </div>
            
        </div>
    )
}