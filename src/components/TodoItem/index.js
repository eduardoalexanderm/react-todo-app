import './TodoItem.css';
import { BsCheckLg } from "react-icons/bs";

function TodoItem({ text, completed, onDelete, onComplete }){
  return(
    <li className="todo-item">
        <span className={completed ? 'todo-text completed-task' : 'todo-text'}>{text}</span>
        <p className={completed ? 'status completed' : 'status'}>{completed ? 'Completado' : 'Pendiente'}</p>
        {/* hacer tooltip tambien */}
        { !completed ? <span className={completed ? 'todo-complete completed' : 'todo-complete'} onClick={onComplete}> <div title="Marcar como completada"> <BsCheckLg size={34} color='green' /> </div></span> : null }
        <span className="todo-delete" onClick={onDelete}>X</span>
    </li>
  );
}

export {TodoItem};