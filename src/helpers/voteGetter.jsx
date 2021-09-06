import { useEffect, useState } from 'react';

const voteGetter = () => {
  const [votes, setVotes] = useState([]);
  const apiKey = process.env.REACT_APP_API_KEY;

  const fetchVotes = async () => {
    const values = [];
    fetch('https://api.thedogapi.com/v1/votes',
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
    setVotes(values);
  };

  useEffect(() => {
    fetchVotes();
  }, []);

  return votes;
};

export default voteGetter;
