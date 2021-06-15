import { memo } from "react";

interface Props {
  counter:number,
  addition: () => void,
  substraction: () => void
}

const ChildCounter = ({ counter, addition, substraction }:Props) => {

  console.log('Child Counter is rendered');

  return (
    <div style={{border: 'thin solid #000', margin: '1rem', padding: '1rem'}}>
      <h2>Couter Child</h2>
      <nav>
        <button onClick={addition}>+</button>
        <button onClick={substraction}>-</button>
      </nav>
      <h3>{ counter }</h3>
    </div>
  )
}

export default memo(ChildCounter)
