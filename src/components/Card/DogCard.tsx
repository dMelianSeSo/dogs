import React, { useContext, useState } from "react";
import { Button, Card } from "react-bootstrap";
import {
  faStar,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./css/dogCard.scss";
import Context from "../../context/LoggedUser";
import DogInfo from "../DogInfo";
import dogVotes from "../../helpers/dogVotes";
import favoriteSubmitter from "../../helpers/favoriteSubmitter";
import voteSubmitter from "../../helpers/voteSubmitter";

type Dog = {
  breeds: [
    {
      name: string;
    }
  ];
  height: number;
  id: string;
  url: string;
  width: number;
};

const DogCard = ({ dog, votes }: { dog: Dog; votes: any }) => {
  const { breeds } = dog || [];
  const { id, url } = dog || "";
  const { isLogged, user } = useContext(Context);
  const name = breeds[0] ? breeds[0].name : "";

  const [currentDogVotes, setCurrentDogVotes] = useState(dogVotes(id, votes));
  const [showDogInfo, setShowDogInfo] = useState(false);

  return (
    <Card
      className="mt-4"
      style={{ width: "18rem", paddingLeft: 0, paddingRight: 0 }}
    >
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
          <strong className="vote-count">{currentDogVotes}</strong>
          <FontAwesomeIcon
            className="icon-right"
            icon={faThumbsDown}
            onClick={() => {
              setCurrentDogVotes(currentDogVotes - 1);
              voteSubmitter(id, 0);
            }}
            size="lg"
          />
          {isLogged && (
            <FontAwesomeIcon
              className="star"
              icon={faStar}
              onClick={() => {
                favoriteSubmitter(id, user);
              }}
              size="lg"
            />
          )}
        </div>
        <br />
        <Button
          onClick={() => setShowDogInfo(!showDogInfo)}
          style={{ display: "flex", margin: "0 auto" }}
        >
          More info
        </Button>
        {showDogInfo && <DogInfo dog={dog} />}
      </Card.Body>
    </Card>
  );
};

export default DogCard;
