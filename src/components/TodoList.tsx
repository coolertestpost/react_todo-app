/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { useAppSelector } from '../app/hooks';
import { TodoItem } from './TodoItem';

export const TodoList: React.FC = () => {
  const todos = useAppSelector(state => state.todos);

  return (
    <ul className="todo-list" data-cy="todoList">

      {todos.map((todo) => (
        <TodoItem key={todo.id} {...{ todo }} />
      ))}

      {/* <li>
        <div className="view">
          <input type="checkbox" className="toggle" id="toggle-view" />
          <label htmlFor="toggle-view">asdfghj</label>
          <button type="button" className="destroy" data-cy="deleteTodo" />
        </div>
        <input type="text" className="edit" />
      </li>

      <li className="completed">
        <div className="view">
          <input type="checkbox" className="toggle" id="toggle-completed" />
          <label htmlFor="toggle-completed">qwertyuio</label>
          <button type="button" className="destroy" data-cy="deleteTodo" />
        </div>
        <input type="text" className="edit" />
      </li>

      <li className="editing">
        <div className="view">
          <input type="checkbox" className="toggle" id="toggle-editing" />
          <label htmlFor="toggle-editing">zxcvbnm</label>
          <button type="button" className="destroy" data-cy="deleteTodo" />
        </div>
        <input type="text" className="edit" />
      </li>

      <li>
        <div className="view">
          <input type="checkbox" className="toggle" id="toggle-view2" />
          <label htmlFor="toggle-view2">1234567890</label>
          <button type="button" className="destroy" data-cy="deleteTodo" />
        </div>
        <input type="text" className="edit" />
      </li> */}
    </ul>
  );
};