import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

import LoggedUser from "../context/LoggedUser.tsx";
import loginCheck from "../helpers/loginCheck.ts";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setIsLogged, setUser } = useContext(LoggedUser);

  const handleSubmit = (event) => {
    event.preventDefault();
    const login = loginCheck(username, password);

    setIsLogged(login);
    setUser(login ? username : "");
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            onChange={handleUsernameChange}
            placeholder="Enter username"
            type="username"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={handlePasswordChange}
            placeholder="Enter password"
            type="password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
