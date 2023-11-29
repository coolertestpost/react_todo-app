import { createRoot } from 'react-dom/client';

import './styles/index.css';
import './styles/todo-list.css';
import './styles/filters.css';

import { Provider } from 'react-redux';
import { App } from './App';
import { store } from './app/store';

const container = document.getElementById('root') as HTMLDivElement;

createRoot(container).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
