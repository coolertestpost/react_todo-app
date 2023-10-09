import React, { useContext, useState } from 'react';

import { TodoList } from './TodoList';
import { TodosContext } from '../contexts/TodosContext';
import { TodosFilter } from './TodosFilter';

export const TodoApp: React.FC = () => {
  const [title, setTitle] = useState('');

  const {
    todos, 
    updateTodos, 
    notCompletedCount, 
    dispatch, 
    clearCompleted 
  } = useContext(TodosContext);

  return (
    <div className="todoapp">
      <header className="header">
        <h1>todos</h1>

        <form onSubmit={(event: React.FormEvent) => {
          event.preventDefault();
          updateTodos(title);
          setTitle('');
        }}>
          <input
            type="text"
            data-cy="createTodo"
            className="new-todo"
            placeholder="What needs to be done?"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </form>
      </header>

      <section className="main">
        <input
          type="checkbox"
          id="toggle-all"
          className="toggle-all"
          data-cy="toggleAll"
          checked={ todos.every(todo => todo.completed) && todos.length !== 0 }
          onChange={() => {
            if (todos.every(todo => todo.completed)) {
              todos.forEach(todo => todo.completed = false)
              dispatch('every');
            } else {
              todos.forEach(todo => todo.completed = true)
              dispatch('zero');
            }
          }}
        />
        <label htmlFor="toggle-all">Mark all as complete</label>

        <TodoList todos={todos} />
      </section>

      <footer className="footer">
        <span className="todo-count" data-cy="todosCounter">
          {notCompletedCount} items left
        </span>

        <TodosFilter />

        <button 
          type="button" 
          className={`clear-completed ${!todos.length ? 'hidden' : ''}`}
          onClick={() => {
            clearCompleted();
          }}
        >
          Clear completed
        </button>
      </footer>
    </div>
  );
}
