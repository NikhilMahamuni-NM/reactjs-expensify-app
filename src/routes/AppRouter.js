import React from 'react';
import {BrowserRouter, Routes, Route, Link, NavLink} from 'react-router-dom'

import Header from '../components/Header';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import NotFoundPage from '../components/NotFoundPage';
    
const AppRouter = () => (
    <BrowserRouter>
        <div>  
            <Header /> 
            <Routes>
                <Route path="/" element={<ExpenseDashboardPage />} exact={true}/>
                <Route path="/create" element={<AddExpensePage />} />
                <Route path="/edit/:id" element={<EditExpensePage />} />
                <Route path="*" element={<NotFoundPage />} />             
            </Routes>
        </div>
    </BrowserRouter>
)

export default AppRouter