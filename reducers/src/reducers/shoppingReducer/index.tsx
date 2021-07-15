import { Product } from "../../components/types";

type ActionReducer = {
  type: 'ADD_TO_CART' | 'REMOVE_ONE_FROM_CART' | 'REMOVE_ALL_FROM_CART' | 'CLEAR_CART',
  payload: number
}

type StateReducer = {
  products: Array<Product>,
  cart: Array<Product>
}

export const ShoppingInitialState:StateReducer = {
  products: [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 300 },
    { id: 4, name: "Product 4", price: 400 },
    { id: 5, name: "Product 5", price: 500 },
    { id: 6, name: "Product 6", price: 600 }
  ],
  cart: []
};

export function shoppingReducer(state:StateReducer, action:ActionReducer) {
  switch (action.type) {
    case 'ADD_TO_CART': {
      let newItem = state.products.find(product => product.id === action.payload);
      return {
        ...state,
        cart: [...state.cart, newItem!]
      };
    }
    case 'REMOVE_ONE_FROM_CART': {
      return state;
    }
    case 'REMOVE_ALL_FROM_CART': {
      return state;
    }
    case 'CLEAR_CART': {
      return state;
    }
    default:
      return state;
  }
}
