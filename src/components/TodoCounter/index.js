import React, { useState, useEffect } from "react";
import "./TodoCounter.css";
import { TodoContext } from "../context/TodoContext";

function TodoCounter() {
  const { completedTodos: completed, totalTodos: total } = React.useContext(TodoContext);

  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timeout = setTimeout(() => setIsAnimating(false), 500); // Incrementar duración a 500ms
    return () => clearTimeout(timeout);
  }, [completed, total]);

  return (
    <>
      {total > 0 && (
        <h2 className={`todo-counter ${isAnimating ? "animate" : ""}`}>
          Has completado {completed} de {total} TODOs
        </h2>
      )}
    </>
  );
}

export { TodoCounter };
