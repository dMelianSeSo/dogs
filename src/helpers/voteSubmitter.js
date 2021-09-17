const voteSubmitter = async (imageId, voteValue) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  await fetch('https://api.thedogapi.com/v1/votes', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
    }),
    body: JSON.stringify({
      image_id: imageId,
      value: voteValue,
    }),
  });
};

export default voteSubmitter;
