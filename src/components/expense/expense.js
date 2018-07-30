import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as expenseActions from '../../action/expense';
import ExpenseForm from '../expense-form/expense-form';

const mapDispatchToProps = dispatch => ({
  updateExpense: data => dispatch(expenseActions.updateExpense(data)), 
  deleteExpense: data => dispatch(expenseActions.deleteExpense(data)),
});

class Expense extends React.Component {
  render() {
    const {
      expense,
      category,
      updateExpense,
      deleteExpense,
    } = this.props;

    return (
      <li>
        <h3>{ expense.name }</h3>
        <ExpenseForm
          expense={ expense }
          onComplete={ updateExpense }
          category={ category }
        />
        <button onClick={() => {
          const payload = {
            category,
            expense,
          };

          deleteExpense(payload);
        }}/>
      </li>
    );
  }
}

Expense.propTypes = {
  expense: PropTypes.object,
  category: PropTypes.object,
  updateExpense: PropTypes.func,
  deleteExpense: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Expense);
