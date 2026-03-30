import React from "react";
import { useLocalStorage } from "../../../App/useLocalStorage";
const defaulTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar el curso de intro a React", completed: true },
  { text: "Llorar con la llorona", completed: false },
  { text: "Llorar con la llorona2", completed: false },
  { text: "Llorar con la llorona3", completed: false },
];
function TodoProvider({children}) {
  // Estado para manejar la lista de TODOs y el texto de búsqueda
  const {
    item: todos,
    saveItemsToLocalStorage: saveTodosToLocalStorage,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", defaulTodos);
  const [searchText, setSearchText] = React.useState("");
  const [filterState, setFilterState] = React.useState("all");

  const [openModal, setOpenModal] = React.useState(false);

  // Calcular el número de TODOs completados y el total de TODOs
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  // Filtrar por estado (all, completed, pending) sin mutar `todos`
  const filteredByState = todos.filter((todo) => {
    if (filterState === "all") return true;
    if (filterState === "completed") return !!todo.completed;
    if (filterState === "pending") return !todo.completed;
    return true;
  });

  // Filtrar los TODOs según el texto de búsqueda sobre el conjunto ya filtrado por estado
  const filterBySearch = filteredByState.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchTextLower = searchText.toLowerCase();
    return todoText.includes(searchTextLower);
  });
  // Eliminar un TODO de la lista
  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => todo.text !== text);
    saveTodosToLocalStorage(newTodos);
  };

  // Completar un TODO de la lista
  const completeTodo = (text) => {
    const newTodos = todos.map((todo) => {
      if (todo.text === text) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    saveTodosToLocalStorage(newTodos);
  };

  // Mostrar mensaje cuando todos los TODOS han sido completados:
  const completeAllTodos = completedTodos === totalTodos && totalTodos > 0;

  // Agregar un nuevo TODO a la lista
  const addNewTodo = (text) => {
    const newTodos = [...todos, { text, completed: false }];
    saveTodosToLocalStorage(newTodos);
  }

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        setFilterState,
        completedTodos,
        totalTodos,
        completeAllTodos,
        searchText,
        setSearchText,
        filterBySearch,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        addNewTodo
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
const TodoContext = React.createContext();

export { TodoContext, TodoProvider };
