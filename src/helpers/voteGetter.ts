import { useEffect, useState } from "react";

const voteGetter = () => {
  const [votes, setVotes] = useState([]);
  const apiKey: string = process.env.REACT_APP_API_KEY || "";
  const requestHeaders = new Headers();
  requestHeaders.set("x-api-key", apiKey);

  const fetchVotes = async () => {
    fetch("https://api.thedogapi.com/v1/votes", {
      method: "GET",
      headers: requestHeaders,
    })
      .then((res) => res.json())
      .then((result) => {
        setVotes(result);
      });
  };

  useEffect(() => {
    fetchVotes();
  }, []);

  return votes;
};

export default voteGetter;
