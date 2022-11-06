import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

import AppRouter from './routes/AppRouter';

//redux - react connect
import { Provider } from 'react-redux'

import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import { setTextFilter } from './actions/filters';

//components

// css
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const store = configureStore()

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)



const container = document.getElementById('app');
const root = createRoot(container); 
root.render(jsx);
