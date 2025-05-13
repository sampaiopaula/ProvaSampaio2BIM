import React from 'react'
import './Tarefa.css'

function Tarefa() {
  return (
    <>
       <div className='card'>
        <div className='data'>{data}</div>
        <h3 className='tex'>{materia}</h3>
      </div>
    </>
  )
}
export default Tarefa