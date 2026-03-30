import React from "react";

function TodosLoading({searchText, setSearchText}){

  return(
    <input placeholder="Buscar TODOs" value={searchText} onChange={(event)=>{
      setSearchText(event.target.value);
    }}/>
  );
}

export {TodosLoading};