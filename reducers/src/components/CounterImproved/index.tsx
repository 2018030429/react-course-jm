import React, { useReducer } from 'react'
import { counterReducer, counterInitialState, counterInit } from '../../reducers/counterReducer';

const CounterImproved = () => {
  const [state, dispatch] = useReducer(counterReducer, counterInitialState, counterInit);
  
  const handleClickAdd = () => dispatch({ type: 'increase' });
  const handleClickAdd5 = () => dispatch({ type: 'increase_5', payload: 5 });
  const handleClickSub = () => dispatch({ type: 'decrease' });
  const handleClickSub5 = () => dispatch({ type: 'decrease_5', payload: 5 });
  const handleClickReset = () => dispatch({ type: 'reset' });

  return (
    <div style={{textAlign:"center"}}>
      <h2>Counter Reducer Improved</h2>
      <nav>
        <button onClick={handleClickAdd5}>+5</button>
        <button onClick={handleClickAdd}>+</button>
        <button onClick={handleClickReset}>0</button>
        <button onClick={handleClickSub}>-</button>
        <button onClick={handleClickSub5}>-5</button>
      </nav>
      <h3>{ state.count }</h3>
    </div>
  )
}

export default CounterImproved;
