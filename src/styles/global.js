import { createGlobalStyle } from 'styled-components';

import myriad_proWoff from '../fonts/myriad_pro.woff';
import myriad_proWoff2 from '../fonts/myriad_pro.woff2';
import myriadbold from '../fonts/myriadbold.woff';
import myriadbold2 from '../fonts/myriadbold.woff2';
import gotham_medium from '../fonts/gotham_medium.woff';
import gotham_medium2 from '../fonts/gotham_medium.woff2';
import gotham_light from '../fonts/gotham_light.woff';
import gotham_light2 from '../fonts/gotham_light.woff2';

export default createGlobalStyle`
  @font-face {
    font-family: 'Myriad Pro';
    src: local('Myriad Pro'), local('MyriadPro'),
    url(${myriad_proWoff2}) format('woff2'),
    url(${myriad_proWoff}) format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Myriad Bold';
    src: local('Myriad Bold'), local('MyriadBold'),
    url(${myriadbold2}) format('woff2'),
    url(${myriadbold}) format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gotham Medium';
    src: local('Gotham Medium'), local('GothamMedium'),
    url(${gotham_medium2}) format('woff2'),
    url(${gotham_medium}) format('woff');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gotham light';
    src: local('Gotham light'), local('Gothamlight'),
    url(${gotham_light2}) format('woff2'),
    url(${gotham_light}) format('woff');
    font-weight: 100;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #d7dadc;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  body, input, button {
    font-family: 'Myriad Pro';
  }

  button {
    cursor: pointer;
  }
`;
