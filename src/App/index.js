// import logo from './platzi.webp';

import { TodoProvider } from "../components/context/TodoContext";
import { AppUI } from "./AppUI";

function App() {
  
  return (
    <TodoProvider>
    <AppUI
      // loading={loading}
      // error={error}
      // setFilterState={setFilterState}
      // completedTodos={completedTodos}
      // totalTodos={totalTodos}
      // completeAllTodos={completeAllTodos}
      // searchText={searchText}
      // setSearchText={setSearchText}
      // filterBySearch={filterBySearch}
      // completeTodo={completeTodo}
      // deleteTodo={deleteTodo}
    ></AppUI>
    </TodoProvider>
  );
}

export default App;

//Lesson 2:
// React.Fragment es un componente que no renderiza nada en el DOM, pero nos permite agrupar otros componentes sin necesidad de usar un div extra. Es útil para evitar agregar elementos innecesarios al DOM y mantener una estructura más limpia. En este caso, se utiliza para envolver todos los componentes de la aplicación sin agregar un contenedor adicional.
/**
 defaulTodos: es un array de objetos que representa una lista de tareas (TODOs). Cada objeto tiene dos propiedades: text, que es una cadena de texto que describe la tarea, y completed, que es un booleano que indica si la tarea ha sido completada o no. Este array se utiliza para renderizar la lista de TODOs en el componente TodoList, pasando cada objeto como props al componente TodoItem.
 key: es una prop especial en React que se utiliza para identificar de manera única cada elemento en una lista. En este caso, se está utilizando el texto de la tarea (todo.text) como clave para cada elemento de la lista. Esto ayuda a React a optimizar el proceso de renderizado y actualización de la lista, ya que puede identificar qué elementos han cambiado, agregado o eliminado de manera eficiente. Es importante que las claves sean únicas para evitar problemas de rendimiento y errores en la interfaz de usuario.  
 propiedades (props): son un mecanismo en React que permite pasar datos de un componente padre a un componente hijo. En este caso, se están pasando las propiedades text y completed desde el componente TodoList al componente TodoItem. Estas propiedades contienen la información necesaria para que el componente TodoItem pueda renderizar correctamente cada tarea, mostrando su texto y su estado de completado. Las props son inmutables, lo que significa que el componente hijo no puede modificarlas directamente, sino que debe recibirlas como argumentos y utilizarlas para renderizar su contenido.
 */

//  Lesson 3:
// En React, los componentes pueden ser de clase o funcionales. Los componentes funcionales son funciones
//  de JavaScript que devuelven elementos de React.
//  Son más simples y fáciles de entender que los
// componentes de clase, y se han vuelto cada vez
// más populares con la introducción de los Hooks
// en React 16.8. Los componentes funcionales no tienen
// estado ni métodos de ciclo de vida, pero pueden usar
// Hooks para manejar el estado y otros aspectos del ciclo de vida.
//  En este caso, TodoSearch es un componente funcional que devuelve un elemento de entrada (input) con un placeholder para buscar TODOs./
