import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [{
      id: "1",
      item: "Complete online Javascript course",
      isCompleted: true,
      isActive: false
    }],
    status: 'idle',
  },
  reducers: {
    setItems: (state, action) => {
        if (action.payload.todo.todos)
            state.todos = action.payload.todo.todos;
    }
  }
});

export const { setItems } = todoSlice.actions;

export const selectTodos = (state) => state.todo.todos;

export default todoSlice.reducer;
