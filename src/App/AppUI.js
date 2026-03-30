import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodoItem } from "../components/TodoItem";
import { FilterTaskByState } from "../components/FilterTaskByState";
import { TodosLoading } from "../components/TodosLoading";
import { TodosError } from "../components/TodosError";
import { EmptyTodos } from "../components/EmptyTodos";
import { TodoContext } from "../components/context/TodoContext";
import React from "react";
import { Modal } from "../components/Modals/Modal";
import { TodoForm } from "../components/TodoForm";

function AppUI() {
  const {
    loading,
    error,
    filterBySearch,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);

  return (
    // <React.Fragment>
    <>
      <TodoCounter
      // completed={completedTodos}
      // total={totalTodos}
      // completeAllTodos={completeAllTodos}
      />
      <TodoSearch
      // searchText={searchText} setSearchText={setSearchText}
      />
      <FilterTaskByState
        // onFilterByState={(event) => {
        //   const state = event.target.value;
        //   setFilterState(state);
        //   console.log(state);
        // }}
      />
      {/*
      <TodoContext.Consumer>
        {({
          loading,
          error,
          filterBySearch,
          completeTodo,
          deleteTodo,
        }) => (
          <TodoList>
            {loading && (
              <>
                <TodosLoading />
                <TodosLoading />
                <TodosLoading />
              </>
            )}
            {!loading && error && <TodosError />}
            {!loading && !error && filterBySearch.length === 0 && (
              <EmptyTodos />
            )}

            {!loading &&
              !error &&
              filterBySearch.length > 0 &&
              filterBySearch.map((todo) => (
                <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onDelete={() => deleteTodo(todo.text)}
                  onComplete={() => completeTodo(todo.text)}
                />
              ))}
            {!loading && !error && filterBySearch.length === 0 && (
              <p>No hay resultados</p>
            )}
          </TodoList>
        )}
      </TodoContext.Consumer>
      */}
      <TodoList>
        {loading && (
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        )}
        {!loading && error && <TodosError />}
        {!loading && !error && filterBySearch.length === 0 && (
          <EmptyTodos />
        )}

        {!loading &&
          !error &&
          filterBySearch.length > 0 &&
          filterBySearch.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onDelete={() => deleteTodo(todo.text)}
              onComplete={() => completeTodo(todo.text)}
            />
          ))}
        {!loading && !error && filterBySearch.length === 0 && (
          <p>No hay resultados</p>
        )}
      </TodoList>
      <CreateTodoButton setOpenModal={setOpenModal} />
      {openModal && (
        <Modal title="New Todo" onClose={() => setOpenModal(false)}>
          <TodoForm></TodoForm>
        </Modal>
      )}
      {/* </React.Fragment> */}
    </>
  );
}

export { AppUI };
