import React from 'react';
import PropTypes from 'prop-types';

const defaultState = {
  name: 'KJHLKH',
  budget: 0,
};

export default class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.category || defaultState;
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onComplete(this.state);
  }

  render() {
    const buttonText = this.props.category ? 'Update' : 'Create';
    return (
      <form
        onSubmit={ this.handleSubmit }
        className="category-form"
      >
        <input 
          type="text"
          name="name"
          placeholder="budget name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input 
          type="number"
          min="0"
          name="budget"
          placeholder="budget amount"
          value={this.state.budget}
          onChange={this.handleChange}
        />
        <button type="submit">{buttonText}</button>
      </form>
    );
  }
}

CategoryForm.propTypes = {
  onComplete: PropTypes.func,
  category: PropTypes.object,
};
