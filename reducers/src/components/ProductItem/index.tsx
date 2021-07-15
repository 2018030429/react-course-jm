import { Product } from "../types";
import './style.css';

type ProductProps = {
  product: Product,
  addToCart: (id:number) => void
}

const ProductItem = ({ product, addToCart }:ProductProps) => {
  let { id, name, price } = product;
  return (
    <div className="card">
      <h4>{ name }</h4>
      <h5>${ price }.00</h5>
      <button onClick={() => addToCart(id)}>Add</button>
    </div>
  )
}

export default ProductItem;
