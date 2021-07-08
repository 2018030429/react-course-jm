import React, { useReducer } from 'react'

type StateReducer = { count:number };
type ActionReducer = { type: 'increase' | 'decrease' | 'reset' } | 
  { type: 'increase_5' | 'decrease_5', payload: number };

const initialState = { count: 0 };

function init(): StateReducer {
  return {
    count: initialState.count + 100
  }
}

function reducer(state:StateReducer, action:ActionReducer) {
  switch (action.type) {
    case 'increase':
      return {
        count: state.count + 1
      };
    case 'increase_5':
      return {
        count: state.count + action.payload
      }
    case 'decrease':
      return {
        count: state.count - 1
      }
    case 'decrease_5':
    return {
      count: state.count - action.payload
    }
    case 'reset':
      return {
        count: initialState.count
      }
    default:
      return state;
  }
}

const Counter = () => {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState, init);
  
  const handleClickAdd = () => dispatch({ type: 'increase' });
  const handleClickAdd5 = () => dispatch({ type: 'increase_5', payload: 5 });
  const handleClickSub = () => dispatch({ type: 'decrease' });
  const handleClickSub5 = () => dispatch({ type: 'decrease_5', payload: 5 });
  const handleClickReset = () => dispatch({ type: 'reset' });

  return (
    <div style={{textAlign:"center"}}>
      <h2>Counter Reducer</h2>
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

export default Counter;
