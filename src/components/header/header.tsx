import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import styles from './styles.module.scss';

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/">Sonarworks</Navbar.Brand>
        <Nav className={styles.separated}>
          <Nav.Link href="/legal">Legal centre</Nav.Link>
        </Nav>
        <Navbar.Brand href="/">
          <img
            alt=""
            src="/soundid-icon.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
    </Container>
  </Navbar>
  );
}

export default Header;