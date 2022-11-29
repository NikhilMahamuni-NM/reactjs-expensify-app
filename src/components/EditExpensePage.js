import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import { connect, useSelector, useDispatch } from 'react-redux';

import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../actions/expenses";


const EditExpensePage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const params = useParams()
    const expenses = useSelector((state) => state.expenses)
    const expense = expenses.find(expense => expense.id === params.id)
    console.log(expenses)
    return (
        <div>
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Edit Expense</h1>
                </div>
            </div>
            <div className="content-container">
                <ExpenseForm
                    expense={expense}
                    onSubmit={(expense) => {
                        dispatch(editExpense(params.id, expense))
                        navigate('/');
                        console.log("Submitted", expense)
                    }}
                />
                <button className="button button--secondary" onClick={() => {
                    dispatch(removeExpense({ id: expense.id }))
                    navigate('/');
                }}>Remove</button>
            </div>
        </div>
    )
}

export default EditExpensePage;