import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, Route } from 'wouter';

import './css/dogCard.scss';
import DogInfo from '../DogInfo';
import voteSubmitter from '../../helpers/voteSubmitter';
import dogVotes from '../../helpers/dogVotes';

const DogCard = ({ dog, votes }) => {
  const { breeds } = dog || {};
  const { id, url } = dog || '';
  const name = breeds[0] ? breeds[0].name : '';
  const currentDogVotes = dogVotes(id, votes);

  return (
    <Card className="mb-4" style={{ width: '18rem', paddingLeft: 0, paddingRight: 0 }}>
      <Card.Header className="text-center">
        <a href={url} target="_blank" rel="noreferrer">
          <img src={url} height="200" width="200" alt={`dog id ${id}`} />
        </a>
      </Card.Header>
      <Card.Body>
        <p className="text-center">
          <strong>{name}</strong>
        </p>
        <div className="wrapper">
          <FontAwesomeIcon className="icon-left" icon={faThumbsUp} onClick={() => voteSubmitter(id, 1)} />
          <span className="vote-count">
            {currentDogVotes}
          </span>
          <FontAwesomeIcon className="icon-right" icon={faThumbsDown} onClick={() => voteSubmitter(id, 0)} />
        </div>
        <br />
        <Link to={`/dog/${id}`} className="button-link">
          <Button style={{ justifyContent: 'center', display: 'flex' }}>
            More info
          </Button>
        </Link>

        <Route
          component={() => <DogInfo dog={dog} />}
          path={`/dog/${id}`}
        />
      </Card.Body>
    </Card>
  );
};

export default DogCard;
