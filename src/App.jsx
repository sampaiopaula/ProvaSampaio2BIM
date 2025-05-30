import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tarefa from './assets/componentes/Tarefa'
import Cima from './assets/componentes/Cima'

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
        <Cima handleClick={handleClick} handleTexto={handleTexto} />

      <div className='card1'>
        <input type='text'
        placeholder='digite aqui' 
        onChange={handleTexto}/>
        <button className='botao' onClick={handleClick}>clique aqui</button>
        {count}
      </div>
     
        <Tarefa  data={"23/09/2000"} materia={"Portugues"}mat={"Feito"} descriçao={"faça tatatatatatatatatatata com tatatatatt pararararararara chdhddvewbb por tsfstscvsgsvsg"}/>
    </>
  )
}

export default App
