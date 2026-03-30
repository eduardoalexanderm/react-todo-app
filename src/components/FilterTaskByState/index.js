import React from 'react';
import { TodoContext } from '../context/TodoContext';
import './FilterTaskByState.css';
function FilterTaskByState() {
    const { setFilterState } = React.useContext(TodoContext);

    const handleFilterChange = (event) => {
        setFilterState(event.target.value);
    };

    return (
        <div className="filters">
            <button className="filter-btn all" value={'all'} onClick={handleFilterChange}>Todas</button>
            <button className="filter-btn completed" value={'completed'} onClick={handleFilterChange}>Completadas</button>
            <button className="filter-btn pending" value={'pending'} onClick={handleFilterChange}>Pendientes</button>
        </div>
    );
}

export { FilterTaskByState };