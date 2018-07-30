const emptyState = {};

export default (state = emptyState, { type, payload }) => {
  let categoryId;
  let previousExpenses;
  let updatedExpenses;
  let updatedState;

  switch (type) {
    case 'CATEGORY_CREATE':
      return { ...state, [payload._id]: [] };
    case 'CATEGORY_DELETE':
      updatedState = { ...state };
      delete updatedState[payload._id];
      return updatedState;
    case 'EXPENSE_CREATE':
      categoryId = payload.categoryId; // eslint-disable-line
      previousExpenses = state[categoryId];
      updatedExpenses = [...previousExpenses, payload];
      return { ...state, [categoryId]: updatedExpenses };
    case 'EXPENSE_UPDATE': {
      categoryId = payload.categoryId; // eslint-disable-line
      previousExpenses = state[categoryId];
      updatedExpenses = previousExpenses.map(expense => (expense._id === payload._id ? payload : expense));
      return { ...state, [categoryId]: updatedExpenses };
    }
    case 'EXPENSE_DELETE':
      categoryId = payload.categoryId; // eslint-disable-line
      previousExpenses = state[categoryId];
      updatedExpenses = previousExpenses.filter(expense => expense._id !== payload._id);
      return { ...state, [categoryId]: updatedExpenses };
    default: return state;
  }
};
