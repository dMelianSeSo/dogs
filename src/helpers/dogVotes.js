const dogVotes = (id, votes) => {
  let result = 0;

  for (let i = 0; i < votes[0].length; i += 1) {
    if (votes[0][i].image_id === id) {
      result += 1;
    }
  }

  return result;
};

export default dogVotes;
