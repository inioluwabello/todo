import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';
import { setItems } from './features/todo/todoSlice';
import { setTheme } from './features/pageConfig/pageConfigSlice';

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

const persistedState = getTodosFromLocalStorage()
if(persistedState){
  store.dispatch(setItems(persistedState.todo.todos))
  store.dispatch(setTheme(persistedState.page.theme))
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
