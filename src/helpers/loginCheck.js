import users from '../assets/json/users.json';

const loginCheck = (username, password) => {
  let result = false;

  users.users.forEach((user) => {
    if (user.name === username && user.password === password) {
      result = true;
    }
  });

  return result;
};

export default loginCheck;
