import React from 'react';
import Counter from './components/Counter';
import CounterImproved from './components/CounterImproved';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <div>
      <h1>useReducer</h1>
      <hr />
      <ShoppingCart />
      <hr />
      <CounterImproved />
      <hr />
      <Counter />
    </div>
  );
}

export default App;
