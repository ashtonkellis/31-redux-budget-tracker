import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CategoryForm from '../category-form/category-form';
import * as categoryActions from '../../action/category';
import './category.scss';
import Expense from '../expense/expense';
import ExpenseForm from '../expense-form/expense-form';
import * as expenseActions from '../../action/expense';

const mapStateToProps = state => ({
  expenses: state.expenses,
});

const mapDispatchToProps = (dispatch) => {
  return {
    categoryDelete: data => dispatch(categoryActions.deleteCategory(data)), 
    categoryUpdate: data => dispatch(categoryActions.updateCategory(data)),
    expenseCreate: data => dispatch(expenseActions.createExpense(data)),
  };
};

class Category extends React.Component {
  render() {
    const {
      category, 
      key,
      expenses,
      categoryDelete,
      categoryUpdate,
      expenseCreate,
    } = this.props;

    return (
      <li className="category" key={key}>
        <h2> { category.name } </h2>
        <CategoryForm category={category} onComplete={categoryUpdate}/>
        <button onClick={() => categoryDelete(category)}> Delete </button>
        <ExpenseForm 
          category={ category }
          onComplete={ expenseCreate }
        />
        <h3>Expenses</h3>
        <ul>
        { 
          expenses[category._id].map((expense => <Expense 
            key = { expense._id }
            expense={ expense }
            category={ category }
          />))
        }
        </ul>
      </li>
    );
  }
}

Category.propTypes = {
  category: PropTypes.object,
  key: PropTypes.number,
  categoryDelete: PropTypes.func,
  categoryUpdate: PropTypes.func,
  expenseCreate: PropTypes.func,
  expenses: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
