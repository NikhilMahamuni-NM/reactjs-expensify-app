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
            <ExpenseForm
                expense={expense}
                onSubmit={(expense) => {
                    dispatch(editExpense(params.id, expense))
                    navigate('/');
                    console.log("Submitted", expense)
                }}
            />
            <button onClick={() => {
                dispatch(removeExpense({ id: expense.id }))
                navigate('/');
            }}>Remove</button>
        </div>
    )
}

export default EditExpensePage;