import React, { useContext, useEffect } from 'react';

import { Todo } from '../type/Todo';
import { TodosContext } from '../contexts/TodosContext';

type Props = {
  todo: Todo
}

export const TodoItem: React.FC<Props> = ({ todo }) => {

  const { dispatch, deleteTodo } = useContext(TodosContext);

  useEffect(() => {
    if (todo.completed) {
      dispatch('decrement');
    } else {
      dispatch('increment');
    }
  }, []);

  return (
    <li className={`${todo.completed ? 'completed' : ''}`}>
      <div className="view">
        <input 
          type="checkbox" 
          checked={todo.completed}
          onChange={() => {
            todo.completed = !todo.completed

            if (todo.completed) {
              dispatch('decrement');
            } else {
              dispatch('increment');
            }
          }}
          className="toggle" id={`${todo.id}`}
        />
        <label 
          htmlFor={`${todo.id}`}
          onDoubleClick={(event) => {
            event.currentTarget.parentElement?.parentElement?.classList.add('editing');
          }}
        >
          { todo.title }
        </label>
        <button
          type="button"
          className="destroy"
          data-cy="deleteTodo"
          onClick={() => {
            deleteTodo(todo.id);
          }}
        />
      </div>
      <input 
        type="text" 
        className="edit" 
        value={todo.title} 
        onChange={(event) => {
          todo.title = event.target.value;
        }}
      />
    </li>
  );
}
