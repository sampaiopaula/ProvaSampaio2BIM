import React from 'react'
import './Tarefa.css'

function Tarefa({data,materia,mat,descriçao}) {

  return (
    <>
    
        <div className='card de'>
          <div className='cont'>
        <div className='mat'>{mat}</div>
        <div className='data'>{data}</div>
        <h3 className='tex'>{materia}</h3>
        </div>
        <div >
        <h6 className='descri'>{descriçao}</h6></div>
      </div>
      
    </>
  )
}
export default Tarefa