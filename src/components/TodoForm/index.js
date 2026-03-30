import React from "react";
import "./TodoForm.css";
import { TodoContext } from "../context/TodoContext";

function TodoForm() {
  const { setOpenModal, addNewTodo } = React.useContext(TodoContext);
  // Estado local
  const [newTodoValue, setNewTodoValue] = React.useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    const newTodoValue = event.target.elements["todo-text"].value;
    if (newTodoValue.trim() === "") {
      alert("La descripción de la tarea no puede estar vacía.");
      return;
    }
    addNewTodo(newTodoValue);
    setOpenModal(false);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    const newValue = event.target.value;
    setNewTodoValue(newValue);
  }
  return (
    <form className="todo-form" onSubmit={onSubmit}>
      <label htmlFor="todo-text">Nueva Tarea</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        id="todo-text"
        placeholder="Escribe la descripción de la tarea..."
        required
      ></textarea>
      <div className="form-buttons">
        <button type="button" className="buttonFormCancel" onClick={onCancel}>
          Cancelar
        </button>
        <button type="submit" className="buttonForm">
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
