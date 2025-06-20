import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tarefa from './assets/componentes/Tarefa'

import Hedder from './assets/componentes/Hedder'
import TaskForm from './assets/componentes/TaskForm/TaskForm'


function App() {
  const [tasks, setTasks] = useState([]);
  
  const [subjectFilter, setSubjectFilter] = useState('');
const [dayFilter, setDayFilter] = useState('');

 useEffect(() => {
  if (!tasks || tasks.length === 0) return;
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);
useEffect(() => {
  const stored = localStorage.getItem("tasks");
  if (stored) {
    setTasks(JSON.parse(stored));
  }
}, []);


  function addTasks(taskData) {
  setTasks((prev) => [...prev, { ...taskData, done: false }]);
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
  function renameTasks(index, newName) {
  setTasks((prev) => {
    const newTasks = [...prev];
    newTasks[index] = { ...newTasks[index], name: newName };
    return newTasks;
  });
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
const filteredTasks = tasks.filter(task => {
  const subjectMatches = subjectFilter === '' || task.subject === subjectFilter;
  const dayMatches = dayFilter === '' || task.days.includes(dayFilter);
  return subjectMatches && dayMatches;
});

  return (
    <div >
    <Hedder/> 
     
       <span>{numberComplete} / {numberTotal} Completas</span>
        <p>{getMessage()}</p>
      

         
        <TaskForm onAdd={addTasks}/>
        <div className="filtro-container">
  <label>Filtrar por matéria:</label>
  <select value={subjectFilter} onChange={(e) => setSubjectFilter(e.target.value)}>
    <option value="">Todas</option>
    <option value="Matemática">Matemática</option>
    <option value="História">História</option>
    <option value="Geografia">Geografia</option>
  </select>

  <label>Filtrar por dia:</label>
  <select value={dayFilter} onChange={(e) => setDayFilter(e.target.value)}>
    <option value="">Todos</option>
    <option value="Segunda">Segunda</option>
    <option value="Terça">Terça</option>
    <option value="Quarta">Quarta</option>
    <option value="Quinta">Quinta</option>
    <option value="Sexta">Sexta</option>
  </select>
</div>
        
       {filteredTasks.map((task, index) => (
  <Tarefa 
  key={index}
  name={task.name}
  description={task.description}
  subject={task.subject}
  days={task.days}
  done={task.done}
  onToggle={() => updateTaskDone(index, !task.done)}
  onRemove={() => removeTask(index)}
  onRename={(newName) => renameTasks(index, newName)}

  />
))}

      </div>
    
       
  
  );
}

export default App
