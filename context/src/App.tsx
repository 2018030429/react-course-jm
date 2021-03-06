import CrudApi from 'Components/CrudApi';
import PageContext from 'Components/PageContext';
import React, { Fragment } from 'react';
import Page from './Components/Page';
function App() {
  return (
    <Fragment>
      <h1>React Context API</h1> 
      <a href="https://es.reactjs.org/docs/context.html" 
        target="_blank" 
        rel="noreferrer">
          Documentation
      </a> 
      <hr/>
      <CrudApi />
      <hr/>
      <PageContext />
      <hr/>
      <Page />
    </Fragment>
  );
}

export default App;
