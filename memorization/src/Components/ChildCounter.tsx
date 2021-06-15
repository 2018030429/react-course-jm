import { memo, useMemo } from "react";

interface Props {
  counter:number,
  addition: () => void,
  substraction: () => void
}

const ChildCounter = ({ counter, addition, substraction }:Props) => {

  // let superNum:number = 0;

  // for (let i = 0; i < 1000000000; i++) {
  //   superNum++;
  // }

  const superNum = useMemo(() => {
    let num:number = 0;

    for (let i = 0; i < 1000000000; i++) {
      num++;
    }

    return num;
  }, []);

  console.log('Child Counter is rendered');

  return (
    <div style={{border: 'thin solid #000', margin: '1rem', padding: '1rem'}}>
      <h2>Couter Child</h2>
      <nav>
        <button onClick={addition}>+</button>
        <button onClick={substraction}>-</button>
      </nav>
      <h3>{ counter }</h3>
      <hr/>
      <h3>{ superNum }</h3>
    </div>
  )
}

export default memo(ChildCounter)
