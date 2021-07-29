import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

type PageContentProps = {
  apiPath: string;
}

type PageContentType = {
  title: string;
  content: string;
}

const initialPageContent = {
  title: '',
  content: ''
};

const PageContent = ({ apiPath }: PageContentProps) => {
  const [pageContent, setPageContent] = useState<PageContentType>(initialPageContent);

  useEffect(() => {
    fetch(`https://www.sonarworks.com/api/legal/${apiPath}`)
      .then((response) => response.json())
      .then(({ title, content }: PageContentType) => {
        setPageContent({ title, content });
      });
  }, [apiPath]);


  return (
    <Container fluid>
      <article>
        <h1>{pageContent.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: pageContent.content }} />
      </article>
    </Container>
  );
}

export default PageContent;
