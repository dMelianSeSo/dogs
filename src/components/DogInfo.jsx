import React, { } from 'react';
import { Badge } from 'react-bootstrap';
import { Link } from 'wouter';

const DogInfo = ({ dog }) => {
  const breeds = dog ? dog.breeds : {};
  const id = dog ? dog.id : '';
  const lifeSpan = breeds[0] ? breeds[0].life_span : '';
  const bredFor = breeds[0] ? breeds[0].bred_for : '';
  const breedGroup = breeds[0] ? breeds[0].breed_group : '';
  const height = breeds[0] ? breeds[0].height.metric : '';
  const temperament = breeds[0] ? breeds[0].temperament.replace(/,/g, '').split(' ') : '';
  const weight = breeds[0] ? breeds[0].weight.metric : '';

  return (
    <div className="mt-2">
      <ul>
        {height && (
          <li key="height">
            Height: {height} cm
          </li>
        )}
        {weight && (
          <li key="weight">
            Weight: {weight} kg
          </li>
        )}
        {lifeSpan && (
          <li key="life-span">
            Life span: {lifeSpan}
          </li>
        )}
        {breedGroup && (
          <li key="breed-group">
            Breed group:{' '}
            <Link to={`/breed/${breedGroup}`}>
              {breedGroup}
            </Link>
          </li>
        )}
        {temperament && (
          <li key="temperament">
            Temperament:
          </li>
        )}
        {temperament && temperament.map((element) => (
          <div key={element}>
            <Badge bg="secondary">{element}</Badge>{' '}
          </div>
        ))}
        {id && (
          <li key="id">
            <small>ID: {id}</small>
          </li>
        )}
      </ul>
      {bredFor && (
        <>
          <details>
            <summary>
              What is it bred for?
            </summary>
            <div className="mt-2" id="bred-for-text">
              {bredFor}
            </div>
          </details>
        </>
      )}
    </div>
  );
};

export default DogInfo;
