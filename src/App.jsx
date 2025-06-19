import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tarefa from './assets/componentes/Tarefa'
import Cima from './assets/componentes/Cima'
import Hedder from './assets/componentes/Hedder'
import TaskForm from './assets/componentes/TaskForm/TaskForm'

function App() {
  const {tasks, setTasks} = useState([]);

 useEffect(() => {
  if (!tasks || tasks.length === 0) return;
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);

useEffect(() => {
  if (!tasks || tasks.length === 0) return;
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);

  function addTasks(name){
      setTasks((prev) => {
        return[...prev,{name: name, done: false}]

      })
    }

    function removeTask(indexToRemove){
      setTasks((prev) => {
        return prev.filter((_, index ) => index !== indexToRemove)
      })
    }
    function updateTaskDone(taskIndex, newDone) {
      setTasks((prev) => {
        const newTasks = [...prev]
        newTasks[taskIndex].done =newDone;
        return newTasks
      })
    }
  function renameTasks(index, newName){
    setTasks((prev) => {
      newTasks = [...prev];
      newTasks[index].name = newName;
      return newTasks
    })
  }

  const numberComplete = tasks?.filter((t) => t.done).length || 0;
  const numberTotal = tasks?.length || 0;

function getMessage() {
  const porcentagem = (numberComplete / numberTotal) * 100;

  if (porcentagem === 0) {
    return "Tenha um dia de Vencedor, liste e faça suas tarefas!";
  }

  return "Continue assim!";
}

  return (
    <div>
    <Hedder/> 
       <span>{numberComplete} / {numberTotal} Completas</span>
        <p>{getMessage()}</p>

        <TaskForm onAdd={addTasks}/>
      
      </div>
     
       
  
  );
}

export default App
