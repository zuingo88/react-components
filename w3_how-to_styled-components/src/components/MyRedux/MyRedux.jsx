import React from 'react';
import { Login, Button } from './MyRedux.style';
import {
  incrementa,
  decrementa,
  log
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
      <div>
        <Login
          onClick={() => dispatch(log())}

        >
          {logged ? 'Logout' : 'Login'}
        </Login>
      </div>

      <div>
        <h1>Counter: {counter}</h1>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button onClick={() => dispatch(incrementa())}>+</Button>
          <Button onClick={() => dispatch(decrementa())}>-</Button>
        </div>
      </div>
    </div>
  )
}

export default MyRedux
