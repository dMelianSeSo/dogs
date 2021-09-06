import React from 'react';
import { Container } from 'react-bootstrap';
import { Route } from 'wouter';

import './App.css';
import Breeds from './screens/Breeds';
import Home from './screens/Home';

function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossOrigin="anonymous"
      />
      <Home />
      <Container>
        <Route
          component={Breeds}
          path={'/breed/:breedGroup'}
        />
      </Container>
    </div>
  );
}

export default App;
