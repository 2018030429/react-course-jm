import { useHistory, useLocation } from "react-router-dom"

const Products = () => {
  let { search } = useLocation();
  let query = new URLSearchParams(search);
  // * ?begin=1&end=20
  const LIMIT = 20;
  let start = parseInt(query.get('begin')) || 1;
  let end = parseInt(query.get('end')) || LIMIT;

  let history = useHistory();
    
  const handlePrev = (e) => {
    history.push({ search: `?begin=${ start - LIMIT }&end=${ end - LIMIT }` });
  };

  const handleNext = (e) => {
    history.push({ search: `?begin=${ start + LIMIT }&end=${ end + LIMIT }` });
  };

  return (
    <div>
      <h3> Products </h3>
      <p> Showing Products from <b>{start}</b> to <b>{end}</b> </p>
      { start > LIMIT && <button onClick={handlePrev}>Prev</button> }
      <button onClick={handleNext}>Next</button>
    </div>
  )
}

export default Products
