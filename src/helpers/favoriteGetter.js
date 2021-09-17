import { useEffect, useState } from 'react';

const favoriteGetter = (subId) => {
  const [favorites, setFavorites] = useState([]);
  const apiKey = process.env.REACT_APP_API_KEY;

  const fetchVotes = async () => {
    const values = [];
    fetch(`https://api.thedogapi.com/v1/favourites?sub_id=${subId}`,
      {
        method: 'GET',
        headers: new Headers({
          'x-api-key': apiKey,
        }),
      })
      .then((res) => res.json())
      .then(
        (result) => {
          values.push(result);
        },
      );
    setFavorites(values);
  };

  useEffect(() => {
    fetchVotes();
  }, []);

  return favorites;
};

export default favoriteGetter;
