import React from 'react';
import {
  StateBar,
  LoginBtn,
  LogoutBtn,
  LoginState,
  Button,
  ResetBtn
} from './MyRedux.style';
import {
  incrementa,
  decrementa,
  reset,
  login,
  logout
} from './actions';

//  REDUX
import {
  useSelector,
  useDispatch
} from 'react-redux';

const MyRedux = () => {
  const counter = useSelector(state => state.counterReducer); //useSelector mi da accesso allo state, che in questo caso è composto dai miei 2 reducer counterReducer (state = 0) e isLoggedEReducer (state =  false)
  // console.log(counter);
  const logged = useSelector(state => state.isLoggedReducer);

  const dispatch = useDispatch();

  return (
    <div
      id='pageContainer'
      style={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <StateBar>
        {
          logged
            ? <LogoutBtn onClick={() => dispatch(logout())}>Logout</LogoutBtn>
            : <LoginBtn onClick={() => dispatch(login())}>Login</LoginBtn>
        }


        <LoginState
          style={
            !logged
              ? { backgroundColor: 'crimson' }
              : { backgroundColor: '#30B8AE' }
          }
        >
          {
            logged
              ? 'Sei Loggato'
              : 'Non sei Loggato'
          }
        </LoginState>
      </StateBar>

      {/* {
        logged ? */}
          <div style={{ width: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1>Counter: {counter}</h1>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button onClick={() => dispatch(decrementa())}>-</Button>
              <Button onClick={() => dispatch(incrementa())}>+</Button>
            </div>

            <ResetBtn onClick={() => dispatch(reset())}>Reset Counter</ResetBtn>
          </div>
          {/* :
          <p>Effettua il login!</p>
      } */}
    </div>
  )
}

export default MyRedux
