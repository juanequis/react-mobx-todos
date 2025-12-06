import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';
import { TodoStore } from './stores/TodoStore';
import { TodoStoreProvider } from './stores/TodoContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TodoStoreProvider value={new TodoStore()}>
      <App />
    </TodoStoreProvider>
  </React.StrictMode>
);
