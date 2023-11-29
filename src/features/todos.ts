import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../types/todo';

const initialState: Todo[] = [];

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (todos, action: PayloadAction<Todo>) => {
      todos.push(action.payload);
    },
    deleteTodo: (todos, action: PayloadAction<number>) => {
      todos.splice(action.payload, 1);
    },
    clearTodos: todos => {
      todos.splice(0, todos.length);
    },
  },
});

export default todosSlice.reducer;
export const { addTodo, deleteTodo, clearTodos } = todosSlice.actions;
