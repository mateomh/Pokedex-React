import ReduxThunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../../reducers/root';

const middlewares = [ReduxThunk];

// export const findByTestAtrr = (component, attr) => {
//     const wrapper = component.find(`[data-test='${attr}']`);
//     return wrapper;
// };

// export const checkProps = (component, expectedProps) => {
//     const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
//     return propsErr;
// };

export const testStore = initialState => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleware(rootReducer, initialState);
};

export default testStore;
