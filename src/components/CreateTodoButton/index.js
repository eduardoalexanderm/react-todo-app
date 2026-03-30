import React from 'react';
import './CreateTodoButton.css';
import { TodoContext } from '../context/TodoContext';

function CreateTodoButton(){
  const { setOpenModal } = React.useContext(TodoContext);

  const handleClick = () => {
    setOpenModal(true)
    console.log('Crear TODO');
    if (window.innerWidth < 600) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return(
    <button className="create-todo-button" aria-label="Crear TODO" onClick={handleClick}>
      +
    </button>
  );
}


export {CreateTodoButton};