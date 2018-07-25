import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryForm from '../category-form/category-form';
import * as categoryActions from '../../action/category';
import './category-item.scss';

const mapDispatchToProps = (dispatch) => {
  return {
    categoryDelete: data => dispatch(categoryActions.deleteCategory(data)), 
    categoryUpdate: data => dispatch(categoryActions.updateCategory(data)),
  };
};

class Category extends React.Component {
  render() {
    const {
      category, 
      key,
      categoryDelete,
      categoryUpdate,
    } = this.props;
    return (
      <li className="category-item" key={key}>
        <h2> { category.name } </h2>
        <CategoryForm category={category} onComplete={categoryUpdate}/>
        <button onClick={() => categoryDelete(category)}> Delete </button>
      </li>
    );
  }
}

Category.propTypes = {
  category: PropTypes.object,
  key: PropTypes.number,
  categoryDelete: PropTypes.func,
  categoryUpdate: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Category);
