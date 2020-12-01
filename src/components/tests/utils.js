import ReduxThunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../../reducers/root';

const middlewares = [ReduxThunk];

export const testStore = initialState => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleware(rootReducer, initialState);
};

export default testStore;
