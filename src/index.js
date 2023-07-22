import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';
import { setItems } from './features/todo/todoSlice';

const getTodosFromLocalStorage = () => {
  try { 
    const persistedState = localStorage.getItem('reduxState') 
    if (persistedState) {
      return JSON.parse(persistedState)
    }
  }
  catch (e){ 
    console.log(e)
  }
}

const todos = getTodosFromLocalStorage()
if(todos){
  store.dispatch(setItems(todos))
}

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
