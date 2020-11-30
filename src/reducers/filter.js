const defaultState = 'All';

const filterReducer = (state = defaultState, action) => {
  // eslint-disable-next-line no-unused-vars
  const { type, payload: filter } = action;

  switch (type) {
    case 'CHANGE_FILTER':
      return filter;
    default:
      return state;
  }
};

export default filterReducer;
