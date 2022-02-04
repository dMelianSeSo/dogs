import { useEffect, useState } from "react";

const favoriteGetter = (subId: string) => {
  const [favorites, setFavorites] = useState([]);
  const apiKey: string = process.env.REACT_APP_API_KEY || "";
  const url = `https://api.thedogapi.com/v1/favourites?sub_id=${subId}`;
  const requestHeaders = new Headers();
  requestHeaders.set("x-api-key", apiKey);

  const fetchVotes = async () => {
    fetch(url, {
      method: "GET",
      headers: requestHeaders,
    })
      .then((res) => res.json())
      .then((result) => {
        setFavorites(result);
      });
  };

  useEffect(() => {
    fetchVotes();
  }, []);

  return favorites;
};

export default favoriteGetter;
