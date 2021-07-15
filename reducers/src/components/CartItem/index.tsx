import { Product } from "../types";
import "./style.css";

type CartItemProps = {
  product: Product,
  deleteFromCart: (id:number) => void
};

const CartItem = ({ product, deleteFromCart }:CartItemProps) => {

  let { id, name, price } = product;

  return (
    <div className="cardProduct">
      <h4>{name}</h4>
      <h5>${price}.00</h5>
      <button onClick={() => deleteFromCart(id)}>Delete</button>
    </div>
  )
}

export default CartItem;
