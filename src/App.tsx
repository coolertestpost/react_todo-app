/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useReducer } from 'react';

import { TodoApp } from './components/TodoApp';
import { TodosContext } from './contexts/TodosContext';
import { Todo } from './type/Todo';
import { Filters } from './components/TodosFilter';

export const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<Filters>(Filters.all);

  const updateTodos = (title: string) => {
    setTodos([
      ...todos,
      {
        id: +new Date(),
        title: title,
        completed: false,
      }
    ]);
  }

  const selectFilter = (filter: Filters) => {
    setFilter(filter);
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
    dispatch('decrement');
  }

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  }

  const reducer = (count: number, action: string) => {
    switch (action) {
      case 'increment':
        return count + 1;

      case 'decrement':
        return count - 1;

      case 'zero':
        return 0;

      case 'every':
        return todos.length;

      default:
        return count;
    }
  }

  const [notCompletedCount, dispatch] = useReducer(reducer, 0);


  return (
    <TodosContext.Provider value={{ 
      todos, 
      updateTodos, 
      notCompletedCount, 
      dispatch, 
      filter,
      selectFilter,
      deleteTodo,
      clearCompleted, 
    }}
    >
      <TodoApp />
    </TodosContext.Provider>
  );
};
