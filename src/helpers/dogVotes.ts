type VotesResponse = {
  image_id: string;
};

const dogVotes = (id: string, votes: VotesResponse[]) =>
  votes.filter((vote) => vote.image_id === id).length;

export default dogVotes;
