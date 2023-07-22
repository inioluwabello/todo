import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import todoReducer from '../features/todo/todoSlice';
import pageConfigReducer from '../features/pageConfig/pageConfigSlice';

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    todo: todoReducer,
    page: pageConfigReducer
  },
});

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})