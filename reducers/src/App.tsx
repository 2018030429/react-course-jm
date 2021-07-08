import React from 'react';
import Counter from './components/Counter';
import CounterImproved from './components/CounterImproved';

function App() {
  return (
    <div>
      <h1>useReducer</h1>
      <hr />
      <CounterImproved />
      <hr />
      <Counter />
    </div>
  );
}

export default App;
