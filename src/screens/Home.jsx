import React, { useContext } from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Route } from 'wouter';

import Context from '../context/LoggedUser';
import DogCard from '../components/Card/DogCard';
import DogFetch from '../components/Fetch/DogFetch';
import favoriteGetter from '../helpers/favoriteGetter';
import Login from './Login';
import voteGetter from '../helpers/voteGetter';

const Home = () => {
  const { dogs, loading } = DogFetch(8);
  const votes = voteGetter();
  const { user } = useContext(Context);
  const favorites = user.length > 0 && favoriteGetter(user);

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
        {user.length > 0
        && (
        <Row className="mt-2">
          {!loading && <h1>Favorites of {user}</h1>}
          {favorites.length > 0 && favorites[0].map((favorite) => (
            <Card key={favorite.id} style={{ width: '18rem', paddingLeft: 0, paddingRight: 0 }}>
              <Card.Header className="text-center">
                <a href={favorite.image.url} target="_blank" rel="noreferrer">
                  <img src={favorite.image.url} height="200" width="200" alt="favorite dog" />
                </a>
              </Card.Header>
            </Card>
          ))}
        </Row>
        )}
      </Container>

    </>
  );
};

export default Home;
