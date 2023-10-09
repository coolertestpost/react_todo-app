import React, { useContext } from 'react';

import { Todo } from '../type/Todo';
import { TodoItem } from './TodoItem';
import { TodosContext } from '../contexts/TodosContext';
import { Filters } from './TodosFilter';

type Props = {
  todos: Todo[];
}

export const TodoList: React.FC<Props> = ({ todos }) => {
  const { filter } = useContext(TodosContext);

  return (
    <ul className="todo-list" data-cy="todoList">
      {filter === Filters.all ? 
        todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        )) : filter === Filters.active ? 
        [...todos.filter(todo => 
          !todo.completed
        )].map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        )) : filter === Filters.completed ? 
        [...todos.filter(todo => 
          todo.completed
        )].map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        )) : ''
      }
    </ul>
  );
}
