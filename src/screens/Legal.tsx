import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { Link, useRouteMatch } from 'react-router-dom';
import { LINKS } from '../availableRoutes';

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
