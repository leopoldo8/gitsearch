import { createGlobalStyle } from 'styled-components';

const MontserratRegularttf = '/static/fonts/text/Montserrat-Regular.ttf';
const MontserratMediumttf = '/static/fonts/text/Montserrat-Medium.ttf';
const MontserratSemiboldttf = '/static/fonts/text/Montserrat-SemiBold.ttf';

const fonts = createGlobalStyle`
@font-face {
  font-family: 'Montserrat';
  src: url(${MontserratRegularttf}) format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: fallback;
}

@font-face {
  font-family: 'Montserrat';
  src: url(${MontserratMediumttf}) format('truetype');
  font-weight: 500;
  font-style: normal;
  font-display: fallback;
}

@font-face {
  font-family: 'Montserrat';
  src: url(${MontserratSemiboldttf}) format('truetype');
  font-weight: 600;
  font-style: normal;
  font-display: fallback;
}
`;

export default fonts;
