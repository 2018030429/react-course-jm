import { useReducer } from "react";
import { ShoppingInitialState, shoppingReducer } from "../../reducers/shoppingReducer";
import CartItem from "../CartItem";
import ProductItem from "../ProductItem";
import './style.css';

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, ShoppingInitialState);
  const { products, cart } = state;

  const addToCart = (id:number) => {
    dispatch({ type: 'ADD_TO_CART', payload: id });
  };

  const deleteFromCart = (id:number) => {};

  const clearCart = () => {};

  return (
    <div>
      <h2>Shopping Cart</h2>
      <h3>Products</h3>
      <article className="box grid-responsive">
        { 
          products.map(product => 
            <ProductItem 
              product={product} 
              addToCart={addToCart} 
              key={product.id} 
            />
          ) 
        }
      </article>
      <h3>Cart</h3>
      <article className="box">
        <button onClick={clearCart}>Clear cart</button>
        {
          cart.map((product, i) => 
            <CartItem 
              product={product} 
              deleteFromCart={deleteFromCart} 
              key={i} 
            />
          )
        }
      </article>
    </div>
  )
}

export default ShoppingCart;
