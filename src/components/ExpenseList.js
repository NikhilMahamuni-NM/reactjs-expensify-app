import React from 'react';
import { connect } from 'react-redux';

import getVisibleExpenses from '../selectors/expenses';

import ExpenseListItem from './ExpenseListItem';

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense} />
            // return <ExpenseListItem key={expense.id} description={expense.description} amount={expense.amount} createdAt={expense.createdAt} />
        }) }
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList)
