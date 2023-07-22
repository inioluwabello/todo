import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [{
    id: "1",
    item: "Complete online Javascript course",
    isCompleted: true,
    isActive: false
  }],
  status: 'idle',
};

export const counterSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setItems: (state, action) => {
        if (action.payload.todo.todos)
            state.todos = action.payload.todo.todos;
    }
  }
});

export const { setItems } = counterSlice.actions;

export const selectTodos = (state) => state.todo.todos;

export default counterSlice.reducer;
