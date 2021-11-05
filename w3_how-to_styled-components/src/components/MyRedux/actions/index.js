export const incrementa = () => {
  return {
    type: 'INCREMENTA',
  }
};

export const decrementa = () => {
  return {
    type: 'DECREMENTA',
  }
};

export const reset = () => {
  console.log('RESET PREMUTO!');
  return {
    type: 'RESET'
  }
};

export const login = () => {
  console.log('LOGIN PREMUTO!');
  return {
    type: 'SIGN_IN'
  }
};

export const logout = () => {
  console.log('LOGOUT PREMUTO!');
  return {
    type: 'SIGN_OUT'
  }
};