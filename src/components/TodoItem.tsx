/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import classNames from 'classnames';
import { Todo } from '../types/todo';
import { deleteTodo, editTodo } from '../features/todos';
import { useAppDispatch } from '../app/hooks';

type Props = {
  todo: Todo;
};

export const TodoItem: React.FC<Props> = ({ todo }) => {
  const dispatch = useAppDispatch();

  const todoCompleted = todo.completed;

  return (
    <li
      className={classNames({
        completed: todoCompleted,
        editing: todo.editing,
      })}
    >
      <div className="view">
        <input
          type="checkbox"
          className="toggle"
          id="toggle-view"
          onChange={() => {
            dispatch(editTodo({ id: todo.id, toEdit: 'completed' }));
          }}
          checked={todoCompleted}
        />
        <label
          onDoubleClick={() => {
            dispatch(editTodo({ id: todo.id, toEdit: 'editing' }));
          }}
        >
          {todo.body}
        </label>
        <button
          type="button"
          className="destroy"
          data-cy="deleteTodo"
          onClick={() => {
            dispatch(deleteTodo(todo.id));
          }}
        />
      </div>
      {todo.editing && <input type="text" className="edit" />}
    </li>
  );
};
