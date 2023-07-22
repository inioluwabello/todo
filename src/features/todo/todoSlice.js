import { createSlice, nanoid } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [
      {
        id: '1',
        item: 'Complete online Javascript course',
        isCompleted: true,
        isActive: false,
      },
      {
        id: '2',
        item: 'Jog around the park 3x',
        isCompleted: false,
        isActive: false,
      },
    ],
    selectedFilter: 'all',
    status: 'idle',
  },
  reducers: {
    setItems: (state, action) => {
      if (action.payload) state.todos = action.payload;
    },
    clearCompleted: (state) => {
      state.todos = state.todos.filter((t) => !t.isCompleted);
    },
    addTodoItem: (state, action) => {
      state.todos.push({
        id: nanoid(),
        item: action.payload,
        isCompleted: false,
        isActive: false,
      });
    },
    setIsCompleted: (state, action) => {
      const todo = state.todos.find((t) => t.id === action.payload.id);

      if (todo) {
        const todoIndex = state.todos.indexOf(todo);
        todo.isCompleted = !todo.isCompleted;
        state.todos[todoIndex] = todo;
      }
    },
    setFilter: (state, action) => {
      state.selectedFilter = action.payload;
    },
    moveTodo: (state, action) => {
      const { dragIndex, hoverIndex } = action.payload;
      const draggedTodo = state.todos[dragIndex];
      state.todos.splice(dragIndex, 1);
      state.todos.splice(hoverIndex, 0, draggedTodo);
    },
    deleteTodoItem: (state, action) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload);
    },
  },
});

export const {
  setItems,
  clearCompleted,
  addTodoItem,
  setIsCompleted,
  setFilter,
  moveTodo, 
  deleteTodoItem,
} = todoSlice.actions;

export const selectTodos = (state) => state.todo.todos;
export const selectFilter = (state) => state.todo.selectedFilter;

export default todoSlice.reducer;
