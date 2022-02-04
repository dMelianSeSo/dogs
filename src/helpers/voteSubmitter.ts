const voteSubmitter = async (imageId: string, voteValue: number) => {
  const apiKey: string = process.env.REACT_APP_API_KEY || "";
  const requestHeader = new Headers();
  requestHeader.set("Content-Type", "application/json");
  requestHeader.set("x-api-key", apiKey);

  await fetch("https://api.thedogapi.com/v1/votes", {
    method: "POST",
    headers: requestHeader,
    body: JSON.stringify({
      image_id: imageId,
      value: voteValue,
    }),
  });
};

export default voteSubmitter;
