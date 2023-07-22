import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer
  },
});

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})