const defaultstate = 1;

const pageReducer = (state = defaultstate, action) => {
  const { type, payload: page } = action;
  switch (type) {
    case 'CHANGE_PAGE':
      return page;
    default:
      return state;
  }
};

export default pageReducer;
