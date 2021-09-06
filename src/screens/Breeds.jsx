import React, { useEffect, useState } from 'react';

const Breeds = ({ params }) => {
  const [breedGroupList, setBreedGroupList] = useState({});

  const apiKey = process.env.REACT_APP_API_KEY;
  const { breedGroup } = params;
  const breedFetch = async () => fetch(`https://api.thedogapi.com/v1/breeds/search?q=${breedGroup}`,
    {
      headers: new Headers({
        'x-api-key': apiKey,
      }),
    })
    .then((res) => res.json())
    .then(
      (result) => { setBreedGroupList(result); },
    );

  useEffect(() => {
    breedFetch();
  }, []);

  return (
    <div>
      <h2>
        {breedGroup} breed group
      </h2>
      <ul>
        {breedGroupList.length > 0 && breedGroupList.map((dog) => (
          <li key={dog}>
            {dog.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breeds;
