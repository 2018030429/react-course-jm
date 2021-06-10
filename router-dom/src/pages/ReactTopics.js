import { Link, Route, Switch, useParams, useRouteMatch } from "react-router-dom";

const Topic = () => {
  const { topic } = useParams();
  return (
    <div>
      <h4> { topic } </h4>
      <p> Some example text </p>
    </div>
  )
}


const ReactTopics = () => {
  let { path, url } = useRouteMatch();
  
  return (
    <div>
      <h3> React Topics </h3>
      <ul>
        <li>
          <Link to={`${url}/jsx`} >JSX</Link>
        </li>
        <li>
          <Link to={`${url}/props`} >Props</Link>
        </li>
        <li>
          <Link to={`${url}/hooks`} >Hooks</Link>
        </li>
        <li>
          <Link to={`${url}/components`} >Components</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={path} >
          <h4> Select a topic </h4>
          <p> Some text </p>
        </Route>
        <Route path={`${path}/:topic`} component={Topic} />
      </Switch>
    </div>
  )
}

export default ReactTopics
