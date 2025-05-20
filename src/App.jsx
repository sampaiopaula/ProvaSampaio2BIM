import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tarefa from './assets/componentes/Tarefa'

function App() {
  const [ count, setCount] = useState(1)
  const [ texto, setTexto] = useState("")

  const handleClick = () => {
    setCount(count * 2)
   console.log(count)
  }
  const handleTexto = (e) => {
    console.log(e.target.value)
    setTexto(e.target.value)
  
  }

  return (
    <>
    <div className='ali'>
          <div className='selecao'>
            <input type='text'
        placeholder='digite aqui' 
        onChange={handleTexto}/>
        <button className='botao2' onClick={handleClick}>Buscar</button>

          </div>

      <div className='card1'>
        <input type='text'
        placeholder='digite aqui' 
        onChange={handleTexto}/>
        <button className='botao' onClick={handleClick}>clique aqui</button>
        {count}
      </div>
     </div>
        
    </>
  )
}

export default App
