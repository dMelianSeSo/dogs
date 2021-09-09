import React from 'react';
import { Route, Switch } from 'wouter';

import './App.css';
import Breeds from './screens/Breeds';
import { LoggedUserProvider } from './context/LoggedUser';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './screens/Home';
import Login from './screens/Login';

function App() {
  return (
    <>
      <LoggedUserProvider>
        <div className="App">
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
            crossOrigin="anonymous"
          />
          <Header />
          <Switch>
            <Route
              component={Home}
              path={'/'}
            />
            <Route
              component={Breeds}
              path={'/breed/:breedGroup'}
            />
            <Route
              component={Login}
              path={'/login'}
            />
          </Switch>
        </div>
        <Footer />
      </LoggedUserProvider>
    </>
  );
}

export default App;
