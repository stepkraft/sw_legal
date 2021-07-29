import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import PageContent from '../components/PageContent/PageContent';


function LegalPage() {
  let { subPage = null } = useParams<{subPage?: string}>();

  return (
    <Container fluid className="mt-3">
      {subPage && <PageContent apiPath={subPage} />}
    </Container>
  );
}

export default LegalPage;
