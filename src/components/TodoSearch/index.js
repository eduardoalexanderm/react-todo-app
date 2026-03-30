import React from "react";
import { TodoContext } from "../context/TodoContext";

function TodoSearch(){
 const { searchText, setSearchText } = React.useContext(TodoContext);
  return(
    <input placeholder="Buscar TODOs" value={searchText} onChange={(event)=>{
      setSearchText(event.target.value);
    }}/>
  );
}

export {TodoSearch};