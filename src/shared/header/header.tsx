import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import styles from './styles.module.scss';

interface MenuItem {
  label: string;
  path: string;
}

type HeaderProps = {
  menuItems: MenuItem[],
}

function Header({ menuItems }: HeaderProps) {
  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/">Sonarworks</Navbar.Brand>
        <Nav className={styles.separated}>
          {menuItems.map(({ label, path }) => (
            <Nav.Link key={path} href={`/${path}`}>{label}</Nav.Link>
          ))}
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