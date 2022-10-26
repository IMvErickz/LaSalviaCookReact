import Menu from './style/menu'

function App() {
    return (
        <div className="w-screen h-screen bg-background flex flex-col items-center">
            <header className='flex flex-col items-center'>
                <Menu className='w-40'/>
                <h1 className="font-cursive text-6xl text-tittle">Receitas</h1>
            </header> <br />
            <div>
                <button className='bg-tittle p-2 rounded-lg hover:bg-[#fde68a] font-bold w-full'>Adicione sua receita</button>
            </div>

        </div>
    )
}

export default App