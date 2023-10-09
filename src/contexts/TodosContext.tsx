import React from 'react';

import { Todo } from '../type/Todo';
import { Filters } from '../components/TodosFilter';

type Props = {
  todos: Todo[],
  updateTodos: (title: string) => void,
  notCompletedCount: number,
  dispatch: (action: string) => void,
  filter: Filters,
  selectFilter: (filter: Filters) => void,
  deleteTodo: (id: number) => void,
  clearCompleted: () => void,
}

export const TodosContext = React.createContext<Props>({
  todos: [],
  updateTodos() {},
  notCompletedCount: 0,
  dispatch() {},
  filter: Filters.all,
  selectFilter() {},
  deleteTodo() {},
  clearCompleted() {},
});