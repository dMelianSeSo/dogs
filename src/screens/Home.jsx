import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'wouter';

import DogCard from '../components/Card/DogCard';
import DogFetch from '../components/Fetch/DogFetch';
import voteGetter from '../helpers/voteGetter';

const Home = () => {
  const { dogs, loading } = DogFetch(8);
  const votes = voteGetter();

  return (
    <>
      <h1 className="text-center">
        <Link to="/">
          Information about dogs
        </Link>
      </h1>
      <Container>
        {loading && <h2>LOADING...</h2>}
        <Row>
          {dogs.length > 0 && dogs.map((dog) => <DogCard dog={dog} key={dog.id} votes={votes} />)}
        </Row>
      </Container>
    </>
  );
};

export default Home;
