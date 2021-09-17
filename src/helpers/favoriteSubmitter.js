const favoriteSubmitter = async (imageId, subId) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  await fetch('https://api.thedogapi.com/v1/favourites', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
    }),
    body: JSON.stringify({
      image_id: imageId,
      sub_id: subId,
    }),
  });
};

export default favoriteSubmitter;
