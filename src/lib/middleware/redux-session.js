export default store => next => (action) => {
  const result = next(action);

  const reduxStore = store.getState();
  console.log('SESSION MIDDLEWARE');

  Object.keys(reduxStore).forEach((key) => {
    localStorage[key] = localStorage[key] || JSON.stringify(reduxStore[key]);
  });

  return result;
};
