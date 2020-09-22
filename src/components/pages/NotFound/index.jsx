import React, { useState, useEffect } from 'react';

import { Container, Text } from './style';

const NotFound = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <Container loaded={loaded}>
      <Text>Página não encontrada.</Text>
      <Text>404</Text>
    </Container>
  );
};

export default NotFound;
