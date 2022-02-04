import users from "../assets/json/users.json";

const loginCheck = (username: string, password: string) => {
  let result = false;

  users.forEach((user: { name: string; password: string }) => {
    if (user.name === username && user.password === password) {
      result = true;
    }
  });

  return result;
};

export default loginCheck;
