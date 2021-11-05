import counterReducer from "./counterReducer";
import isLoggedReducer from "./isLoggedReducer";

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  counterReducer,     // Equivalente di scrivere counterReducer: counterReducer.
  isLoggedReducer     // Si usa quando chiave e valore sono uguali.
});

export default rootReducer;

