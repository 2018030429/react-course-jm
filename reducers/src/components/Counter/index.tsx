import React, { useReducer } from 'react'

type StateReducer = { count:number };
type ActionReducer = { type: 'increase' | 'decrease' };

const initialState = { count: 0 };

function reducer(state:StateReducer, action:ActionReducer) {
  switch (action.type) {
    case 'increase':
      return {
        count: state.count + 1
      };
    case 'decrease':
      return {
        count: state.count - 1
      }
    default:
      return state;
  }
}

const Counter = () => {
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const handleClickAdd = () => dispatch({ type: 'increase' });
  const handleClickSub = () => dispatch({ type: 'decrease' });

  return (
    <div style={{textAlign:"center"}}>
      <h2>Counter Reducer</h2>
      <nav>
        <button onClick={handleClickAdd}>+</button>
        <button onClick={handleClickSub}>-</button>
      </nav>
      <h3>{ state.count }</h3>
    </div>
  )
}

export default Counter;
