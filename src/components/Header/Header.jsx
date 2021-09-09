import React, { useContext } from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'wouter';

import Context from '../../context/LoggedUser';

const Header = () => {
  const { isLogged, user } = useContext(Context);
  const [setLocation] = useLocation();

  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link style={{ color: 'white', textDecoration: 'none' }} to="/">
            <h1>Information about dogs 🐕</h1>
          </Link>
          {isLogged && <span>Welcome {user}!</span>}
        </Navbar.Brand>
      </Container>
      <Link to="/login">
        <Button onClick={() => setLocation('/login')}>
          Login
        </Button>
      </Link>
    </Navbar>
  );
};

export default Header;
