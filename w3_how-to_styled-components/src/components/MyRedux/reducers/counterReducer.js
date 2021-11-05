const counterReducer = (state = 0, action) => {
  switch (action.type) {

    case 'INCREMENTA':
      return state + 1;

    case 'DECREMENTA':
      return state - 1;

    case 'RESET':
      return state = 0;

    default:
      return state;
  }
};

export default counterReducer;