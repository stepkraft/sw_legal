import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { Link, useRouteMatch } from 'react-router-dom';

const LINKS = [
  { id: 0, label: 'Privacy Policy', apiPath: 'privacy' },
  { id: 1, label: 'Partnership Policy', apiPath: 'partnership-policy' },
  { id: 2, label: 'Terms and Conditions', apiPath: 'terms-and-conditions' },
  { id: 3, label: 'Cookies policy', apiPath: 'cookies-policy' },
  { id: 4, label: 'Support Service', apiPath: 'support-service' },
  { id: 5, label: 'Sonarworks True-Fi privacy statement', apiPath: 'eula' },
];

function Legal() {
  let { url } = useRouteMatch();

  return (
    <Container fluid className="mt-3">
      <ListGroup>
        {LINKS.map(({ id, label, apiPath }) => (
          <ListGroup.Item key={id}>
            <Link to={`${url}/${apiPath}`}>{label} →</Link>
          </ListGroup.Item>)
        )}
      </ListGroup>
    </Container>
  );
}

export default Legal;
