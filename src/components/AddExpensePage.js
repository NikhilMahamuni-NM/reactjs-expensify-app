import React from "react";
import { connect } from 'react-redux';

import { useNavigate } from 'react-router-dom'

import ExpenseForm from "./ExpenseForm";

import { addExpense } from "../actions/expenses";

const AddExpensePage = (props) => {
    let navigate = useNavigate()
    return (
        <div>
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Add Expense</h1>
                </div>
            </div>
            <div className="content-container">
                <ExpenseForm onSubmit={(expense) => {
                    props.dispatch(addExpense(expense));
                    navigate('/')
                }}/>
            </div>
        </div>
        
    )
}

export default connect()(AddExpensePage);