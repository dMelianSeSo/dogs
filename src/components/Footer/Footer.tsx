import React from "react";
import { Container, Navbar } from "react-bootstrap";

import "./css/footer.scss";

const Footer = () => (
  <Navbar bg="dark" className="footer" expand="lg" variant="dark">
    <Container>
      <small style={{ color: "white" }}>
        Created by Daniel Pérez using{" "}
        <strong>
          <a href="https://thedogapi.com/">The Dog API</a>
        </strong>
      </small>
    </Container>
  </Navbar>
);

export default Footer;
