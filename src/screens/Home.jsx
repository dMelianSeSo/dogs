import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Route } from 'wouter';

import DogCard from '../components/Card/DogCard';
import DogFetch from '../components/Fetch/DogFetch';
import Login from './Login';
import voteGetter from '../helpers/voteGetter';

const Home = () => {
  const { dogs, loading } = DogFetch(8);
  const votes = voteGetter();

  return (
    <>
      <Route
        component={Login}
        path={'/login'}
      />
      <Container>
        {loading
        && (
        <div className="text-center">
          <h2>Loading...</h2>
          <FontAwesomeIcon
            className="fa-spin"
            icon={faCog}
            size="4x"
          />
        </div>
        )}
        <Row>
          {dogs.length > 0 && dogs.map((dog) => <DogCard dog={dog} key={dog.id} votes={votes} />)}
        </Row>
      </Container>

    </>
  );
};

export default Home;
