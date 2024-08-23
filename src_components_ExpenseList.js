import React from 'react';
import './ExpenseList.css';

function ExpenseList(props) {
  return (
    <ul className="expense-list">
      {props.items.map((expense) => (
        <li key={expense.id}>
          {expense.title}: ${expense.amount}
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;
