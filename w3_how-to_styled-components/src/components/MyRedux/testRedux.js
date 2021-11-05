const redux = require('redux');
const createStore = redux.createStore;

//  INITIAL STATE Definisco uno state iniziale.
const initialState = {
  counter: 10
};
console.log('INITIAL STATE: ', initialState);

//  ACTIONS
const incrementa = () => {
  return {
    type: 'INCREMENTA',
    value: 10,
  }
};

const aumenta = () => {
  return {
    type: 'AUMENTA',
  }
};

//  REDUCER prende come parametri uno state ed un action.
const reducer = (state = initialState, action) => {
  if (action.type === 'INCREMENTA') {
    return {
      ...state,
      counter: state.counter + action.value
    }
  };

  if (action.type === 'AUMENTA') {
    return {
      ...state,
      counter: state.counter + 5
    }
  };

  return state
};

//  STORE prende come parametro il reducer.
const store = createStore(reducer);
console.log('INITIAL STORE STATE: ', store.getState());

//  DISPATCH ACTION prende come parametro action
// Dispatch innesca il cambio si state, che sarà definito dalla logica del reducer, che a sua volta conterrà i dati di action.
store.dispatch(aumenta());
console.log('FINAL STORE STATE: ', store.getState());

//  SUBSCRPTION prende come paramentro una funzione. Parte solo dopo il dispatch e trasferisce il nuovo state al componente.
store.subscribe(() => {

});