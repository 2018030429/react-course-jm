import React, { useState, useCallback } from "react"
import ChildCounter from "./ChildCounter";

const Counter = () => {

  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState("");

  // const addition = () => setCounter(counter + 1);
  // const substraction = () => setCounter(counter - 1);

  const addition = useCallback(() => setCounter(counter + 1), [counter]);
  const substraction = useCallback(() => setCounter(counter - 1), [counter]);

  const handleInput = (e:React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value);

  return (
    <div style={{textAlign: 'center'}}>
      <h2>Counter</h2>
      <nav>
        <button onClick={addition}>+</button>
        <button onClick={substraction}>-</button>
      </nav>
      <h3>{ counter }</h3>
      <input type="text" onChange={handleInput} value={input} />
      <ChildCounter counter={counter} 
        addition={addition} substraction={substraction} />
    </div>
  )
}

export default Counter
