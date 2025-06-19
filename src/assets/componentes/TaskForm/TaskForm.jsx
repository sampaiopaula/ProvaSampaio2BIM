import { MdAdd } from "react-icons/md";
export default function TaskForm({ onAdd }) {
  return (
    <form className="conteiner-form">
        <button>
        <MdAdd size={25} />
        </button>
    </form>
  );
}