import "./TarefaList.css";

export default function Tarefa({ name, description, subject, days, done, onToggle, onRemove, onRename }) {
  return (
    <div className={`task-card ${done ? "done" : ""}`}>
      <h3 className="Font">{name}</h3>
      <p><strong>Descrição:</strong> {description}</p>
      <p><strong>Matéria:</strong> {subject}</p>
      <p><strong>Dias:</strong> {days.join(", ")}</p>
      <p><strong>Data:</strong> {new Date().toLocaleDateString()}</p>

      <div className="botoes">
        <button onClick={onToggle}>{done ? "Desfazer" : "Concluir"}</button>
        <button onClick={onRemove}>Remover</button>
        <button onClick={() => {
          const novoNome = prompt("Digite o novo nome da tarefa:", name);
          if (novoNome) {
            onRename(novoNome);
          }
        }}>Renomear</button>
      </div>
    </div>
  );
}