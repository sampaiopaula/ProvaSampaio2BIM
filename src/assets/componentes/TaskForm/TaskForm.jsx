import { useState } from "react";
import { MdAdd } from "react-icons/md";
import "./TaskForm.css";

// Lista de matérias e dias
const materias = ["Matemática", "Português", "História", "Física", "Geografia"];
const diasSemana = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];

export default function TaskForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [subject, setSubject] = useState(materias[0]);
  const [days, setDays] = useState([]);

  function toggleDay(day) {
    setDays(prev => 
      prev.includes(day)
        ? prev.filter(d => d !== day)
        : [...prev, day]
    );
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    if (!title.trim()) return;

    const newTask = {
      name: title,
      description,
      subject,
      days,
      done: false
    };

    onAdd(newTask);
    setTitle("");
    setDescription("");
    setSubject(materias[0]);
    setDays([]);
  }

  return (
    <form className="conteiner-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título da tarefa"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Descrição da tarefa"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <select value={subject} onChange={(e) => setSubject(e.target.value)}>
        {materias.map((m) => (
          <option key={m} value={m}>{m}</option>
        ))}
      </select>

      <div className="dias-semana">
        {diasSemana.map((dia) => (
          <label key={dia}>
            <input
              type="checkbox"
              checked={days.includes(dia)}
              onChange={() => toggleDay(dia)}
            />
            {dia}
          </label>
        ))}
      </div>

      <button className="form-button" type="submit">
        <MdAdd size={25} />
        Adicionar
      </button>
    </form>
  );
}