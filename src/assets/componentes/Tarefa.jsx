import React, { useState } from 'react'
import { MdDelete } from 'react-icons/md';
import './Tarefa.css'
import CheckBox from './CheckBox'


export default function Task({name, done, onToggle, onRemove, onRename}) {
  const [editMode, setEditMode] = useState(false);

  return (
    
    <div className={`task ${done ? "done" : ""}`}>
     <div className='container-task'>

    <CheckBox checked={done} onClick={() => onToggle(!done)}/>
      {!editMode && (
        <div className='task-name' onClick={() => setEditMode((prev) => !prev)}>
           <span>{name}</span>
        </div>
      ) }

       {editMode && (
        <form className='task-form'
        onSubmit={(ev) => {
          ev.preventDefault();
          setEditMode(false)
        }}
        > 
        <input    
        type='text'
        value={name}
        onChange={(ev) => onRename(ev.target.value)}
        />
        </form>
      ) }
      </div>
      <button className='trash' onClick={onRemove}>
        <MdDelete size={30} color='#388888' />
      </button>
    </div>




  )
}
