import { createGlobalStyle } from 'styled-components';
import { Paragraph } from './typography';
import { Black } from './colors';

const base = createGlobalStyle`
html, body, #root, .page {
  height: 100%;
}

body {
  font-family: 'Red Hat Display';
  ${Paragraph}
  color: ${Black};
}
`;

export default base;
