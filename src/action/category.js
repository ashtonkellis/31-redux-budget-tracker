import uuid from 'uuid/v4';

const createCategory = ({ name, budget }) => ({
  type: 'CATEGORY_CREATE',
  payload: {
    _id: uuid(),
    createdOn: new Date(),
    name,
    budget,
  },
});

const updateCategory = category => ({
  type: 'CATEGORY_UPDATE',
  payload: category,
});

const deleteCategory = category => ({
  type: 'CATEGORY_DELETE',
  payload: category,
});

export { createCategory, updateCategory, deleteCategory };
