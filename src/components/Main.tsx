/* eslint-disable no-plusplus */
import React from 'react';

import { TodoList } from './TodoList';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { editTodo } from '../features/todos';

export const Main: React.FC = () => {
  const todos = useAppSelector(state => state.todos);
  const dispatch = useAppDispatch();

  let everyTodoCompleted = false;

  if (todos.length) {
    everyTodoCompleted = todos.every(todo => todo.completed);
  }

  return (
    <section className="main">
      <input
        type="checkbox"
        id="toggle-all"
        className="toggle-all"
        data-cy="toggleAll"
        checked={everyTodoCompleted}
        onChange={() => {
          todos.forEach(todo => {
            dispatch(editTodo({ id: todo.id, toEdit: 'completed' }));
          });
        }}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>

      <TodoList />
    </section>
  );
};
