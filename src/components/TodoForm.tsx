import React, { useState } from 'react';

import { useAppDispatch, useAppSelector } from '../app/hooks';
import { addTodo } from '../features/todos';

export const TodoForm: React.FC = () => {
  const todos = useAppSelector(state => state.todos);
  const dispatch = useAppDispatch();

  const [todoName, setTodoName] = useState('');

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        dispatch(addTodo({
          body: todoName,
          id: todos.length + 1,
          completed: false,
          editing: false,
        }));

        setTodoName('');
      }}
    >
      <input
        type="text"
        data-cy="createTodo"
        className="new-todo"
        placeholder="What needs to be done?"
        onChange={(event) => {
          setTodoName(event.target.value);
        }}
        value={todoName}
      />
    </form>
  );
};
