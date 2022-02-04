import { useEffect, useState } from "react";

const DogFetch = (dogNumber = 4) => {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiKey = process.env.REACT_APP_API_KEY;

  const fetchDogs = async () => {
    const resultDogs = [];
    for (let i = 0; i < dogNumber; i += 1) {
      await fetch(`https://api.thedogapi.com/v1/images/search?${apiKey}`)
        .then((res) => res.json())
        .then((result) => {
          resultDogs.push(result[0]);
        });
    }

    setLoading(false);
    setDogs(resultDogs);
  };

  useEffect(() => {
    fetchDogs();
  }, []);

  return { dogs, loading };
};

export default DogFetch;
