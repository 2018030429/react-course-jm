import BasicConcepts from "./components/BasicConcepts";
import CrudApi from "./components/CrudApi";
import SongSearch from "./components/SongSearch";

function App() {
  return (
    <div>
      <h1> React Router </h1>
      <a href="https://reactrouter.com/web/guides/quick-start" 
        target="_blank" rel="noreferrer">Documentation</a>
      <hr/>
      <SongSearch />
      <hr/>
      <CrudApi /> 
      <hr/>
      <BasicConcepts/>
    </div>
  );
}

export default App;
