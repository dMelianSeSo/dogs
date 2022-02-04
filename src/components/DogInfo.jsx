import React from "react";
import { Badge } from "react-bootstrap";
import { Link } from "wouter";

const DogInfo = ({ dog = {} }) => {
  const { breeds = [] } = dog;
  const { id = "" } = dog;
  const { bred_for: bredFor = "" } = breeds[0] || "";
  const { breed_group: breedGroup = "" } = breeds[0] || "";
  const height = breeds[0] ? breeds[0].height.metric : "";
  const { life_span: lifeSpan = "" } = breeds[0] || "";
  const temperament = breeds[0]
    ? breeds[0].temperament.replace(/,/g, "").split(" ")
    : "";
  const weight = breeds[0] ? breeds[0].weight.metric : "";

  return (
    <div className="mt-2">
      <ul>
        {height && <li key="height">Height: {height} cm</li>}
        {weight && <li key="weight">Weight: {weight} kg</li>}
        {lifeSpan && <li key="life-span">Life span: {lifeSpan}</li>}
        {breedGroup && (
          <li key="breed-group">
            Breed group: <Link to={`/breed/${breedGroup}`}>{breedGroup}</Link>
          </li>
        )}
        {temperament && <li key="temperament">Temperament:</li>}
        {temperament &&
          temperament.map((element) => (
            <div key={element}>
              <Badge bg="secondary">{element}</Badge>{" "}
            </div>
          ))}
        {id && (
          <li key="id">
            <small>ID: {id}</small>
          </li>
        )}
      </ul>
      {bredFor && (
        <details>
          <summary>What is it bred for?</summary>
          <div className="mt-2" id="bred-for-text">
            {bredFor}
          </div>
        </details>
      )}
    </div>
  );
};

export default DogInfo;
