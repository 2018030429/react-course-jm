import { memo } from "react";

const ChildCounter = () => {

  console.log('Child Counter is rendered');

  return (
    <div style={{border: 'thin solid #000', margin: '1rem', padding: '1rem'}}>
      <h2>Couter Child</h2>
    </div>
  )
}

export default memo(ChildCounter)
