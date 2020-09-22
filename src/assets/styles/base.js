import { createGlobalStyle } from 'styled-components';
import { Paragraph } from './typography';
import { SecondaryBlack } from './colors';

const base = createGlobalStyle`
html, body, #root, .page {
  height: 100%;
}

body {
  font-family: 'Red Hat Display';
  ${Paragraph}
  color: ${SecondaryBlack};
}
`;

export default base;
