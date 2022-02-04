const favoriteSubmitter = async (imageId: string, subId: string) => {
  const apiKey: string = process.env.REACT_APP_API_KEY || "";
  const url = "https://api.thedogapi.com/v1/favourites";
  const requestHeaders = new Headers();
  requestHeaders.set("Content-Type", "application/json");
  requestHeaders.set("x-api-key", apiKey);

  await fetch(url, {
    method: "POST",
    headers: requestHeaders,
    body: JSON.stringify({
      image_id: imageId,
      sub_id: subId,
    }),
  });
};

export default favoriteSubmitter;
