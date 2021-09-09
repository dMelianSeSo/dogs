import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './css/dogCard.scss';
import DogInfo from '../DogInfo';
import dogVotes from '../../helpers/dogVotes';
import voteSubmitter from '../../helpers/voteSubmitter';

const DogCard = ({ dog, votes }) => {
  const { breeds } = dog || {};
  const { id, url } = dog || '';
  const name = breeds[0] ? breeds[0].name : '';

  const [currentDogVotes, setCurrentDogVotes] = useState(dogVotes(id, votes));
  const [showDogInfo, setShowDogInfo] = useState(false);

  return (
    <Card className="mt-4" style={{ width: '18rem', paddingLeft: 0, paddingRight: 0 }}>
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
          <FontAwesomeIcon
            className="icon-left"
            icon={faThumbsUp}
            onClick={() => {
              setCurrentDogVotes(currentDogVotes + 1);
              voteSubmitter(id, 1);
            }}
            size="lg"
          />
          <strong className="vote-count">
            {currentDogVotes}
          </strong>
          <FontAwesomeIcon
            className="icon-right"
            icon={faThumbsDown}
            onClick={() => {
              setCurrentDogVotes(currentDogVotes - 1);
              voteSubmitter(id, 0);
            }}
            size="lg"
          />
        </div>
        <br />
        <Button onClick={() => setShowDogInfo(!showDogInfo)} style={{ display: 'flex', margin: '0 auto' }}>
          More info
        </Button>
        {showDogInfo
          && <DogInfo dog={dog} />}
      </Card.Body>
    </Card>
  );
};

export default DogCard;
