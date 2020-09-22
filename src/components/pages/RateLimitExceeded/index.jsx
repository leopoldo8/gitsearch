import React, { useState, useEffect } from 'react';

import { Container, Text } from './style';

const RateLimitExceeded = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <Container loaded={loaded}>
      <Text>O limite de requisições para a API do GitHub foi excedido =(</Text>
      <br/>
      <Text>Tente novamente mais tarde.</Text>
    </Container>
  );
};

export default RateLimitExceeded;
