import React from 'react'
import './Cima.css'

function Cima({handleTexto,handleClick}) {

  return (
    <>
         <div className='ali'>
        <div className='selecao'>
        <input type='text' placeholder='digite aqui' onChange={handleTexto}/>
        <button className='botao2' onClick={handleClick}>Buscar</button>
        </div>
        </div>
    </>
    )
}
export default Cima