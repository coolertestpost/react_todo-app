import React, { useContext } from 'react';

import { TodosContext } from '../contexts/TodosContext';

export enum Filters {
  all,
  active,
  completed
}

export const TodosFilter: React.FC = () => {

  const { filter, selectFilter } = useContext(TodosContext);

  return (
    <ul className="filters">
      <li>
        <a 
          href="#/" 
          className={filter === Filters.all ? 'selected' : ''}
          onClick={(event) => {
            if (event.currentTarget.classList.contains('selected')) {
              return;
            }
            selectFilter(Filters.all);
          }}
        >All</a>
      </li>

      <li>
        <a 
          href="#/active"
          className={filter === Filters.active ? 'selected' : ''}
          onClick={(event) => {
            if (event.currentTarget.classList.contains('selected')) {
              return;
            }
            selectFilter(Filters.active);
          }}
        >Active</a>
      </li>

      <li>
        <a 
          href="#/completed"
          className={filter === Filters.completed ? 'selected' : ''}
          onClick={(event) => {
            if (event.currentTarget.classList.contains('selected')) {
              return;
            }
            selectFilter(Filters.completed);
          }}
        >Completed</a>
      </li>
    </ul>
  )
};
