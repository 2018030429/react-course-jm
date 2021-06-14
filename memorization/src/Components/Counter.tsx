import { useState } from "react"
import ChildCounter from "./ChildCounter";

const Counter = () => {

  const [counter, setCounter] = useState(0);

  const addition = () => setCounter(counter + 1);
  const substraction = () => setCounter(counter - 1);

  return (
    <div style={{textAlign: 'center'}}>
      <h2>Counter</h2>
      <nav>
        <button onClick={addition}>+</button>
        <button onClick={substraction}>-</button>
      </nav>
      <h3>{ counter }</h3>
      <ChildCounter />      
    </div>
  )
}

export default Counter
