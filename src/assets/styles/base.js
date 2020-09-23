import { createGlobalStyle } from 'styled-components';

import { tablet } from './medias';
import { Paragraph } from './typography';
import { SecondaryBlack, QuinaryGray } from './colors';

const base = createGlobalStyle`
html, body, #root, .page {
  height: 100%;
}

body {
  font-family: 'Red Hat Display';
  ${Paragraph}
  color: ${SecondaryBlack};

  @media ${tablet} {
    background: ${QuinaryGray};
  }
}
`;

export default base;
