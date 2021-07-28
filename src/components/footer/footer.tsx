import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './styles.module.scss';

function Footer() {
  return (
    <Container fluid className={styles.footer}>
      <p>© 2020 Sonarworks Inc. All rights reserved.</p>
    </Container>
  );
}

export default Footer;
