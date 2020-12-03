const defaultState = 'All';

const filterReducer = (state = defaultState, action) => {
  const { type, payload: filter } = action;

  switch (type) {
    case 'CHANGE_FILTER':
      return filter;
    default:
      return state;
  }
};

export default filterReducer;
