/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../types/todo';
import { EditTodoProps } from '../types/editTodoProps';

const initialState: Todo[] = [];

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (todos, action: PayloadAction<Todo>) => {
      todos.push(action.payload);
    },
    deleteTodo: (todos, action: PayloadAction<number>) => {
      todos = todos.filter(todo => todo.id !== action.payload - 1);
    },
    clearTodos: todos => {
      todos.length = 0;
    },
    editTodo: (todos, action: PayloadAction<EditTodoProps>) => {
      const { toEdit, id } = action.payload;

      switch (toEdit) {
        case 'completed':
          todos[id - 1].completed = !todos[id - 1].completed;
          break;

        case 'editing':
          todos[id - 1].editing = !todos[id - 1].editing;
          break;

        default:
          break;
      }
    },
  },
});

export default todosSlice.reducer;

export const {
  addTodo,
  deleteTodo,
  clearTodos,
  editTodo,
} = todosSlice.actions;
