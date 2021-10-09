import { combineReducers } from 'redux';
import { ingredientsReducer } from './ingredientsReducer';
import { constructorReducer } from './constructorReducer';
import { bunReducer } from './bunReducer';
import { modalReducer } from './modalReducer';
import { orderReducer } from './orderReducer';
import { resetPasswordReducer } from './resetPasswordReducer';

export const rootReducer = combineReducers({
  ingredientsReducer,
  constructorReducer,
  bunReducer,
  modalReducer,
  orderReducer,
  resetPasswordReducer
});
