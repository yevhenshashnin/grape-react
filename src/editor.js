import 'grapesjs/dist/css/grapes.min.css';
import grapesjs from 'grapesjs';
import {useEffect, useRef} from 'react';
import parserPostCSS from 'grapesjs-parser-postcss';

const htmlString = `


<style>
@font-face {
  font-family: 'Maven Pro';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/mavenpro/v22/7Au9p_AqnyWWAxW2Wk3GwmQIAFg.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Maven Pro';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/mavenpro/v22/7Au9p_AqnyWWAxW2Wk3Gw2QIAFg.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Maven Pro';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/mavenpro/v22/7Au9p_AqnyWWAxW2Wk3GzWQI.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* vietnamese */
@font-face {
  font-family: 'Maven Pro';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/mavenpro/v22/7Au9p_AqnyWWAxW2Wk3GwmQIAFg.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Maven Pro';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/mavenpro/v22/7Au9p_AqnyWWAxW2Wk3Gw2QIAFg.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Maven Pro';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/mavenpro/v22/7Au9p_AqnyWWAxW2Wk3GzWQI.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* vietnamese */
@font-face {
  font-family: 'Maven Pro';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/mavenpro/v22/7Au9p_AqnyWWAxW2Wk3GwmQIAFg.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Maven Pro';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/mavenpro/v22/7Au9p_AqnyWWAxW2Wk3Gw2QIAFg.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Maven Pro';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/mavenpro/v22/7Au9p_AqnyWWAxW2Wk3GzWQI.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* vietnamese */
@font-face {
  font-family: 'Maven Pro';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/mavenpro/v22/7Au9p_AqnyWWAxW2Wk3GwmQIAFg.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Maven Pro';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/mavenpro/v22/7Au9p_AqnyWWAxW2Wk3Gw2QIAFg.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Maven Pro';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/mavenpro/v22/7Au9p_AqnyWWAxW2Wk3GzWQI.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* vietnamese */
@font-face {
  font-family: 'Maven Pro';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/mavenpro/v22/7Au9p_AqnyWWAxW2Wk3GwmQIAFg.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Maven Pro';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/mavenpro/v22/7Au9p_AqnyWWAxW2Wk3Gw2QIAFg.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Maven Pro';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/mavenpro/v22/7Au9p_AqnyWWAxW2Wk3GzWQI.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* vietnamese */
@font-face {
  font-family: 'Maven Pro';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/mavenpro/v22/7Au9p_AqnyWWAxW2Wk3GwmQIAFg.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Maven Pro';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/mavenpro/v22/7Au9p_AqnyWWAxW2Wk3Gw2QIAFg.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Maven Pro';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/mavenpro/v22/7Au9p_AqnyWWAxW2Wk3GzWQI.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 100;
  src: url(https://fonts.gstatic.com/s/raleway/v22/1Ptug8zYS_SKggPNyCAIT5lu.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 100;
  src: url(https://fonts.gstatic.com/s/raleway/v22/1Ptug8zYS_SKggPNyCkIT5lu.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 100;
  src: url(https://fonts.gstatic.com/s/raleway/v22/1Ptug8zYS_SKggPNyCIIT5lu.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 100;
  src: url(https://fonts.gstatic.com/s/raleway/v22/1Ptug8zYS_SKggPNyCMIT5lu.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 100;
  src: url(https://fonts.gstatic.com/s/raleway/v22/1Ptug8zYS_SKggPNyC0ITw.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 200;
  src: url(https://fonts.gstatic.com/s/raleway/v22/1Ptug8zYS_SKggPNyCAIT5lu.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 200;
  src: url(https://fonts.gstatic.com/s/raleway/v22/1Ptug8zYS_SKggPNyCkIT5lu.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 200;
  src: url(https://fonts.gstatic.com/s/raleway/v22/1Ptug8zYS_SKggPNyCIIT5lu.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 200;
  src: url(https://fonts.gstatic.com/s/raleway/v22/1Ptug8zYS_SKggPNyCMIT5lu.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 200;
  src: url(https://fonts.gstatic.com/s/raleway/v22/1Ptug8zYS_SKggPNyC0ITw.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 300;
  src: url(https://fonts.gstatic.com/s/raleway/v22/1Ptug8zYS_SKggPNyCAIT5lu.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 300;
  src: url(https://fonts.gstatic.com/s/raleway/v22/1Ptug8zYS_SKggPNyCkIT5lu.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 300;
  src: url(https://fonts.gstatic.com/s/raleway/v22/1Ptug8zYS_SKggPNyCIIT5lu.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 300;
  src: url(https://fonts.gstatic.com/s/raleway/v22/1Ptug8zYS_SKggPNyCMIT5lu.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 300;
  src: url(https://fonts.gstatic.com/s/raleway/v22/1Ptug8zYS_SKggPNyC0ITw.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/raleway/v22/1Ptug8zYS_SKggPNyCAIT5lu.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/raleway/v22/1Ptug8zYS_SKggPNyCkIT5lu.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/raleway/v22/1Ptug8zYS_SKggPNyCIIT5lu.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/raleway/v22/1Ptug8zYS_SKggPNyCMIT5lu.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/raleway/v22/1Ptug8zYS_SKggPNyC0ITw.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/raleway/v22/1Ptug8zYS_SKggPNyCAIT5lu.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/raleway/v22/1Ptug8zYS_SKggPNyCkIT5lu.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/raleway/v22/1Ptug8zYS_SKggPNyCIIT5lu.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/raleway/v22/1Ptug8zYS_SKggPNyCMIT5lu.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/raleway/v22/1Ptug8zYS_SKggPNyC0ITw.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/raleway/v22/1Ptug8zYS_SKggPNyCAIT5lu.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/raleway/v22/1Ptug8zYS_SKggPNyCkIT5lu.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/raleway/v22/1Ptug8zYS_SKggPNyCIIT5lu.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/raleway/v22/1Ptug8zYS_SKggPNyCMIT5lu.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/raleway/v22/1Ptug8zYS_SKggPNyC0ITw.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/raleway/v22/1Ptug8zYS_SKggPNyCAIT5lu.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/raleway/v22/1Ptug8zYS_SKggPNyCkIT5lu.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/raleway/v22/1Ptug8zYS_SKggPNyCIIT5lu.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/raleway/v22/1Ptug8zYS_SKggPNyCMIT5lu.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  src: url(https://fonts.gstatic.com/s/raleway/v22/1Ptug8zYS_SKggPNyC0ITw.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/raleway/v22/1Ptug8zYS_SKggPNyCAIT5lu.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/raleway/v22/1Ptug8zYS_SKggPNyCkIT5lu.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/raleway/v22/1Ptug8zYS_SKggPNyCIIT5lu.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/raleway/v22/1Ptug8zYS_SKggPNyCMIT5lu.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 800;
  src: url(https://fonts.gstatic.com/s/raleway/v22/1Ptug8zYS_SKggPNyC0ITw.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/raleway/v22/1Ptug8zYS_SKggPNyCAIT5lu.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/raleway/v22/1Ptug8zYS_SKggPNyCkIT5lu.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* vietnamese */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/raleway/v22/1Ptug8zYS_SKggPNyCIIT5lu.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/raleway/v22/1Ptug8zYS_SKggPNyCMIT5lu.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 900;
  src: url(https://fonts.gstatic.com/s/raleway/v22/1Ptug8zYS_SKggPNyC0ITw.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
#section-2-4 > .ct-section-inner-wrap {
    padding-top: 0;
    padding-bottom: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center
}

#section-2-4 {
    background-image: linear-gradient(135deg,#b2d27d,#07adb7);
    background-color: #07adb7
}

#section-39-4 > .ct-section-inner-wrap {
    display: flex;
    flex-direction: column;
    align-items: center
}

#section-39-4 {
    background-color: #f6fafd;
    text-align: center
}

#section-817-4 > .ct-section-inner-wrap {
    padding-bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: center
}

#section-817-4 {
    text-align: center
}

#section-1110-4 > .ct-section-inner-wrap {
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center
}

#section-1110-4 {
    text-align: center
}

@media (max-width: 991px) {
    #section-39-4 > .ct-section-inner-wrap {
        padding-bottom:20px
    }
}

@media (max-width: 991px) {
    #section-817-4 > .ct-section-inner-wrap {
        padding-top:75px;
        padding-right: 120px;
        padding-left: 120px
    }
}

@media (max-width: 991px) {
    #section-1110-4 > .ct-section-inner-wrap {
        padding-bottom:20px
    }
}

@media (max-width: 767px) {
    #section-2-4 > .ct-section-inner-wrap {
        padding-top:51px
    }
}

@media (max-width: 767px) {
    #section-39-4 > .ct-section-inner-wrap {
        padding-top:60px
    }
}

@media (max-width: 479px) {
    #section-39-4 > .ct-section-inner-wrap {
        padding-top:60px;
        padding-bottom: 30px
    }
}

#div_block-1122-4 {
    background-image: url(https://hosting.oxy.host/wp-content/uploads/sites/26/2017/12/map@2x.png);
    background-size: 640px auto;
    width: 100%;
    height: 100%;
    padding-top: 160px;
    flex-direction: column;
    display: flex;
    text-align: center;
    align-items: center;
    background-repeat: no-repeat;
    padding-left: 20px;
    padding-right: 20px;
    margin-bottom: 0px;
    background-position: 50% 50%
}

#div_block-1314-4 {
    width: 25.00%
}

#div_block-1321-4 {
    border-top-color: #8ec98a
}

#div_block-1315-4 {
    width: 25.00%
}

#div_block-1322-4 {
    border-top-color: #5abc9c
}

#div_block-1316-4 {
    width: 25.00%
}

#div_block-1324-4 {
    border-top-color: #31b1ac
}

#div_block-1317-4 {
    width: 25.00%
}

#div_block-1326-4 {
    border-top-color: #07adb7
}

#div_block-1318-4 {
    width: 100%;
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px
}

#div_block-1328-4 {
    border-top-style: none;
    border-right-style: none;
    border-bottom-style: none;
    border-left-style: none;
    display: flex;
    padding-top: 0px;
    padding-left: 0px;
    padding-bottom: 0px;
    padding-right: 0px
}

#div_block-1339-4 {
    width: 65%;
    padding-top: 30px;
    padding-left: 30px;
    padding-right: 30px
}

#div_block-1340-4 {
    width: 35.00%;
    flex-direction: column;
    display: flex;
    text-align: left;
    align-items: stretch;
    padding-top: 30px;
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 30px
}

#div_block-1140-4 {
    width: 16.66%
}

#div_block-1141-4 {
    width: 16.66%
}

#div_block-1142-4 {
    width: 16.66%
}

#div_block-1152-4 {
    width: 16.66%
}

#div_block-1143-4 {
    width: 16.66%
}

#div_block-1156-4 {
    width: 16.70%
}

#div_block-1237-4 {
    width: 50%
}

#div_block-1268-4 {
    width: 50.00%
}

@media (max-width: 991px) {
    #div_block-1122-4 {
        padding-top:47px
    }
}

@media (max-width: 991px) {
    #div_block-1140-4 {
        width:NaNpx
    }
}

@media (max-width: 991px) {
    #div_block-1141-4 {
        width:NaNpx
    }
}

@media (max-width: 991px) {
    #div_block-1142-4 {
        width:NaNpx
    }
}

@media (max-width: 991px) {
    #div_block-1152-4 {
        width:NaNpx
    }
}

@media (max-width: 991px) {
    #div_block-1143-4 {
        width:NaNpx
    }
}

@media (max-width: 991px) {
    #div_block-1156-4 {
        width:16.65px
    }
}

@media (max-width: 991px) {
    #div_block-1237-4 {
        padding-bottom:0px
    }
}

@media (max-width: 991px) {
    #div_block-1268-4 {
        padding-top:0px
    }
}

@media (max-width: 767px) {
    #div_block-1122-4 {
        background-size:contain;
        padding-top: 0px
    }
}

@media (max-width: 991px) {
    #new_columns-1313-4> .ct-div-block {
        width:50% !important
    }
}

@media (max-width: 767px) {
    #new_columns-1313-4> .ct-div-block {
        width:100% !important
    }

    #new_columns-1313-4 {
        flex-direction: column
    }
}

@media (max-width: 991px) {
    #new_columns-1338-4> .ct-div-block {
        width:100% !important
    }
}

@media (max-width: 991px) {
    #new_columns-1338-4> .ct-div-block {
        width:100% !important
    }
}

@media (max-width: 991px) {
    #new_columns-1138-4> .ct-div-block {
        width:50% !important
    }
}

@media (max-width: 767px) {
    #new_columns-1138-4> .ct-div-block {
        width:100% !important
    }

    #new_columns-1138-4 {
        flex-direction: column
    }
}

@media (max-width: 991px) {
    #new_columns-1236-4> .ct-div-block {
        width:100% !important
    }
}

@media (max-width: 991px) {
    #new_columns-1236-4> .ct-div-block {
        width:100% !important
    }
}

#headline-1119-4 {
    color: #ffffff;
    margin-bottom: 12px;
    margin-left: 20px;
    margin-right: 20px
}

#headline-140-4 {
    margin-bottom: 12px;
    margin-left: 20px;
    margin-right: 20px
}

#headline-1374-4 {
    font-family: 'Maven Pro';
    color: #2a445a;
    font-size: 48px;
    font-weight: 700;
    line-height: 1.1
}

#headline-1376-4 {
    font-family: 'Maven Pro';
    color: #2a445a;
    font-size: 48px;
    font-weight: 700;
    line-height: 1.1
}

#headline-1378-4 {
    font-family: 'Maven Pro';
    color: #2a445a;
    font-size: 48px;
    font-weight: 700;
    line-height: 1.1
}

#headline-1380-4 {
    font-family: 'Maven Pro';
    color: #2a445a;
    font-size: 48px;
    font-weight: 700;
    line-height: 1.1
}

#headline-818-4 {
    margin-bottom: 12px;
    margin-left: 20px;
    margin-right: 20px
}

#headline-829-4 {
    margin-bottom: 48px;
    margin-left: 20px;
    margin-right: 20px
}

#text_block-6-4 {
    font-size: 29px;
    font-weight: 500;
    color: #ffffff;
    font-family: 'Maven Pro';
    line-height: 1.6;
    margin-bottom: 36px;
    margin-left: 20px;
    margin-right: 20px
}

#text_block-11-4 {
    color: rgba(255,255,255,0.6);
    font-family: 'Maven Pro';
    font-size: 16px;
    font-weight: 400;
    line-height: 1.6;
    margin-bottom: 12px
}

#text_block-1405-4 {
    margin-bottom: 0px
}

#text_block-819-4 {
    color: #666666;
    font-family: 'Maven Pro';
    font-size: 16px;
    font-weight: 400;
    line-height: 1.6;
    max-width: 480px;
    margin-bottom: 48px;
    margin-left: 20px;
    margin-right: 20px
}

@media (max-width: 767px) {
    #text_block-6-4 {
        font-size:20px
    }
}

#link_button-1460-18 {
}

#link_button-1460-18 {
    margin-bottom: 120px;
    margin-left: 20px;
    margin-right: 20px;
    url-encoded: true;
    box-shadow: 0px 25px 20px -20px rgba(0,0,0,0.2)
}

#link_button-1330-4 {
}

#link_button-1330-4 {
    margin-top: auto;
    url-encoded: true
}

#link_button-1332-4 {
}

#link_button-1332-4 {
    margin-top: auto;
    url-encoded: true
}

#link_button-1334-4 {
    background-color: #07adb7;
    border: 1px solid #07adb7
}

#link_button-1334-4 {
    margin-top: auto;
    url-encoded: true
}

#link_button-1336-4 {
}

#link_button-1336-4 {
    margin-top: auto;
    url-encoded: true
}

#link_button-1393-4 {
}

#link_button-1393-4 {
    margin-top: auto;
    url-encoded: true
}

#video-1471-18 >.oxygen-vsb-responsive-video-wrapper {
    padding-bottom: 56.25%
}

#modal-1470-18 {
    width: 70%;
    background-color: #ffffff;
    flex-direction: column;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    modal-position: center
}
#section-8-87 > .ct-section-inner-wrap {
    padding-top: 0;
    padding-bottom: 0
}

#section-8-87 {
    background-color: #2a445a
}

@media (max-width: 767px) {
    #section-8-87 > .ct-section-inner-wrap {
        padding-top:4px
    }
}

#div_block-148-87 {
    flex-direction: column;
    display: flex;
    text-align: left;
    justify-content: space-between;
    min-height: 100vh;
    width: 100%
}

#div_block-144-87 {
    width: 100%
}

#div_block-29-87 {
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center
}

#div_block-101-87 {
    width: 33.33%
}

#div_block-102-87 {
    width: 33.33%
}

#div_block-103-87 {
    width: 33.34%
}

#div_block-122-87 {
    width: 33.33%
}

#div_block-123-87 {
    width: 33.34%
}

#div_block-125-87 {
    width: 33.33%
}

#div_block-197-10 {
    width: 100.00%;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: flex-start
}

#div_block-243-10 {
    flex-direction: row;
    display: flex
}

@media (max-width: 767px) {
    #div_block-29-87 {
        flex-direction:column;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center
    }
}

@media (max-width: 767px) {
    #div_block-122-87 {
        flex-direction:column;
        display: flex;
        align-items: center;
        text-align: center
    }
}

@media (max-width: 767px) {
    #div_block-123-87 {
        flex-direction:column;
        display: flex;
        align-items: center;
        text-align: center;
        padding-top: 0px
    }
}

@media (max-width: 767px) {
    #div_block-125-87 {
        flex-direction:column;
        display: flex;
        align-items: center;
        text-align: center;
        padding-bottom: 60px
    }
}

@media (max-width: 767px) {
    #div_block-197-10 {
        flex-direction:column;
        display: flex;
        align-items: center;
        text-align: center;
        padding-top: 0px
    }
}

@media (max-width: 767px) {
    #new_columns-100-87> .ct-div-block {
        width:100% !important
    }

    #new_columns-100-87 {
        flex-direction: column
    }
}

#new_columns-100-87 {
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: rgba(255,255,255,0.6)
}

@media (max-width: 767px) {
    #new_columns-121-87> .ct-div-block {
        width:100% !important
    }

    #new_columns-121-87 {
        flex-direction: column
    }
}

@media (max-width: 767px) {
    #new_columns-192-10> .ct-div-block {
        width:100% !important
    }

    #new_columns-192-10 {
        flex-direction: column
    }
}

@media (max-width: 767px) {
    @media (max-width:991px) {
        #new_columns-100-87> .ct-div-block {
            width:100% !important
        }
    }

    #new_columns-100-87 {
        border-bottom-style: none
    }
}

#headline-138-87 {
    font-weight: 700;
    color: #ffffff;
    font-size: 24px;
    line-height: 1.2;
    margin-bottom: 12px
}

#text_block-135-87 {
    font-size: 12px;
    color: #ffffff
}

#text_block-251-10 {
    color: #ffffff
}

#text_block-256-10 {
    color: #ffffff
}

#text_block-217-10 {
    url-encoded: true
}

#link_text-227-10 {
    url-encoded: true
}

#link_text-258-10 {
    url-encoded: true
}

#link-190-10 {
    url-encoded: true
}

#link-188-10 {
    url-encoded: true
}

#link-246-10 {
    flex-direction: row;
    text-align: center;
    display: flex
}

#link_button-252-10 {
}

#link_button-252-10 {
    url-encoded: true
}

#link_button-31-87 {
}

#link_button-31-87 {
    url-encoded: true
}

#link_button-30-87 {
}

#link_button-30-87 {
    url-encoded: true
}

#image-191-10 {
    height: 50px
}

#image-189-10 {
    height: 50px
}

#_header-2-87 {
    width: 100%
}

#_header_row-22-87 .oxy-nav-menu-open,#_header_row-22-87 .oxy-nav-menu:not(.oxy-nav-menu-open) .sub-menu {
    background-color: #2a445a
}

@media (max-width: 767px) {
    #_header_row-22-87 .oxy-header-container {
        flex-direction:column
    }

    #_header_row-22-87 .oxy-header-container > div {
        justify-content: center
    }
}

.oxy-header.oxy-sticky-header-active > #_header_row-22-87.oxygen-show-in-sticky-only {
    display: block
}

#_header_row-22-87 {
    padding-top: 12px;
    padding-bottom: 12px;
    background-color: #2a445a
}

@media (max-width: 767px) {
    .oxy-header.oxy-sticky-header-active > #_header_row-22-87.oxygen-show-in-sticky-only {
        display:block
    }

    #_header_row-22-87 {
        padding-top: 20px;
        padding-bottom: 20px
    }
}

#_social_icons-141-87.oxy-social-icons {
    flex-direction: row;
    margin-right: -8px;
    margin-bottom: -8px
}

#_social_icons-141-87.oxy-social-icons a {
    font-size: 32px;
    margin-right: 8px;
    margin-bottom: 8px;
    border-radius: 50%;
    background-color: rgba(255,255,255,0.6)
}

#_social_icons-141-87.oxy-social-icons a:hover {
    background-color: #ffffff
}

#_social_icons-141-87.oxy-social-icons a svg {
    width: 0.5em;
    height: 0.5em;
    color: #2a445a
}
/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */
button,
hr,
input {
  overflow: visible;
}
audio,
canvas,
progress,
video {
  display: inline-block;
}
progress,
sub,
sup {
  vertical-align: baseline;
}
[type="checkbox"],
[type="radio"],
legend {
  box-sizing: border-box;
  padding: 0;
}
html {
  line-height: 1.15;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
body,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
main,
menu,
nav,
section {
  display: block;
}
figure {
  margin: 1em 40px;
}
hr {
  box-sizing: content-box;
  height: 0;
}
code,
kbd,
pre,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}
a {
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
}
abbr[title] {
  border-bottom: none;
  text-decoration: underline;
  text-decoration: underline dotted;
}
b,
strong {
  font-weight: bolder;
}
dfn {
  font-style: italic;
}
mark {
  background-color: #ff0;
  color: #000;
}
small {
  font-size: 80%;
}
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}
audio:not([controls]) {
  display: none;
  height: 0;
}
img {
  border-style: none;
}
svg:not(:root) {
  overflow: hidden;
}
button,
input,
optgroup,
select,
textarea {
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}
button,
select {
  text-transform: none;
}
[type="reset"],
[type="submit"],
button,
html [type="button"] {
  -webkit-appearance: button;
}
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner,
button::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring,
button:-moz-focusring {
  outline: ButtonText dotted 1px;
}
fieldset {
  padding: 0.35em 0.75em 0.625em;
}
legend {
  color: inherit;
  display: table;
  max-width: 100%;
  white-space: normal;
}
textarea {
  overflow: auto;
}
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}
[type="search"]::-webkit-search-cancel-button,
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}
summary {
  display: list-item;
}
[hidden],
template {
  display: none;
} /* Oxygen */
html {
  box-sizing: border-box;
}
body {
  font-size: 16px;
  color: rgba(64, 64, 64, 1);
}
body.oxygen-aos-enabled {
  overflow-x: hidden;
}
*,
::after,
::before {
  box-sizing: inherit;
}
.ct-section-inner-wrap {
  margin-left: auto;
  margin-right: auto;
  height: 100%;
}
div.ct-svg-icon > svg,
svg.ct-svg-icon {
  height: 1em !important;
  fill: currentColor;
}
.ct-columns-inner-wrap {
  display: -webkit-flex !important;
  display: -ms-flexbox !important;
  display: flex !important;
}
.ct-column {
  float: left !important;
  word-break: break-word;
}
svg.ct-svg-icon {
  display: inline-block;
  width: 1em !important;
}
div.ct-svg-icon {
  display: inline-block;
  box-sizing: content-box;
  border-radius: 50%;
  width: auto;
}
div.ct-svg-icon > svg {
  width: 1em !important;
  display: block;
}
div.ct-fancy-icon {
  display: inline-flex;
  border-radius: 50%;
}
.ct-fancy-icon > svg {
  fill: currentColor;
}
.ct-columns-inner-wrap > .ct-column:first-child {
  margin-left: 0 !important;
}
.ct-columns-inner-wrap > .ct-column:last-child {
  margin-right: 0 !important;
}
.ct-video {
  width: 100%;
}
.ct-video > .oxygen-vsb-responsive-video-wrapper {
  position: relative;
}
.ct-video > .oxygen-vsb-responsive-video-wrapper > iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.oxy-nav-menu-list {
  display: flex;
  padding: 0;
  margin: 0;
}
.oxy-nav-menu .oxy-nav-menu-list li.menu-item {
  list-style-type: none;
  display: flex;
  flex-direction: column;
}
.oxy-nav-menu .oxy-nav-menu-list li.menu-item a {
  text-decoration: none;
  border-style: solid;
  border-width: 0;
  transition-timing-function: ease-in-out;
  transition-property: background-color, color, border-color;
  border-color: transparent;
}
.oxy-nav-menu .oxy-nav-menu-list li.current-menu-item > a,
.oxy-nav-menu .oxy-nav-menu-list li.menu-item:hover > a {
  border-color: currentColor;
}
.oxy-nav-menu .menu-item,
.oxy-nav-menu .sub-menu {
  position: relative;
}
.oxy-nav-menu .menu-item .sub-menu {
  padding: 0;
  flex-direction: column;
  white-space: nowrap;
  transition-timing-function: ease-in-out;
  transition-property: visibility, opacity;
  visibility: hidden;
  opacity: 0;
  display: flex;
  position: absolute;
  top: 100%;
}
.oxy-nav-menu .sub-menu .sub-menu,
.oxy-nav-menu.oxy-nav-menu-vertical .sub-menu {
  left: 100%;
  top: 0;
}
.oxy-nav-menu .menu-item:hover > .sub-menu {
  visibility: visible;
  opacity: 1;
}
.oxy-nav-menu .sub-menu li.menu-item {
  flex-direction: column;
}
@keyframes oxy_sticky_header_fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.oxy-sticky-header-fade-in {
  animation-name: oxy_sticky_header_fadein;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
}
.oxy-header-wrapper {
  position: relative;
}
.oxy-header-row {
  width: 100%;
  display: block;
}
.oxy-header-container {
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: stretch;
}
.oxy-header-center,
.oxy-header-left,
.oxy-header-right {
  display: flex;
  align-items: center;
}
.oxy-header .oxygen-only-show-in-overlay,
.oxy-video-container {
  display: none;
}
.oxy-header-left {
  justify-content: flex-start;
}
.oxy-header-center {
  flex-grow: 1;
  justify-content: center;
}
.oxy-header-right {
  justify-content: flex-end;
}
.admin-bar .oxy-sticky-header-active {
  top: 32px !important;
}
@media screen and (max-width: 782px) {
  .admin-bar .oxy-sticky-header-active {
    top: 46px !important;
  }
}
@media screen and (max-width: 600px) {
  .admin-bar .oxy-sticky-header-active {
    top: 0 !important;
  }
}
.oxy-video-background {
  position: relative;
  z-index: 1;
}
.oxy-video-background .oxy-video-container {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: -1;
}
.oxy-video-background .oxy-video-container video {
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
}
.oxy-video-overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.oxy-map iframe {
  width: 100%;
  height: 100%;
  display: block;
}
.unslider .unslider-fade ul li.unslider-active {
  position: relative;
}
.oxy-menu-toggle {
  cursor: pointer;
  display: none;
}
.oxy-nav-menu.oxy-nav-menu-open {
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: auto;
  z-index: 2147483642 !important;
  background-color: #fff;
}
.oxy-nav-menu.oxy-nav-menu-open > div:last-child {
  max-height: 100%;
  overflow: auto;
  padding-top: 2em;
  padding-bottom: 2em;
  width: 100%;
}
.oxy-nav-menu-prevent-overflow {
  overflow: hidden;
  height: 100%;
}
.oxy-nav-menu.oxy-nav-menu-open .oxy-menu-toggle {
  display: initial;
}
.oxy-nav-menu.oxy-nav-menu-open .oxy-nav-menu-list {
  flex-direction: column !important;
  width: 100%;
}
.oxy-nav-menu.oxy-nav-menu-open .oxy-nav-menu-list .menu-item a {
  text-align: center;
  border: 0 !important;
  background-color: transparent !important;
  justify-content: center;
}
.oxy-nav-menu.oxy-nav-menu-open .oxy-nav-menu-hamburger-wrap {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1;
}
.oxy-nav-menu:not(.oxy-nav-menu-open) .sub-menu {
  background-color: #fff;
  z-index: 2147483641;
}
.oxy-nav-menu.oxy-nav-menu-open .menu-item .sub-menu,
.oxy-nav-menu.oxy-nav-menu-open .menu-item-has-children > a::after {
  display: none;
}
.oxy-nav-menu.oxy-nav-menu-open.oxy-nav-menu-responsive-dropdowns
  .menu-item
  .sub-menu {
  display: flex;
  position: static;
  animation-name: none;
  visibility: visible;
  opacity: 1;
  transition-duration: 0s !important;
}
.oxy-nav-menu.oxy-nav-menu-open a:not([href]) {
  display: none;
}
.oxy-nav-menu-hamburger-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
}
.oxy-nav-menu-hamburger {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.oxy-nav-menu-hamburger-line {
  border-radius: 2px;
}
.oxy-nav-menu-open .oxy-nav-menu-hamburger {
  transform: rotate(45deg);
}
.oxy-nav-menu-open .oxy-nav-menu-hamburger .oxy-nav-menu-hamburger-line {
  display: none;
}
.oxy-nav-menu-open
  .oxy-nav-menu-hamburger
  .oxy-nav-menu-hamburger-line:first-child {
  display: initial;
  position: relative;
}
.oxy-nav-menu-open
  .oxy-nav-menu-hamburger
  .oxy-nav-menu-hamburger-line:last-child {
  display: initial;
  position: relative;
  transform: rotate(90deg);
}
.oxy-nav-menu .menu-item a {
  display: flex;
  align-items: center;
}
.oxy-nav-menu.oxy-nav-menu-vertical .menu-item a {
  flex-direction: row;
}
.oxy-nav-menu-dropdowns.oxy-nav-menu-dropdown-arrow
  .menu-item-has-children
  > a::after {
  width: 0.35em;
  height: 0.35em;
  margin-left: 0.5em;
  border-right: 0.1em solid;
  border-top: 0.1em solid;
  transform: rotate(135deg);
  content: "";
}
.oxy-nav-menu-dropdowns.oxy-nav-menu-dropdown-arrow
  .sub-menu
  .menu-item-has-children
  > a::after,
.oxy-nav-menu-dropdowns.oxy-nav-menu-dropdown-arrow.oxy-nav-menu-vertical
  .menu-item-has-children
  > a::after {
  transform: rotate(45deg);
}
.oxy-social-icons {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
}
.oxy-social-icons a {
  line-height: 1;
  width: 1em;
  height: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}
.oxy-social-icons a svg {
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
}
.oxy-soundcloud {
  min-width: 300px;
  min-height: 120px;
}
.oxy-soundcloud iframe {
  width: 100%;
  height: 100%;
}
.comment-body .alignleft,
.oxy-stock-content-styles .alignleft {
  margin-right: 1em;
  float: left;
}
.comment-body .alignright,
.oxy-stock-content-styles .alignright {
  margin-left: 1em;
  float: right;
}
.comment-body .aligncenter,
.oxy-stock-content-styles .aligncenter {
  margin-left: auto;
  margin-right: auto;
}
.comment-body img,
.oxy-stock-content-styles img {
  max-width: 100%;
}
.oxy-comment-form .comment-reply-title {
  margin-bottom: 0.5em;
}
.oxy-comment-form .logged-in-as {
  margin-bottom: 1em;
  font-size: 0.75em;
}
.oxy-comment-form #submit {
  padding: 1em 2em;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  margin-top: 0.5em;
  border: none;
  font-weight: 700;
}
.oxy-comment-form input,
.oxy-comment-form textarea {
  padding: 0.5em;
  border-radius: 0;
  border: 1px solid #000;
  color: gray;
  width: 100%;
}
.oxy-comment-form label {
  font-weight: 700;
}
.oxy-comment-form .comment-form > p {
  margin-top: 0;
  margin-bottom: 1em;
}
.oxy-comments h3.comments-title {
  margin-bottom: 1em;
}
.oxy-comments ol.children,
.oxy-comments ol.comments-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.oxy-comments ol.children {
  margin-left: 50px;
}
.oxy-comments li.comment .comment-body {
  margin-left: 0;
  margin-right: 0;
  margin-bottom: 50px;
}
.oxy-comments li.comment .comment-body .comment-content {
  margin-bottom: 1em;
}
.oxy-comments .comment-meta .comment-author {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.oxy-comments .comment-meta .comment-author .avatar {
  max-width: 64px;
  max-height: 64px;
  margin-right: 0.5em;
}
.oxy-comments .comment-meta .comment-author span.says::before {
  content: " ";
  white-space: pre;
}
.oxy-progress-bar-overlay-percent,
.oxy-progress-bar-overlay-text {
  line-height: 1;
  white-space: nowrap;
  color: #fff;
}
.oxy-comments .comment-meta .comment-metadata {
  font-size: 0.75em;
  margin-top: 0.75em;
}
.oxy-comments .comment-meta .edit-link {
  margin-left: 0.5em;
}
.oxy-comments .reply {
  display: flex;
}
.oxy-comments .reply .comment-reply-link {
  font-size: 0.75em;
}
.oxy-comments .comment-meta {
  flex-wrap: wrap;
}
.oxy-comments .comment-awaiting-moderation {
  flex-basis: 100%;
}
.oxy-login-form p {
  display: flex;
  flex-direction: column;
}
.oxy-login-form input {
  padding: 0.5em;
  border-radius: 0;
  border: 1px solid #000;
}
.oxy-login-form input[type="submit"] {
  padding: 1em 2em;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  border: none;
  font-weight: 700;
}
.oxy-search-form input {
  padding: 0.5em;
  border-radius: 0;
  border: 1px solid #000;
}
.oxy-search-form input[type="submit"] {
  padding: calc(0.5em + 1px) 1em;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  border: none;
}
.oxy-search-form label.screen-reader-text {
  display: none;
}
.oxy-icon-box-icon {
  display: flex;
  flex-shrink: 0;
  flex-grow: 0;
}
.oxy-icon-box-content {
  flex-grow: 1;
  width: 100%;
}
.oxy-icon-box-heading,
.oxy-icon-box-text {
  margin: 0;
}
.oxy-icon-box {
  display: flex;
  align-items: flex-start;
}
.oxy-pricing-box {
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}
.oxy-pricing-box .oxy-pricing-box-section.oxy-pricing-box-graphic {
  order: 10;
  display: flex;
  flex-direction: row;
}
.oxy-pricing-box-graphic > img {
  max-width: 100%;
  display: block;
}
.oxy-pricing-box .oxy-pricing-box-section.oxy-pricing-box-title {
  order: 20;
}
.oxy-pricing-box .oxy-pricing-box-section.oxy-pricing-box-price {
  order: 30;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: baseline;
  justify-content: center;
}
.oxy-pricing-box-amount {
  display: flex;
  align-items: baseline;
  flex-direction: row;
}
.oxy-pricing-box-currency {
  align-self: flex-start;
}
.oxy-pricing-box-amount-decimal {
  align-self: baseline;
}
.oxy-pricing-box-term {
  margin-left: 0.4em;
}
.oxy-pricing-box-sale-price {
  width: 100%;
  flex-grow: 0;
  flex-shrink: 0;
}
.oxy-pricing-box .oxy-pricing-box-section.oxy-pricing-box-content {
  order: 40;
}
.oxy-pricing-box .oxy-pricing-box-section.oxy-pricing-box-cta {
  order: 60;
}
@keyframes oxy_progress_bar_width {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
@keyframes oxy_progress_bar_stripes {
  from {
    background-position: 44px 0;
  }
  to {
    background-position: 0 0;
  }
}
.oxy-progress-bar-background,
.oxy-progress-bar-progress {
  background-position: top left;
  background-attachment: fixed;
  background-size: 44px 44px;
}
.oxy-progress-bar {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.oxy-progress-bar-background {
  background-color: #d3d3d3;
  width: 100%;
}
.oxy-progress-bar-progress {
  padding: 20px;
  display: flex;
  background-color: #a9a9a9;
  align-items: center;
}
.oxy-progress-bar-overlay-percent {
  margin-left: auto;
  padding-left: 1em;
  font-size: 0.8em;
}
.oxy-tab,
.oxy-tab-content {
  padding: 20px;
}
.oxy-progress-bar-overlay-percent:empty {
  display: none;
}
.oxy-superbox {
  display: inline-flex;
}
.oxy-superbox-primary,
.oxy-superbox-secondary,
.oxy-tabs-wrapper {
  display: flex;
}
.oxy-superbox-wrap {
  position: relative;
  overflow: hidden;
  display: flex;
  width: 100%;
}
.oxy-superbox-primary {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
}
.oxy-superbox-secondary {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.oxy-tab {
  cursor: pointer;
}
.oxy-tabs-contents-content-hidden {
  display: none !important;
}
.oxy-testimonial {
  display: flex;
  width: 100%;
}
.oxy-testimonial .oxy-testimonial-photo-wrap {
  display: flex;
  flex-direction: column;
}
.oxy-testimonial .oxy-testimonial-photo {
  border-radius: 50%;
}
.oxy-testimonial .oxy-testimonial-content-wrap {
  display: flex;
  flex-direction: column;
  order: 2;
}
.oxy-testimonial .oxy-testimonial-author-wrap {
  display: flex;
  flex-direction: column;
}
.oxy-testimonial .oxy-testimonial-author,
.oxy-testimonial .oxy-testimonial-author-info {
  display: flex;
}
.oxy-toggle {
  display: flex;
  flex-direction: row;
  cursor: pointer;
}
.oxy-toggle-content {
  align-self: stretch;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.oxy-expand-collapse-icon {
  align-self: center;
  flex-shrink: 0;
  flex-grow: 0;
  margin-right: 0.4em;
  text-align: initial;
  width: 1em;
  height: 1em;
  position: relative;
  display: inline-block;
}
.oxy-expand-collapse-icon::after,
.oxy-expand-collapse-icon::before {
  content: "";
  background-color: #000;
  position: absolute;
  width: 1em;
  height: 0.16em;
  top: calc((1em / 2) - 0.08em);
  transition: 0.3s ease-in-out all;
  border-radius: 0.03em;
}
.oxy-expand-collapse-icon::after {
  transform: rotate(-90deg) scale(0);
}
.oxy-eci-collapsed.oxy-expand-collapse-icon::after {
  transform: rotate(-180deg);
}
.oxy-eci-collapsed.oxy-expand-collapse-icon::before {
  transform: rotate(-90deg);
}
[data-aos][data-aos=""] {
  transition-duration: 0s !important;
}
.oxy-modal-backdrop {
  display: flex;
  align-items: center;
  justify-content: center;
}
body:not(.oxygen-builder-body) .oxy-modal-backdrop {
  display: none;
}
body.oxygen-builder-body .oxy-modal-backdrop {
  height: 100vh;
}
.oxy-modal-backdrop.live {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 1400;
}
.oxy-modal-backdrop.hidden {
  display: none;
}
.oxy-modal-backdrop.left {
  flex-direction: column;
  align-items: flex-start;
}
.oxy-modal-backdrop.right {
  flex-direction: column;
  align-items: flex-end;
}
.oxy-modal-backdrop.top {
  flex-direction: row;
  align-items: flex-start;
}
.oxy-modal-backdrop.bottom {
  flex-direction: row;
  align-items: flex-end;
}
.oxy-modal-backdrop.upper_left {
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
}
.oxy-modal-backdrop.upper_right {
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
}
.oxy-modal-backdrop.bottom_left {
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
}
.oxy-modal-backdrop.bottom_right {
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
}
.oxy-modal-backdrop .ct-modal {
  background-color: white;
  max-height: 100vh;
  overflow-y: auto;
}
div.oxy-dynamic-list div.oxy-product-images.oxy-woo-element {
  align-self:stretch;
}
div.oxy-repeater-pages, div.oxy-repeater-pages-wrap {
  display: flex;
}
.oxy-rich-text p:first-child {
  margin-block-start: 0;
}
.oxy-rich-text p:last-child {
  margin-block-end: 0;
}
/* Custom HTML tag support */
:-webkit-any(li, div._important),
:is(li, div._important) {
  display: list-item;
}
:-webkit-any(table, div._important),
:is(table, div._important){
    display: table;
}
:is(thead, div._important),
:-webkit-any(thead, div._important){
    display: table-header-group;
}
:is(tr, div._important),
:-webkit-any(tr, div._important) {
    display: table-row;
}
:is(tbody, div._important),
:-webkit-any(tbody, div._important) {
    display: table-row-group;
}
:is(th, td, div._important),
:-webkit-any(th, td, div._important) {
    display: table-cell;
}
:is(caption, div._important),
:-webkit-any(caption, div._important) {
    display: table-caption;
}
:is(colgroup, div._important),
:-webkit-any(colgroup, div._important){
    display: table-column-group;
}
:is(col, div._important),
:-webkit-any(col, div._important){
    display: table-column;
}
:is(tfoot, div._important),
:-webkit-any(tfoot, div._important){
    display: table-footer-group;
}
/* End custom HTML tag support */
@charset "UTF-8";#start-resizable-editor-section {
    display: none
}

.wp-block-audio {
    margin: 0 0 1em
}

.wp-block-audio figcaption {
    margin-top: .5em;
    margin-bottom: 1em
}

.wp-block-audio audio {
    width: 100%;
    min-width: 300px
}

.wp-block-button__link {
    color: #fff;
    background-color: #32373c;
    border-radius: 9999px;
    box-shadow: none;
    cursor: pointer;
    display: inline-block;
    font-size: 1.125em;
    padding: calc(.667em + 2px) calc(1.333em + 2px);
    text-align: center;
    text-decoration: none;
    overflow-wrap: break-word;
    box-sizing: border-box
}

.wp-block-button__link:active,.wp-block-button__link:focus,.wp-block-button__link:hover,.wp-block-button__link:visited {
    color: #fff
}

.wp-block-button__link.aligncenter {
    text-align: center
}

.wp-block-button__link.alignright {
    text-align: right
}

.wp-block-buttons>.wp-block-button.has-custom-width {
    max-width: none
}

.wp-block-buttons>.wp-block-button.has-custom-width .wp-block-button__link {
    width: 100%
}

.wp-block-buttons>.wp-block-button.has-custom-font-size .wp-block-button__link {
    font-size: inherit
}

.wp-block-buttons>.wp-block-button.wp-block-button__width-25 {
    width: calc(25% - .5em)
}

.wp-block-buttons>.wp-block-button.wp-block-button__width-50 {
    width: calc(50% - .5em)
}

.wp-block-buttons>.wp-block-button.wp-block-button__width-75 {
    width: calc(75% - .5em)
}

.wp-block-buttons>.wp-block-button.wp-block-button__width-100 {
    width: calc(100% - .5em)
}

.wp-block-buttons>.wp-block-button.wp-block-button__width-100:only-child {
    margin-right: 0;
    width: 100%
}

@supports (column-gap: 0.5em) {
    .wp-block-buttons.is-content-justification-right>.wp-block-button.wp-block-button,.wp-block-buttons>.wp-block-button.wp-block-button {
        margin-right:0;
        margin-left: 0
    }

    .wp-block-buttons>.wp-block-button.wp-block-button__width-25 {
        width: calc(25% - .375em)
    }

    .wp-block-buttons>.wp-block-button.wp-block-button__width-50 {
        width: calc(50% - .25em)
    }

    .wp-block-buttons>.wp-block-button.wp-block-button__width-75 {
        width: calc(75% - .125em)
    }

    .wp-block-buttons>.wp-block-button.wp-block-button__width-100 {
        width: auto;
        flex-basis: 100%
    }
}

.wp-block-button.is-style-squared,.wp-block-button__link.wp-block-button.is-style-squared {
    border-radius: 0
}

.wp-block-button.no-border-radius,.wp-block-button__link.no-border-radius {
    border-radius: 0!important
}

.is-style-outline>.wp-block-button__link,.wp-block-button__link.is-style-outline {
    border: 2px solid;
    padding: .667em 1.333em
}

.is-style-outline>.wp-block-button__link:not(.has-text-color),.wp-block-button__link.is-style-outline:not(.has-text-color) {
    color: currentColor
}

.is-style-outline>.wp-block-button__link:not(.has-background),.wp-block-button__link.is-style-outline:not(.has-background) {
    background-color: transparent
}

.wp-block-buttons {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: .5em
}

.wp-block-buttons.is-vertical {
    flex-direction: column
}

.wp-block-buttons.is-vertical>.wp-block-button {
    margin-right: 0
}

.wp-block-buttons.is-vertical>.wp-block-button:last-child {
    margin-bottom: 0
}

.wp-block-buttons>.wp-block-button {
    display: inline-block;
    margin-left: 0;
    margin-right: .5em;
    margin-bottom: .5em
}

.wp-block-buttons>.wp-block-button:last-child {
    margin-right: 0
}

.wp-block-buttons.is-content-justification-left {
    justify-content: flex-start
}

.wp-block-buttons.is-content-justification-left.is-vertical {
    align-items: flex-start
}

.wp-block-buttons.is-content-justification-center {
    justify-content: center
}

.wp-block-buttons.is-content-justification-center.is-vertical {
    align-items: center
}

.wp-block-buttons.is-content-justification-right {
    justify-content: flex-end
}

.wp-block-buttons.is-content-justification-right>.wp-block-button {
    margin-left: .5em;
    margin-right: 0
}

.wp-block-buttons.is-content-justification-right>.wp-block-button:first-child {
    margin-left: 0
}

.wp-block-buttons.is-content-justification-right.is-vertical {
    align-items: flex-end
}

.wp-block-buttons.is-content-justification-space-between {
    justify-content: space-between
}

.wp-block-buttons.aligncenter {
    text-align: center
}

.wp-block-buttons.alignleft .wp-block-button {
    margin-left: 0;
    margin-right: .5em
}

.wp-block-buttons.alignleft .wp-block-button:last-child {
    margin-right: 0
}

.wp-block-buttons.alignright .wp-block-button {
    margin-right: 0;
    margin-left: .5em
}

.wp-block-buttons.alignright .wp-block-button:first-child {
    margin-left: 0
}

.wp-block-buttons:not(.is-content-justification-space-between,.is-content-justification-right,.is-content-justification-left,.is-content-justification-center) .wp-block-button.aligncenter {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: .5em;
    width: 100%
}

.wp-block-button.aligncenter,.wp-block-calendar {
    text-align: center
}

.wp-block-calendar tbody td,.wp-block-calendar th {
    padding: .25em;
    border: 1px solid #ddd
}

.wp-block-calendar tfoot td {
    border: none
}

.wp-block-calendar table {
    width: 100%;
    border-collapse: collapse
}

.wp-block-calendar table th {
    font-weight: 400;
    background: #ddd
}

.wp-block-calendar a {
    text-decoration: underline
}

.wp-block-calendar table caption,.wp-block-calendar table tbody {
    color: #40464d
}

.wp-block-categories.alignleft {
    margin-right: 2em
}

.wp-block-categories.alignright {
    margin-left: 2em
}

.wp-block-code code {
    display: block;
    white-space: pre-wrap;
    overflow-wrap: break-word
}

.wp-block-columns {
    display: flex;
    margin-bottom: 1.75em;
    box-sizing: border-box;
    flex-wrap: wrap
}

@media (min-width: 782px) {
    .wp-block-columns {
        flex-wrap:nowrap
    }
}

.wp-block-columns.has-background {
    padding: 1.25em 2.375em
}

.wp-block-columns.are-vertically-aligned-top {
    align-items: flex-start
}

.wp-block-columns.are-vertically-aligned-center {
    align-items: center
}

.wp-block-columns.are-vertically-aligned-bottom {
    align-items: flex-end
}

.wp-block-column {
    flex-grow: 1;
    min-width: 0;
    word-break: break-word;
    overflow-wrap: break-word
}

@media (max-width: 599px) {
    .wp-block-column {
        flex-basis:100%!important
    }
}

@media (min-width: 600px) and (max-width:781px) {
    .wp-block-column:not(:only-child) {
        flex-basis:calc(50% - 1em)!important;
        flex-grow: 0
    }

    .wp-block-column:nth-child(2n) {
        margin-left: 2em
    }
}

@media (min-width: 782px) {
    .wp-block-column {
        flex-basis:0;
        flex-grow: 1
    }

    .wp-block-column[style*=flex-basis] {
        flex-grow: 0
    }

    .wp-block-column:not(:first-child) {
        margin-left: 2em
    }
}

.wp-block-column.is-vertically-aligned-top {
    align-self: flex-start
}

.wp-block-column.is-vertically-aligned-center {
    align-self: center
}

.wp-block-column.is-vertically-aligned-bottom {
    align-self: flex-end
}

.wp-block-column.is-vertically-aligned-bottom,.wp-block-column.is-vertically-aligned-center,.wp-block-column.is-vertically-aligned-top {
    width: 100%
}

.wp-block-cover,.wp-block-cover-image {
    position: relative;
    background-size: cover;
    background-position: 50%;
    min-height: 430px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em;
    box-sizing: border-box
}

.wp-block-cover-image.has-parallax,.wp-block-cover.has-parallax {
    background-attachment: fixed
}

@supports (-webkit-overflow-scrolling:touch) {
    .wp-block-cover-image.has-parallax,.wp-block-cover.has-parallax {
        background-attachment: scroll
    }
}

@media (prefers-reduced-motion:reduce) {
    .wp-block-cover-image.has-parallax,.wp-block-cover.has-parallax {
        background-attachment: scroll
    }
}

.wp-block-cover-image.is-repeated,.wp-block-cover.is-repeated {
    background-repeat: repeat;
    background-size: auto
}

.wp-block-cover-image.has-background-dim:not([class*=-background-color]),.wp-block-cover.has-background-dim:not([class*=-background-color]) {
    background-color: #000
}

.wp-block-cover-image.has-background-dim:before,.wp-block-cover.has-background-dim:before {
    content: "";
    background-color: inherit
}

.wp-block-cover-image.has-background-dim:not(.has-background-gradient):before,.wp-block-cover-image .wp-block-cover__gradient-background,.wp-block-cover.has-background-dim:not(.has-background-gradient):before,.wp-block-cover .wp-block-cover__gradient-background {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
    opacity: .5
}

.wp-block-cover-image.has-background-dim.has-background-dim-10 .wp-block-cover__gradient-background,.wp-block-cover-image.has-background-dim.has-background-dim-10:not(.has-background-gradient):before,.wp-block-cover.has-background-dim.has-background-dim-10 .wp-block-cover__gradient-background,.wp-block-cover.has-background-dim.has-background-dim-10:not(.has-background-gradient):before {
    opacity: .1
}

.wp-block-cover-image.has-background-dim.has-background-dim-20 .wp-block-cover__gradient-background,.wp-block-cover-image.has-background-dim.has-background-dim-20:not(.has-background-gradient):before,.wp-block-cover.has-background-dim.has-background-dim-20 .wp-block-cover__gradient-background,.wp-block-cover.has-background-dim.has-background-dim-20:not(.has-background-gradient):before {
    opacity: .2
}

.wp-block-cover-image.has-background-dim.has-background-dim-30 .wp-block-cover__gradient-background,.wp-block-cover-image.has-background-dim.has-background-dim-30:not(.has-background-gradient):before,.wp-block-cover.has-background-dim.has-background-dim-30 .wp-block-cover__gradient-background,.wp-block-cover.has-background-dim.has-background-dim-30:not(.has-background-gradient):before {
    opacity: .3
}

.wp-block-cover-image.has-background-dim.has-background-dim-40 .wp-block-cover__gradient-background,.wp-block-cover-image.has-background-dim.has-background-dim-40:not(.has-background-gradient):before,.wp-block-cover.has-background-dim.has-background-dim-40 .wp-block-cover__gradient-background,.wp-block-cover.has-background-dim.has-background-dim-40:not(.has-background-gradient):before {
    opacity: .4
}

.wp-block-cover-image.has-background-dim.has-background-dim-50 .wp-block-cover__gradient-background,.wp-block-cover-image.has-background-dim.has-background-dim-50:not(.has-background-gradient):before,.wp-block-cover.has-background-dim.has-background-dim-50 .wp-block-cover__gradient-background,.wp-block-cover.has-background-dim.has-background-dim-50:not(.has-background-gradient):before {
    opacity: .5
}

.wp-block-cover-image.has-background-dim.has-background-dim-60 .wp-block-cover__gradient-background,.wp-block-cover-image.has-background-dim.has-background-dim-60:not(.has-background-gradient):before,.wp-block-cover.has-background-dim.has-background-dim-60 .wp-block-cover__gradient-background,.wp-block-cover.has-background-dim.has-background-dim-60:not(.has-background-gradient):before {
    opacity: .6
}

.wp-block-cover-image.has-background-dim.has-background-dim-70 .wp-block-cover__gradient-background,.wp-block-cover-image.has-background-dim.has-background-dim-70:not(.has-background-gradient):before,.wp-block-cover.has-background-dim.has-background-dim-70 .wp-block-cover__gradient-background,.wp-block-cover.has-background-dim.has-background-dim-70:not(.has-background-gradient):before {
    opacity: .7
}

.wp-block-cover-image.has-background-dim.has-background-dim-80 .wp-block-cover__gradient-background,.wp-block-cover-image.has-background-dim.has-background-dim-80:not(.has-background-gradient):before,.wp-block-cover.has-background-dim.has-background-dim-80 .wp-block-cover__gradient-background,.wp-block-cover.has-background-dim.has-background-dim-80:not(.has-background-gradient):before {
    opacity: .8
}

.wp-block-cover-image.has-background-dim.has-background-dim-90 .wp-block-cover__gradient-background,.wp-block-cover-image.has-background-dim.has-background-dim-90:not(.has-background-gradient):before,.wp-block-cover.has-background-dim.has-background-dim-90 .wp-block-cover__gradient-background,.wp-block-cover.has-background-dim.has-background-dim-90:not(.has-background-gradient):before {
    opacity: .9
}

.wp-block-cover-image.has-background-dim.has-background-dim-100 .wp-block-cover__gradient-background,.wp-block-cover-image.has-background-dim.has-background-dim-100:not(.has-background-gradient):before,.wp-block-cover.has-background-dim.has-background-dim-100 .wp-block-cover__gradient-background,.wp-block-cover.has-background-dim.has-background-dim-100:not(.has-background-gradient):before {
    opacity: 1
}

.wp-block-cover-image.alignleft,.wp-block-cover-image.alignright,.wp-block-cover.alignleft,.wp-block-cover.alignright {
    max-width: 420px;
    width: 100%
}

.wp-block-cover-image:after,.wp-block-cover:after {
    display: block;
    content: "";
    font-size: 0;
    min-height: inherit
}

@supports (position: sticky) {
    .wp-block-cover-image:after,.wp-block-cover:after {
        content:none
    }
}

.wp-block-cover-image.aligncenter,.wp-block-cover-image.alignleft,.wp-block-cover-image.alignright,.wp-block-cover.aligncenter,.wp-block-cover.alignleft,.wp-block-cover.alignright {
    display: flex
}

.wp-block-cover-image .wp-block-cover__inner-container,.wp-block-cover .wp-block-cover__inner-container {
    width: 100%;
    z-index: 1;
    color: #fff
}

.wp-block-cover-image h1:not(.has-text-color),.wp-block-cover-image h2:not(.has-text-color),.wp-block-cover-image h3:not(.has-text-color),.wp-block-cover-image h4:not(.has-text-color),.wp-block-cover-image h5:not(.has-text-color),.wp-block-cover-image h6:not(.has-text-color),.wp-block-cover-image p:not(.has-text-color),.wp-block-cover h1:not(.has-text-color),.wp-block-cover h2:not(.has-text-color),.wp-block-cover h3:not(.has-text-color),.wp-block-cover h4:not(.has-text-color),.wp-block-cover h5:not(.has-text-color),.wp-block-cover h6:not(.has-text-color),.wp-block-cover p:not(.has-text-color) {
    color: inherit
}

.wp-block-cover-image.is-position-top-left,.wp-block-cover.is-position-top-left {
    align-items: flex-start;
    justify-content: flex-start
}

.wp-block-cover-image.is-position-top-center,.wp-block-cover.is-position-top-center {
    align-items: flex-start;
    justify-content: center
}

.wp-block-cover-image.is-position-top-right,.wp-block-cover.is-position-top-right {
    align-items: flex-start;
    justify-content: flex-end
}

.wp-block-cover-image.is-position-center-left,.wp-block-cover.is-position-center-left {
    align-items: center;
    justify-content: flex-start
}

.wp-block-cover-image.is-position-center-center,.wp-block-cover.is-position-center-center {
    align-items: center;
    justify-content: center
}

.wp-block-cover-image.is-position-center-right,.wp-block-cover.is-position-center-right {
    align-items: center;
    justify-content: flex-end
}

.wp-block-cover-image.is-position-bottom-left,.wp-block-cover.is-position-bottom-left {
    align-items: flex-end;
    justify-content: flex-start
}

.wp-block-cover-image.is-position-bottom-center,.wp-block-cover.is-position-bottom-center {
    align-items: flex-end;
    justify-content: center
}

.wp-block-cover-image.is-position-bottom-right,.wp-block-cover.is-position-bottom-right {
    align-items: flex-end;
    justify-content: flex-end
}

.wp-block-cover-image.has-custom-content-position.has-custom-content-position .wp-block-cover__inner-container,.wp-block-cover.has-custom-content-position.has-custom-content-position .wp-block-cover__inner-container {
    margin: 0;
    width: auto
}

.wp-block-cover-image img.wp-block-cover__image-background,.wp-block-cover-image video.wp-block-cover__video-background,.wp-block-cover img.wp-block-cover__image-background,.wp-block-cover video.wp-block-cover__video-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    max-width: none;
    max-height: none;
    -o-object-fit: cover;
    object-fit: cover;
    outline: none;
    border: none;
    box-shadow: none
}

.wp-block-cover__image-background,.wp-block-cover__video-background {
    z-index: 0
}

.wp-block-cover-image-text,.wp-block-cover-image-text a,.wp-block-cover-image-text a:active,.wp-block-cover-image-text a:focus,.wp-block-cover-image-text a:hover,.wp-block-cover-text,.wp-block-cover-text a,.wp-block-cover-text a:active,.wp-block-cover-text a:focus,.wp-block-cover-text a:hover,section.wp-block-cover-image h2,section.wp-block-cover-image h2 a,section.wp-block-cover-image h2 a:active,section.wp-block-cover-image h2 a:focus,section.wp-block-cover-image h2 a:hover {
    color: #fff
}

.wp-block-cover-image .wp-block-cover.has-left-content {
    justify-content: flex-start
}

.wp-block-cover-image .wp-block-cover.has-right-content {
    justify-content: flex-end
}

.wp-block-cover-image.has-left-content .wp-block-cover-image-text,.wp-block-cover.has-left-content .wp-block-cover-text,section.wp-block-cover-image.has-left-content>h2 {
    margin-left: 0;
    text-align: left
}

.wp-block-cover-image.has-right-content .wp-block-cover-image-text,.wp-block-cover.has-right-content .wp-block-cover-text,section.wp-block-cover-image.has-right-content>h2 {
    margin-right: 0;
    text-align: right
}

.wp-block-cover-image .wp-block-cover-image-text,.wp-block-cover .wp-block-cover-text,section.wp-block-cover-image>h2 {
    font-size: 2em;
    line-height: 1.25;
    z-index: 1;
    margin-bottom: 0;
    max-width: 840px;
    padding: .44em;
    text-align: center
}

.wp-block-embed.alignleft,.wp-block-embed.alignright,.wp-block[data-align=left]>[data-type="core/embed"],.wp-block[data-align=right]>[data-type="core/embed"] {
    max-width: 360px;
    width: 100%
}

.wp-block-embed.alignleft .wp-block-embed__wrapper,.wp-block-embed.alignright .wp-block-embed__wrapper,.wp-block[data-align=left]>[data-type="core/embed"] .wp-block-embed__wrapper,.wp-block[data-align=right]>[data-type="core/embed"] .wp-block-embed__wrapper {
    min-width: 280px
}

.wp-block-cover .wp-block-embed {
    min-width: 320px;
    min-height: 240px
}

.wp-block-embed {
    margin: 0 0 1em
}

.wp-block-embed figcaption {
    margin-top: .5em;
    margin-bottom: 1em
}

.wp-block-embed iframe {
    max-width: 100%
}

.wp-block-embed__wrapper {
    position: relative
}

.wp-embed-responsive .wp-has-aspect-ratio .wp-block-embed__wrapper:before {
    content: "";
    display: block;
    padding-top: 50%
}

.wp-embed-responsive .wp-has-aspect-ratio iframe {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%
}

.wp-embed-responsive .wp-embed-aspect-21-9 .wp-block-embed__wrapper:before {
    padding-top: 42.85%
}

.wp-embed-responsive .wp-embed-aspect-18-9 .wp-block-embed__wrapper:before {
    padding-top: 50%
}

.wp-embed-responsive .wp-embed-aspect-16-9 .wp-block-embed__wrapper:before {
    padding-top: 56.25%
}

.wp-embed-responsive .wp-embed-aspect-4-3 .wp-block-embed__wrapper:before {
    padding-top: 75%
}

.wp-embed-responsive .wp-embed-aspect-1-1 .wp-block-embed__wrapper:before {
    padding-top: 100%
}

.wp-embed-responsive .wp-embed-aspect-9-16 .wp-block-embed__wrapper:before {
    padding-top: 177.77%
}

.wp-embed-responsive .wp-embed-aspect-1-2 .wp-block-embed__wrapper:before {
    padding-top: 200%
}

.wp-block-file {
    margin-bottom: 1.5em
}

.wp-block-file.aligncenter {
    text-align: center
}

.wp-block-file.alignright {
    text-align: right
}

.wp-block-file .wp-block-file__embed {
    margin-bottom: 1em
}

.wp-block-file .wp-block-file__button {
    background: #32373c;
    border-radius: 2em;
    color: #fff;
    font-size: .8em;
    padding: .5em 1em
}

.wp-block-file a.wp-block-file__button {
    text-decoration: none
}

.wp-block-file a.wp-block-file__button:active,.wp-block-file a.wp-block-file__button:focus,.wp-block-file a.wp-block-file__button:hover,.wp-block-file a.wp-block-file__button:visited {
    box-shadow: none;
    color: #fff;
    opacity: .85;
    text-decoration: none
}

.wp-block-file *+.wp-block-file__button {
    margin-left: .75em
}

.blocks-gallery-grid,.wp-block-gallery {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
    margin: 0
}

.blocks-gallery-grid .blocks-gallery-image,.blocks-gallery-grid .blocks-gallery-item,.wp-block-gallery .blocks-gallery-image,.wp-block-gallery .blocks-gallery-item {
    margin: 0 1em 1em 0;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: center;
    position: relative;
    align-self: flex-start;
    width: calc(50% - 1em)
}

.blocks-gallery-grid .blocks-gallery-image:nth-of-type(2n),.blocks-gallery-grid .blocks-gallery-item:nth-of-type(2n),.wp-block-gallery .blocks-gallery-image:nth-of-type(2n),.wp-block-gallery .blocks-gallery-item:nth-of-type(2n) {
    margin-right: 0
}

.blocks-gallery-grid .blocks-gallery-image figure,.blocks-gallery-grid .blocks-gallery-item figure,.wp-block-gallery .blocks-gallery-image figure,.wp-block-gallery .blocks-gallery-item figure {
    margin: 0;
    height: 100%
}

@supports (position: sticky) {
    .blocks-gallery-grid .blocks-gallery-image figure,.blocks-gallery-grid .blocks-gallery-item figure,.wp-block-gallery .blocks-gallery-image figure,.wp-block-gallery .blocks-gallery-item figure {
        display:flex;
        align-items: flex-end;
        justify-content: flex-start
    }
}

.blocks-gallery-grid .blocks-gallery-image img,.blocks-gallery-grid .blocks-gallery-item img,.wp-block-gallery .blocks-gallery-image img,.wp-block-gallery .blocks-gallery-item img {
    display: block;
    max-width: 100%;
    height: auto;
    width: 100%
}

@supports (position: sticky) {
    .blocks-gallery-grid .blocks-gallery-image img,.blocks-gallery-grid .blocks-gallery-item img,.wp-block-gallery .blocks-gallery-image img,.wp-block-gallery .blocks-gallery-item img {
        width:auto
    }
}

.blocks-gallery-grid .blocks-gallery-image figcaption,.blocks-gallery-grid .blocks-gallery-item figcaption,.wp-block-gallery .blocks-gallery-image figcaption,.wp-block-gallery .blocks-gallery-item figcaption {
    position: absolute;
    bottom: 0;
    width: 100%;
    max-height: 100%;
    overflow: auto;
    padding: 3em .77em .7em;
    color: #fff;
    text-align: center;
    font-size: .8em;
    background: linear-gradient(0deg,rgba(0,0,0,.7),rgba(0,0,0,.3) 70%,transparent);
    box-sizing: border-box;
    margin: 0
}

.blocks-gallery-grid .blocks-gallery-image figcaption img,.blocks-gallery-grid .blocks-gallery-item figcaption img,.wp-block-gallery .blocks-gallery-image figcaption img,.wp-block-gallery .blocks-gallery-item figcaption img {
    display: inline
}

.blocks-gallery-grid figcaption,.wp-block-gallery figcaption {
    flex-grow: 1
}

.blocks-gallery-grid.is-cropped .blocks-gallery-image,.blocks-gallery-grid.is-cropped .blocks-gallery-item,.wp-block-gallery.is-cropped .blocks-gallery-image,.wp-block-gallery.is-cropped .blocks-gallery-item {
    align-self: inherit
}

.blocks-gallery-grid.is-cropped .blocks-gallery-image a,.blocks-gallery-grid.is-cropped .blocks-gallery-image img,.blocks-gallery-grid.is-cropped .blocks-gallery-item a,.blocks-gallery-grid.is-cropped .blocks-gallery-item img,.wp-block-gallery.is-cropped .blocks-gallery-image a,.wp-block-gallery.is-cropped .blocks-gallery-image img,.wp-block-gallery.is-cropped .blocks-gallery-item a,.wp-block-gallery.is-cropped .blocks-gallery-item img {
    width: 100%
}

@supports (position: sticky) {
    .blocks-gallery-grid.is-cropped .blocks-gallery-image a,.blocks-gallery-grid.is-cropped .blocks-gallery-image img,.blocks-gallery-grid.is-cropped .blocks-gallery-item a,.blocks-gallery-grid.is-cropped .blocks-gallery-item img,.wp-block-gallery.is-cropped .blocks-gallery-image a,.wp-block-gallery.is-cropped .blocks-gallery-image img,.wp-block-gallery.is-cropped .blocks-gallery-item a,.wp-block-gallery.is-cropped .blocks-gallery-item img {
        height:100%;
        flex: 1;
        -o-object-fit: cover;
        object-fit: cover
    }
}

.blocks-gallery-grid.columns-1 .blocks-gallery-image,.blocks-gallery-grid.columns-1 .blocks-gallery-item,.wp-block-gallery.columns-1 .blocks-gallery-image,.wp-block-gallery.columns-1 .blocks-gallery-item {
    width: 100%;
    margin-right: 0
}

@media (min-width: 600px) {
    .blocks-gallery-grid.columns-3 .blocks-gallery-image,.blocks-gallery-grid.columns-3 .blocks-gallery-item,.wp-block-gallery.columns-3 .blocks-gallery-image,.wp-block-gallery.columns-3 .blocks-gallery-item {
        width:calc(33.33333% - .66667em);
        margin-right: 1em
    }

    .blocks-gallery-grid.columns-4 .blocks-gallery-image,.blocks-gallery-grid.columns-4 .blocks-gallery-item,.wp-block-gallery.columns-4 .blocks-gallery-image,.wp-block-gallery.columns-4 .blocks-gallery-item {
        width: calc(25% - .75em);
        margin-right: 1em
    }

    .blocks-gallery-grid.columns-5 .blocks-gallery-image,.blocks-gallery-grid.columns-5 .blocks-gallery-item,.wp-block-gallery.columns-5 .blocks-gallery-image,.wp-block-gallery.columns-5 .blocks-gallery-item {
        width: calc(20% - .8em);
        margin-right: 1em
    }

    .blocks-gallery-grid.columns-6 .blocks-gallery-image,.blocks-gallery-grid.columns-6 .blocks-gallery-item,.wp-block-gallery.columns-6 .blocks-gallery-image,.wp-block-gallery.columns-6 .blocks-gallery-item {
        width: calc(16.66667% - .83333em);
        margin-right: 1em
    }

    .blocks-gallery-grid.columns-7 .blocks-gallery-image,.blocks-gallery-grid.columns-7 .blocks-gallery-item,.wp-block-gallery.columns-7 .blocks-gallery-image,.wp-block-gallery.columns-7 .blocks-gallery-item {
        width: calc(14.28571% - .85714em);
        margin-right: 1em
    }

    .blocks-gallery-grid.columns-8 .blocks-gallery-image,.blocks-gallery-grid.columns-8 .blocks-gallery-item,.wp-block-gallery.columns-8 .blocks-gallery-image,.wp-block-gallery.columns-8 .blocks-gallery-item {
        width: calc(12.5% - .875em);
        margin-right: 1em
    }

    .blocks-gallery-grid.columns-1 .blocks-gallery-image:nth-of-type(1n),.blocks-gallery-grid.columns-1 .blocks-gallery-item:nth-of-type(1n),.blocks-gallery-grid.columns-2 .blocks-gallery-image:nth-of-type(2n),.blocks-gallery-grid.columns-2 .blocks-gallery-item:nth-of-type(2n),.blocks-gallery-grid.columns-3 .blocks-gallery-image:nth-of-type(3n),.blocks-gallery-grid.columns-3 .blocks-gallery-item:nth-of-type(3n),.blocks-gallery-grid.columns-4 .blocks-gallery-image:nth-of-type(4n),.blocks-gallery-grid.columns-4 .blocks-gallery-item:nth-of-type(4n),.blocks-gallery-grid.columns-5 .blocks-gallery-image:nth-of-type(5n),.blocks-gallery-grid.columns-5 .blocks-gallery-item:nth-of-type(5n),.blocks-gallery-grid.columns-6 .blocks-gallery-image:nth-of-type(6n),.blocks-gallery-grid.columns-6 .blocks-gallery-item:nth-of-type(6n),.blocks-gallery-grid.columns-7 .blocks-gallery-image:nth-of-type(7n),.blocks-gallery-grid.columns-7 .blocks-gallery-item:nth-of-type(7n),.blocks-gallery-grid.columns-8 .blocks-gallery-image:nth-of-type(8n),.blocks-gallery-grid.columns-8 .blocks-gallery-item:nth-of-type(8n),.wp-block-gallery.columns-1 .blocks-gallery-image:nth-of-type(1n),.wp-block-gallery.columns-1 .blocks-gallery-item:nth-of-type(1n),.wp-block-gallery.columns-2 .blocks-gallery-image:nth-of-type(2n),.wp-block-gallery.columns-2 .blocks-gallery-item:nth-of-type(2n),.wp-block-gallery.columns-3 .blocks-gallery-image:nth-of-type(3n),.wp-block-gallery.columns-3 .blocks-gallery-item:nth-of-type(3n),.wp-block-gallery.columns-4 .blocks-gallery-image:nth-of-type(4n),.wp-block-gallery.columns-4 .blocks-gallery-item:nth-of-type(4n),.wp-block-gallery.columns-5 .blocks-gallery-image:nth-of-type(5n),.wp-block-gallery.columns-5 .blocks-gallery-item:nth-of-type(5n),.wp-block-gallery.columns-6 .blocks-gallery-image:nth-of-type(6n),.wp-block-gallery.columns-6 .blocks-gallery-item:nth-of-type(6n),.wp-block-gallery.columns-7 .blocks-gallery-image:nth-of-type(7n),.wp-block-gallery.columns-7 .blocks-gallery-item:nth-of-type(7n),.wp-block-gallery.columns-8 .blocks-gallery-image:nth-of-type(8n),.wp-block-gallery.columns-8 .blocks-gallery-item:nth-of-type(8n) {
        margin-right: 0
    }
}

.blocks-gallery-grid .blocks-gallery-image:last-child,.blocks-gallery-grid .blocks-gallery-item:last-child,.wp-block-gallery .blocks-gallery-image:last-child,.wp-block-gallery .blocks-gallery-item:last-child {
    margin-right: 0
}

.blocks-gallery-grid.alignleft,.blocks-gallery-grid.alignright,.wp-block-gallery.alignleft,.wp-block-gallery.alignright {
    max-width: 420px;
    width: 100%
}

.blocks-gallery-grid.aligncenter .blocks-gallery-item figure,.wp-block-gallery.aligncenter .blocks-gallery-item figure {
    justify-content: center
}

.wp-block-group {
    box-sizing: border-box
}

h1.has-background,h2.has-background,h3.has-background,h4.has-background,h5.has-background,h6.has-background {
    padding: 1.25em 2.375em
}

.wp-block-image {
    margin: 0 0 1em
}

.wp-block-image img {
    max-width: 100%
}

.wp-block-image:not(.is-style-rounded) img {
    border-radius: inherit
}

.wp-block-image.aligncenter {
    text-align: center
}

.wp-block-image.alignfull img,.wp-block-image.alignwide img {
    width: 100%
}

.wp-block-image .aligncenter,.wp-block-image .alignleft,.wp-block-image .alignright {
    display: table
}

.wp-block-image .aligncenter>figcaption,.wp-block-image .alignleft>figcaption,.wp-block-image .alignright>figcaption {
    display: table-caption;
    caption-side: bottom
}

.wp-block-image .alignleft {
    float: left;
    margin: .5em 1em .5em 0
}

.wp-block-image .alignright {
    float: right;
    margin: .5em 0 .5em 1em
}

.wp-block-image .aligncenter {
    margin-left: auto;
    margin-right: auto
}

.wp-block-image figcaption {
    margin-top: .5em;
    margin-bottom: 1em
}

.wp-block-image.is-style-circle-mask img,.wp-block-image.is-style-rounded img {
    border-radius: 9999px
}

@supports ((-webkit-mask-image: none) or (mask-image:none)) or (-webkit-mask-image:none) {
    .wp-block-image.is-style-circle-mask img {
        -webkit-mask-image:url('data:image/svg+xml;utf8,<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg>');
        mask-image: url('data:image/svg+xml;utf8,<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg>');
        mask-mode: alpha;
        -webkit-mask-repeat: no-repeat;
        mask-repeat: no-repeat;
        -webkit-mask-size: contain;
        mask-size: contain;
        -webkit-mask-position: center;
        mask-position: center;
        border-radius: 0
    }
}

.wp-block-image figure {
    margin: 0
}

ol.wp-block-latest-comments {
    margin-left: 0
}

.wp-block-latest-comments .wp-block-latest-comments {
    padding-left: 0
}

.wp-block-latest-comments__comment {
    line-height: 1.1;
    list-style: none;
    margin-bottom: 1em
}

.has-avatars .wp-block-latest-comments__comment {
    min-height: 2.25em;
    list-style: none
}

.has-avatars .wp-block-latest-comments__comment .wp-block-latest-comments__comment-excerpt,.has-avatars .wp-block-latest-comments__comment .wp-block-latest-comments__comment-meta {
    margin-left: 3.25em
}

.has-dates .wp-block-latest-comments__comment,.has-excerpts .wp-block-latest-comments__comment {
    line-height: 1.5
}

.wp-block-latest-comments__comment-excerpt p {
    font-size: .875em;
    line-height: 1.8;
    margin: .36em 0 1.4em
}

.wp-block-latest-comments__comment-date {
    display: block;
    font-size: .75em
}

.wp-block-latest-comments .avatar,.wp-block-latest-comments__comment-avatar {
    border-radius: 1.5em;
    display: block;
    float: left;
    height: 2.5em;
    margin-right: .75em;
    width: 2.5em
}

.wp-block-latest-posts.alignleft {
    margin-right: 2em
}

.wp-block-latest-posts.alignright {
    margin-left: 2em
}

.wp-block-latest-posts.wp-block-latest-posts__list {
    list-style: none;
    padding-left: 0
}

.wp-block-latest-posts.wp-block-latest-posts__list li {
    clear: both
}

.wp-block-latest-posts.is-grid {
    display: flex;
    flex-wrap: wrap;
    padding: 0
}

.wp-block-latest-posts.is-grid li {
    margin: 0 1.25em 1.25em 0;
    width: 100%
}

@media (min-width: 600px) {
    .wp-block-latest-posts.columns-2 li {
        width:calc(50% - .625em)
    }

    .wp-block-latest-posts.columns-2 li:nth-child(2n) {
        margin-right: 0
    }

    .wp-block-latest-posts.columns-3 li {
        width: calc(33.33333% - .83333em)
    }

    .wp-block-latest-posts.columns-3 li:nth-child(3n) {
        margin-right: 0
    }

    .wp-block-latest-posts.columns-4 li {
        width: calc(25% - .9375em)
    }

    .wp-block-latest-posts.columns-4 li:nth-child(4n) {
        margin-right: 0
    }

    .wp-block-latest-posts.columns-5 li {
        width: calc(20% - 1em)
    }

    .wp-block-latest-posts.columns-5 li:nth-child(5n) {
        margin-right: 0
    }

    .wp-block-latest-posts.columns-6 li {
        width: calc(16.66667% - 1.04167em)
    }

    .wp-block-latest-posts.columns-6 li:nth-child(6n) {
        margin-right: 0
    }
}

.wp-block-latest-posts__post-author,.wp-block-latest-posts__post-date {
    display: block;
    color: #555;
    font-size: .8125em
}

.wp-block-latest-posts__post-excerpt {
    margin-top: .5em;
    margin-bottom: 1em
}

.wp-block-latest-posts__featured-image a {
    display: inline-block
}

.wp-block-latest-posts__featured-image img {
    height: auto;
    width: auto;
    max-width: 100%
}

.wp-block-latest-posts__featured-image.alignleft {
    margin-right: 1em
}

.wp-block-latest-posts__featured-image.alignright {
    margin-left: 1em
}

.wp-block-latest-posts__featured-image.aligncenter {
    margin-bottom: 1em;
    text-align: center
}

.block-editor-image-alignment-control__row .components-base-control__field {
    display: flex;
    justify-content: space-between;
    align-items: center
}

.block-editor-image-alignment-control__row .components-base-control__field .components-base-control__label {
    margin-bottom: 0
}

ol.has-background,ul.has-background {
    padding: 1.25em 2.375em
}

.wp-block-media-text {
    /*!rtl:begin:ignore*/
    direction: ltr;
    /*!rtl:end:ignore*/
    display: grid;
    grid-template-columns: 50% 1fr;
    grid-template-rows: auto
}

.wp-block-media-text.has-media-on-the-right {
    grid-template-columns: 1fr 50%
}

.wp-block-media-text.is-vertically-aligned-top .wp-block-media-text__content,.wp-block-media-text.is-vertically-aligned-top .wp-block-media-text__media {
    align-self: start
}

.wp-block-media-text.is-vertically-aligned-center .wp-block-media-text__content,.wp-block-media-text.is-vertically-aligned-center .wp-block-media-text__media,.wp-block-media-text .wp-block-media-text__content,.wp-block-media-text .wp-block-media-text__media {
    align-self: center
}

.wp-block-media-text.is-vertically-aligned-bottom .wp-block-media-text__content,.wp-block-media-text.is-vertically-aligned-bottom .wp-block-media-text__media {
    align-self: end
}

.wp-block-media-text .wp-block-media-text__media {
    /*!rtl:begin:ignore*/
    grid-column: 1;
    grid-row: 1;
    /*!rtl:end:ignore*/
    margin: 0
}

.wp-block-media-text .wp-block-media-text__content {
    direction: ltr;
    /*!rtl:begin:ignore*/
    grid-column: 2;
    grid-row: 1;
    /*!rtl:end:ignore*/
    padding: 0 8%;
    word-break: break-word
}

.wp-block-media-text.has-media-on-the-right .wp-block-media-text__media {
    /*!rtl:begin:ignore*/
    grid-column: 2;
    grid-row: 1 /*!rtl:end:ignore*/
}

.wp-block-media-text.has-media-on-the-right .wp-block-media-text__content {
    /*!rtl:begin:ignore*/
    grid-column: 1;
    grid-row: 1 /*!rtl:end:ignore*/
}

.wp-block-media-text__media img,.wp-block-media-text__media video {
    max-width: unset;
    width: 100%;
    vertical-align: middle
}

.wp-block-media-text.is-image-fill .wp-block-media-text__media {
    height: 100%;
    min-height: 250px;
    background-size: cover
}

.wp-block-media-text.is-image-fill .wp-block-media-text__media>a {
    display: block;
    height: 100%
}

.wp-block-media-text.is-image-fill .wp-block-media-text__media img {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    border: 0
}

@media (max-width: 600px) {
    .wp-block-media-text.is-stacked-on-mobile {
        grid-template-columns:100%!important
    }

    .wp-block-media-text.is-stacked-on-mobile .wp-block-media-text__media {
        grid-column: 1;
        grid-row: 1
    }

    .wp-block-media-text.is-stacked-on-mobile .wp-block-media-text__content {
        grid-column: 1;
        grid-row: 2
    }
}

.wp-block-navigation {
    position: relative
}

.wp-block-navigation ul,.wp-block-navigation ul li {
    list-style: none;
    padding: 0
}

.wp-block-navigation .wp-block-navigation-link,.wp-block-navigation .wp-block-pages-list__item {
    display: flex;
    align-items: center;
    position: relative
}

.wp-block-navigation .wp-block-navigation-link .wp-block-navigation-link__container:empty,.wp-block-navigation .wp-block-pages-list__item .wp-block-navigation-link__container:empty {
    display: none
}

.wp-block-navigation .wp-block-navigation-link__content,.wp-block-navigation .wp-block-pages-list__item__link {
    color: inherit;
    display: block
}

.wp-block-navigation[style*=text-decoration] .wp-block-navigation-link,.wp-block-navigation[style*=text-decoration] .wp-block-navigation-link__container,.wp-block-navigation[style*=text-decoration] .wp-block-navigation-link__content,.wp-block-navigation[style*=text-decoration] .wp-block-navigation-link__content:active,.wp-block-navigation[style*=text-decoration] .wp-block-navigation-link__content:focus,.wp-block-navigation[style*=text-decoration] .wp-block-pages-list__item,.wp-block-navigation[style*=text-decoration] .wp-block-pages-list__item__link,.wp-block-navigation[style*=text-decoration] .wp-block-pages-list__item__link:active,.wp-block-navigation[style*=text-decoration] .wp-block-pages-list__item__link:focus {
    text-decoration: inherit
}

.wp-block-navigation:not([style*=text-decoration]) .wp-block-navigation-link__content,.wp-block-navigation:not([style*=text-decoration]) .wp-block-navigation-link__content:active,.wp-block-navigation:not([style*=text-decoration]) .wp-block-navigation-link__content:focus,.wp-block-navigation:not([style*=text-decoration]) .wp-block-pages-list__item__link,.wp-block-navigation:not([style*=text-decoration]) .wp-block-pages-list__item__link:active,.wp-block-navigation:not([style*=text-decoration]) .wp-block-pages-list__item__link:focus {
    text-decoration: none
}

.wp-block-navigation .wp-block-navigation-link__submenu-icon,.wp-block-navigation .wp-block-page-list__submenu-icon {
    height: inherit
}

.wp-block-navigation .wp-block-navigation-link__submenu-icon svg,.wp-block-navigation .wp-block-page-list__submenu-icon svg {
    stroke: currentColor
}

.wp-block-navigation .wp-block-navigation-link .wp-block-navigation-link__content.wp-block-navigation-link__content.wp-block-navigation-link__content,.wp-block-navigation .wp-block-pages-list__item .wp-block-pages-list__item__link {
    padding: 0
}

.wp-block-navigation .has-child>.wp-block-navigation-link__content,.wp-block-navigation .has-child>.wp-block-pages-list__item__link {
    margin-right: .5em
}

.wp-block-navigation .has-child .submenu-container,.wp-block-navigation .has-child .wp-block-navigation-link__container {
    background-color: inherit;
    color: inherit;
    position: absolute;
    z-index: 2;
    flex-direction: column;
    align-items: normal;
    min-width: 200px;
    display: none;
    opacity: 0;
    transition: opacity .1s linear;
    visibility: hidden
}

.wp-block-navigation .has-child .submenu-container>.wp-block-navigation-link>.wp-block-navigation-link__content,.wp-block-navigation .has-child .submenu-container>.wp-block-navigation-link>.wp-block-pages-list__item__link,.wp-block-navigation .has-child .submenu-container>.wp-block-pages-list__item>.wp-block-navigation-link__content,.wp-block-navigation .has-child .submenu-container>.wp-block-pages-list__item>.wp-block-pages-list__item__link,.wp-block-navigation .has-child .wp-block-navigation-link__container>.wp-block-navigation-link>.wp-block-navigation-link__content,.wp-block-navigation .has-child .wp-block-navigation-link__container>.wp-block-navigation-link>.wp-block-pages-list__item__link,.wp-block-navigation .has-child .wp-block-navigation-link__container>.wp-block-pages-list__item>.wp-block-navigation-link__content,.wp-block-navigation .has-child .wp-block-navigation-link__container>.wp-block-pages-list__item>.wp-block-pages-list__item__link {
    flex-grow: 1
}

.wp-block-navigation .has-child .submenu-container>.wp-block-navigation-link>.wp-block-navigation-link__submenu-icon,.wp-block-navigation .has-child .submenu-container>.wp-block-navigation-link>.wp-block-page-list__submenu-icon,.wp-block-navigation .has-child .submenu-container>.wp-block-pages-list__item>.wp-block-navigation-link__submenu-icon,.wp-block-navigation .has-child .submenu-container>.wp-block-pages-list__item>.wp-block-page-list__submenu-icon,.wp-block-navigation .has-child .wp-block-navigation-link__container>.wp-block-navigation-link>.wp-block-navigation-link__submenu-icon,.wp-block-navigation .has-child .wp-block-navigation-link__container>.wp-block-navigation-link>.wp-block-page-list__submenu-icon,.wp-block-navigation .has-child .wp-block-navigation-link__container>.wp-block-pages-list__item>.wp-block-navigation-link__submenu-icon,.wp-block-navigation .has-child .wp-block-navigation-link__container>.wp-block-pages-list__item>.wp-block-page-list__submenu-icon {
    padding-right: .5em
}

@media (min-width: 782px) {
    .wp-block-navigation .has-child .submenu-container .submenu-container:before,.wp-block-navigation .has-child .submenu-container .wp-block-navigation-link__container:before,.wp-block-navigation .has-child .wp-block-navigation-link__container .submenu-container:before,.wp-block-navigation .has-child .wp-block-navigation-link__container .wp-block-navigation-link__container:before {
        content:"";
        position: absolute;
        right: 100%;
        height: 100%;
        display: block;
        width: .5em;
        background: transparent
    }

    .wp-block-navigation .has-child .submenu-container .wp-block-navigation-link__submenu-icon svg,.wp-block-navigation .has-child .submenu-container .wp-block-page-list__submenu-icon svg,.wp-block-navigation .has-child .wp-block-navigation-link__container .wp-block-navigation-link__submenu-icon svg,.wp-block-navigation .has-child .wp-block-navigation-link__container .wp-block-page-list__submenu-icon svg {
        transform: rotate(-90deg)
    }
}

.wp-block-navigation .has-child:hover>.wp-block-navigation-link__container {
    display: flex;
    visibility: visible;
    opacity: 1
}

.wp-block-navigation .has-child:focus-within>.wp-block-navigation-link__container {
    display: flex;
    visibility: visible;
    opacity: 1
}

.wp-block-navigation .has-child:hover {
    cursor: pointer
}

.wp-block-navigation .has-child:hover>.submenu-container {
    display: flex;
    visibility: visible;
    opacity: 1
}

.wp-block-navigation .has-child:focus-within {
    cursor: pointer
}

.wp-block-navigation .has-child:focus-within>.submenu-container {
    display: flex;
    visibility: visible;
    opacity: 1
}

.wp-block-navigation.wp-block-navigation.items-justified-right>.submenu-container .has-child .submenu-container,.wp-block-navigation.wp-block-navigation.items-justified-right>.submenu-container .has-child .wp-block-navigation-link__container,.wp-block-navigation.wp-block-navigation.items-justified-right>.wp-block-navigation__container .has-child .submenu-container,.wp-block-navigation.wp-block-navigation.items-justified-right>.wp-block-navigation__container .has-child .wp-block-navigation-link__container,.wp-block-navigation.wp-block-navigation.items-justified-space-between>.submenu-container>.has-child:last-child .submenu-container,.wp-block-navigation.wp-block-navigation.items-justified-space-between>.submenu-container>.has-child:last-child .wp-block-navigation-link__container,.wp-block-navigation.wp-block-navigation.items-justified-space-between>.wp-block-navigation__container>.has-child:last-child .submenu-container,.wp-block-navigation.wp-block-navigation.items-justified-space-between>.wp-block-navigation__container>.has-child:last-child .wp-block-navigation-link__container {
    left: auto;
    right: 0
}

.wp-block-navigation.wp-block-navigation.items-justified-right>.submenu-container .has-child .submenu-container .submenu-container,.wp-block-navigation.wp-block-navigation.items-justified-right>.submenu-container .has-child .submenu-container .wp-block-navigation-link__container,.wp-block-navigation.wp-block-navigation.items-justified-right>.submenu-container .has-child .wp-block-navigation-link__container .submenu-container,.wp-block-navigation.wp-block-navigation.items-justified-right>.submenu-container .has-child .wp-block-navigation-link__container .wp-block-navigation-link__container,.wp-block-navigation.wp-block-navigation.items-justified-right>.wp-block-navigation__container .has-child .submenu-container .submenu-container,.wp-block-navigation.wp-block-navigation.items-justified-right>.wp-block-navigation__container .has-child .submenu-container .wp-block-navigation-link__container,.wp-block-navigation.wp-block-navigation.items-justified-right>.wp-block-navigation__container .has-child .wp-block-navigation-link__container .submenu-container,.wp-block-navigation.wp-block-navigation.items-justified-right>.wp-block-navigation__container .has-child .wp-block-navigation-link__container .wp-block-navigation-link__container,.wp-block-navigation.wp-block-navigation.items-justified-space-between>.submenu-container>.has-child:last-child .submenu-container .submenu-container,.wp-block-navigation.wp-block-navigation.items-justified-space-between>.submenu-container>.has-child:last-child .submenu-container .wp-block-navigation-link__container,.wp-block-navigation.wp-block-navigation.items-justified-space-between>.submenu-container>.has-child:last-child .wp-block-navigation-link__container .submenu-container,.wp-block-navigation.wp-block-navigation.items-justified-space-between>.submenu-container>.has-child:last-child .wp-block-navigation-link__container .wp-block-navigation-link__container,.wp-block-navigation.wp-block-navigation.items-justified-space-between>.wp-block-navigation__container>.has-child:last-child .submenu-container .submenu-container,.wp-block-navigation.wp-block-navigation.items-justified-space-between>.wp-block-navigation__container>.has-child:last-child .submenu-container .wp-block-navigation-link__container,.wp-block-navigation.wp-block-navigation.items-justified-space-between>.wp-block-navigation__container>.has-child:last-child .wp-block-navigation-link__container .submenu-container,.wp-block-navigation.wp-block-navigation.items-justified-space-between>.wp-block-navigation__container>.has-child:last-child .wp-block-navigation-link__container .wp-block-navigation-link__container {
    left: auto;
    right: 100%
}

.wp-block-navigation.wp-block-navigation .wp-block-navigation__container>.wp-block-navigation-link,.wp-block-navigation.wp-block-navigation .wp-block-page-list,.wp-block-navigation.wp-block-navigation .wp-block-page-list>.wp-block-pages-list__item {
    margin: 0 2em 0 0
}

.wp-block-navigation.wp-block-navigation .wp-block-navigation__container>.wp-block-navigation-link:last-child,.wp-block-navigation.wp-block-navigation .wp-block-page-list:last-child,.wp-block-navigation.wp-block-navigation .wp-block-page-list>.wp-block-pages-list__item:last-child {
    margin-right: 0
}

.wp-block-navigation.wp-block-navigation.has-background .wp-block-navigation__container>.wp-block-navigation-link,.wp-block-navigation.wp-block-navigation.has-background .wp-block-page-list,.wp-block-navigation.wp-block-navigation.has-background .wp-block-page-list>.wp-block-pages-list__item {
    margin: 0 .5em 0 0
}

.wp-block-navigation.wp-block-navigation.has-background .wp-block-navigation__container .wp-block-navigation-link__content,.wp-block-navigation.wp-block-navigation.has-background .wp-block-page-list .wp-block-pages-list__item__link {
    padding: .5em 1em
}

.wp-block-navigation.wp-block-navigation .has-child .submenu-container,.wp-block-navigation.wp-block-navigation .has-child .wp-block-navigation-link__container {
    left: -1em;
    top: 100%
}

.wp-block-navigation.wp-block-navigation .has-child .submenu-container .wp-block-navigation-link,.wp-block-navigation.wp-block-navigation .has-child .submenu-container .wp-block-pages-list__item,.wp-block-navigation.wp-block-navigation .has-child .wp-block-navigation-link__container .wp-block-navigation-link,.wp-block-navigation.wp-block-navigation .has-child .wp-block-navigation-link__container .wp-block-pages-list__item {
    margin: 0
}

.wp-block-navigation.wp-block-navigation .has-child .submenu-container .wp-block-navigation-link__content,.wp-block-navigation.wp-block-navigation .has-child .submenu-container .wp-block-pages-list__item__link,.wp-block-navigation.wp-block-navigation .has-child .wp-block-navigation-link__container .wp-block-navigation-link__content,.wp-block-navigation.wp-block-navigation .has-child .wp-block-navigation-link__container .wp-block-pages-list__item__link {
    padding: .5em 1em
}

.wp-block-navigation.wp-block-navigation .has-child .submenu-container .submenu-container,.wp-block-navigation.wp-block-navigation .has-child .submenu-container .wp-block-navigation-link__container,.wp-block-navigation.wp-block-navigation .has-child .wp-block-navigation-link__container .submenu-container,.wp-block-navigation.wp-block-navigation .has-child .wp-block-navigation-link__container .wp-block-navigation-link__container {
    left: -1px
}

@media (min-width: 782px) {
    .wp-block-navigation.wp-block-navigation .has-child .submenu-container .submenu-container,.wp-block-navigation.wp-block-navigation .has-child .submenu-container .wp-block-navigation-link__container,.wp-block-navigation.wp-block-navigation .has-child .wp-block-navigation-link__container .submenu-container,.wp-block-navigation.wp-block-navigation .has-child .wp-block-navigation-link__container .wp-block-navigation-link__container {
        left:100%;
        top: -1px
    }
}

.wp-block-navigation.wp-block-navigation.has-background .has-child .submenu-container,.wp-block-navigation.wp-block-navigation.has-background .has-child .wp-block-navigation-link__container {
    left: 0;
    top: 100%
}

.wp-block-navigation.wp-block-navigation.has-background .has-child .submenu-container .submenu-container,.wp-block-navigation.wp-block-navigation.has-background .has-child .submenu-container .wp-block-navigation-link__container,.wp-block-navigation.wp-block-navigation.has-background .has-child .wp-block-navigation-link__container .submenu-container,.wp-block-navigation.wp-block-navigation.has-background .has-child .wp-block-navigation-link__container .wp-block-navigation-link__container {
    left: 0
}

@media (min-width: 782px) {
    .wp-block-navigation.wp-block-navigation.has-background .has-child .submenu-container .submenu-container,.wp-block-navigation.wp-block-navigation.has-background .has-child .submenu-container .wp-block-navigation-link__container,.wp-block-navigation.wp-block-navigation.has-background .has-child .wp-block-navigation-link__container .submenu-container,.wp-block-navigation.wp-block-navigation.has-background .has-child .wp-block-navigation-link__container .wp-block-navigation-link__container {
        left:100%;
        top: 0
    }
}

.wp-block-navigation:not(.has-background) .submenu-container,.wp-block-navigation:not(.has-background) .wp-block-navigation__container .wp-block-navigation-link__container {
    background-color: #fff;
    color: #000;
    border: 1px solid rgba(0,0,0,.15)
}

.wp-block-navigation__container {
    align-items: center;
    list-style: none;
    margin: 0;
    padding-left: 0
}

.wp-block-navigation__container .is-responsive {
    display: none
}

@media (min-width: 600px) {
    .wp-block-navigation__container {
        display:flex;
        flex-wrap: wrap
    }

    .is-vertical .wp-block-navigation__container {
        display: block;
        flex-direction: column;
        align-items: flex-start
    }
}

.items-justified-center .wp-block-navigation__container {
    justify-content: center
}

.items-justified-right .wp-block-navigation__container {
    justify-content: flex-end
}

.items-justified-space-between .wp-block-navigation__container {
    justify-content: space-between
}

.is-vertical.items-justified-center>ul {
    align-items: center
}

.is-vertical.items-justified-right>ul {
    align-items: flex-end
}

.is-vertical.items-justified-right>ul .wp-block-navigation-link,.is-vertical.items-justified-right>ul .wp-block-pages-list__item {
    margin-right: 0;
    justify-content: flex-end
}

.wp-block-navigation__responsive-container {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    align-items: flex-start;
    justify-content: flex-start
}

.wp-block-navigation__responsive-container.is-menu-open {
    display: flex;
    flex-direction: column;
    overflow: auto;
    z-index: 100000;
    padding: 24px;
    background-color: inherit
}

.wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation__container {
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    align-items: flex-start;
    line-height: 48px;
    padding: 0
}

.wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation__container .wp-block-page-list {
    flex-direction: column
}

.wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation-link,.wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation-link .wp-block-navigation-link__container,.wp-block-navigation__responsive-container.is-menu-open .wp-block-pages-list__item,.wp-block-navigation__responsive-container.is-menu-open .wp-block-pages-list__item .submenu-container {
    background: transparent!important
}

@media (min-width: 600px) {
    .wp-block-navigation__responsive-container:not(.is-menu-open) {
        display:flex;
        flex-direction: row;
        position: relative;
        background-color: inherit
    }

    .wp-block-navigation__responsive-container:not(.is-menu-open) .wp-block-navigation__responsive-container-close {
        display: none
    }

    .wp-block-navigation__responsive-container.is-menu-open .submenu-container.submenu-container.submenu-container.submenu-container,.wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation-link__container.wp-block-navigation-link__container.wp-block-navigation-link__container.wp-block-navigation-link__container {
        left: 0
    }
}

.wp-block-navigation:not(.has-background) .wp-block-navigation__responsive-container.is-menu-open {
    background-color: #fff;
    color: #000
}

.wp-block-navigation__responsive-container-close,.wp-block-navigation__responsive-container-open {
    vertical-align: middle;
    cursor: pointer;
    color: currentColor;
    background: transparent;
    border: none;
    margin: 0;
    padding: 0
}

.wp-block-navigation__responsive-container-close svg,.wp-block-navigation__responsive-container-open svg {
    fill: currentColor;
    pointer-events: none;
    display: block;
    width: 24px;
    height: 24px
}

.wp-block-navigation__responsive-container-open {
    display: flex
}

@media (min-width: 600px) {
    .wp-block-navigation__responsive-container-open {
        display:none
    }
}

.items-justified-left .wp-block-navigation__responsive-container-open {
    margin-left: 0;
    margin-right: auto
}

.items-justified-center .wp-block-navigation__responsive-container-open {
    margin-left: auto;
    margin-right: auto
}

.items-justified-right .wp-block-navigation__responsive-container-open {
    margin-left: auto;
    margin-right: 0
}

.wp-block-navigation__responsive-container-close {
    position: absolute;
    top: 24px;
    right: 24px;
    z-index: 2
}

.wp-block-navigation__responsive-close {
    width: 100%
}

.is-menu-open .wp-block-navigation__responsive-close,.is-menu-open .wp-block-navigation__responsive-container-content,.is-menu-open .wp-block-navigation__responsive-dialog {
    width: 100%;
    height: 100%
}

.wp-block-navigation .wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation-link__submenu-icon,.wp-block-navigation .wp-block-navigation__responsive-container.is-menu-open .wp-block-page-list__submenu-icon {
    display: none
}

.wp-block-navigation .wp-block-navigation__responsive-container.is-menu-open .has-child .submenu-container,.wp-block-navigation .wp-block-navigation__responsive-container.is-menu-open .has-child .wp-block-navigation-link__container {
    position: relative;
    opacity: 1;
    visibility: visible;
    padding: 0 0 0 32px;
    border: none
}

.wp-block-navigation .wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation-link,.wp-block-navigation .wp-block-navigation__responsive-container.is-menu-open .wp-block-pages-list__item {
    flex-direction: column;
    align-items: flex-start
}

html.has-modal-open {
    overflow: hidden
}

.wp-block-navigation .wp-block-navigation-link__label {
    word-break: normal;
    overflow-wrap: break-word
}

.wp-block-navigation .wp-block-home-link__content {
    color: inherit;
    display: block;
    padding: .5em 1em
}

.wp-block-navigation[style*=text-decoration] .wp-block-home-link,.wp-block-navigation[style*=text-decoration] .wp-block-home-link__content,.wp-block-navigation[style*=text-decoration] .wp-block-home-link__content:active,.wp-block-navigation[style*=text-decoration] .wp-block-home-link__content:focus {
    text-decoration: inherit
}

.wp-block-navigation:not([style*=text-decoration]) .wp-block-home-link__content,.wp-block-navigation:not([style*=text-decoration]) .wp-block-home-link__content:active,.wp-block-navigation:not([style*=text-decoration]) .wp-block-home-link__content:focus {
    text-decoration: none
}

.wp-block-navigation:not(.has-background) .wp-block-navigation__container .wp-block-home-link__container {
    background-color: #fff;
    color: #000;
    border: 1px solid rgba(0,0,0,.15)
}

.wp-block-navigation:not(.has-background) .wp-block-navigation__container .wp-block-home-link__container .wp-block-home-link__container {
    top: -1px
}

.wp-block-navigation .wp-block-page-list {
    display: flex;
    flex-wrap: wrap;
    background-color: inherit
}

.wp-block-navigation .wp-block-pages-list__item {
    background-color: inherit
}

.wp-block-navigation .wp-block-page-list__submenu-icon {
    display: none
}

.is-open .wp-block-navigation__container .wp-block-page-list,.is-vertical .wp-block-navigation__container .wp-block-page-list,.wp-block-navigation .show-submenu-icons .wp-block-page-list__submenu-icon {
    display: block
}

@media (min-width: 480px) {
    .is-open .wp-block-navigation__container .wp-block-page-list {
        display:flex
    }
}

.items-justified-space-between .wp-block-page-list {
    display: contents
}

.is-small-text {
    font-size: .875em
}

.is-regular-text {
    font-size: 1em
}

.is-large-text {
    font-size: 2.25em
}

.is-larger-text {
    font-size: 3em
}

.has-drop-cap:not(:focus):first-letter {
    float: left;
    font-size: 8.4em;
    line-height: .68;
    font-weight: 100;
    margin: .05em .1em 0 0;
    text-transform: uppercase;
    font-style: normal
}

p.has-drop-cap.has-background {
    overflow: hidden
}

p.has-background {
    padding: 1.25em 2.375em
}

p.has-text-color a {
    color: inherit
}

.wp-block-post-author {
    display: flex;
    flex-wrap: wrap
}

.wp-block-post-author__byline {
    width: 100%;
    margin-top: 0;
    margin-bottom: 0;
    font-size: .5em
}

.wp-block-post-author__avatar {
    margin-right: 1em
}

.wp-block-post-author__bio {
    margin-bottom: .7em;
    font-size: .7em
}

.wp-block-post-author__content {
    flex-grow: 1;
    flex-basis: 0
}

.wp-block-post-author__name {
    font-weight: 700;
    margin: 0
}

.wp-block-post-comments .commentlist {
    list-style: none;
    margin: 0;
    padding: 0
}

.wp-block-post-comments .commentlist .comment {
    min-height: 2.25em;
    padding-left: 3.25em
}

.wp-block-post-comments .commentlist .comment p {
    font-size: .875em;
    line-height: 1.8;
    margin: .36em 0 1.4em
}

.wp-block-post-comments .commentlist .children {
    list-style: none;
    margin: 0;
    padding: 0
}

.wp-block-post-comments .comment-author {
    line-height: 1.5;
    margin-left: -3.25em
}

.wp-block-post-comments .comment-author .avatar {
    border-radius: 1.5em;
    display: block;
    float: left;
    height: 2.5em;
    margin-right: .75em;
    width: 2.5em
}

.wp-block-post-comments .comment-author cite {
    font-style: normal
}

.wp-block-post-comments .comment-meta {
    line-height: 1.5;
    margin-left: -3.25em
}

.wp-block-post-comments .comment-body .commentmetadata {
    font-size: .75em
}

.wp-block-post-comments .comment-form-author label,.wp-block-post-comments .comment-form-comment label,.wp-block-post-comments .comment-form-email label,.wp-block-post-comments .comment-form-url label {
    display: block
}

.wp-block-post-comments .comment-form-comment textarea {
    box-sizing: border-box;
    width: 100%
}

.wp-block-post-comments .reply {
    font-size: .75em;
    margin-bottom: 1.4em
}

.wp-block-post-comments input,.wp-block-post-comments textarea {
    border: 1px solid #949494
}

.wp-block-post-comments-form input[type=submit] {
    border: none;
    box-shadow: none;
    cursor: pointer;
    display: inline-block;
    text-align: center;
    overflow-wrap: break-word
}

.wp-block-post-excerpt__more-link,.wp-block-post-title a {
    display: inline-block
}

.wp-block-preformatted {
    white-space: pre-wrap
}

.wp-block-preformatted.has-background {
    padding: 1.25em 2.375em
}

.wp-block-pullquote {
    margin: 0 0 1em;
    padding: 3em 0;
    text-align: center
}

.wp-block-pullquote.alignleft,.wp-block-pullquote.alignright {
    max-width: 420px
}

.wp-block-pullquote.alignleft p,.wp-block-pullquote.alignright p {
    font-size: 1.25em
}

.wp-block-pullquote p {
    font-size: 1.75em;
    line-height: 1.6
}

.wp-block-pullquote cite,.wp-block-pullquote footer {
    position: relative
}

.wp-block-pullquote .has-text-color a {
    color: inherit
}

.wp-block-pullquote:not(.is-style-solid-color) {
    background: none
}

.wp-block-pullquote.is-style-solid-color {
    border: none
}

.wp-block-pullquote.is-style-solid-color blockquote {
    margin-left: auto;
    margin-right: auto;
    text-align: left;
    max-width: 60%
}

.wp-block-pullquote.is-style-solid-color blockquote p {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 2em
}

.wp-block-pullquote.is-style-solid-color blockquote cite {
    text-transform: none;
    font-style: normal
}

.wp-block-pullquote cite {
    color: inherit
}

.wp-block-post-template,.wp-block-query-loop {
    max-width: 100%;
    list-style: none;
    padding: 0
}

.wp-block-post-template li,.wp-block-query-loop li {
    clear: both
}

.wp-block-post-template.is-flex-container,.wp-block-query-loop.is-flex-container {
    flex-direction: row;
    display: flex;
    flex-wrap: wrap
}

.wp-block-post-template.is-flex-container li,.wp-block-query-loop.is-flex-container li {
    margin: 0 0 1.25em;
    width: 100%
}

@media (min-width: 600px) {
    .wp-block-post-template.is-flex-container li,.wp-block-query-loop.is-flex-container li {
        margin-right:1.25em
    }

    .wp-block-post-template.is-flex-container.is-flex-container.columns-2>li,.wp-block-query-loop.is-flex-container.is-flex-container.columns-2>li {
        width: calc(50% - .625em)
    }

    .wp-block-post-template.is-flex-container.is-flex-container.columns-2>li:nth-child(2n),.wp-block-query-loop.is-flex-container.is-flex-container.columns-2>li:nth-child(2n) {
        margin-right: 0
    }

    .wp-block-post-template.is-flex-container.is-flex-container.columns-3>li,.wp-block-query-loop.is-flex-container.is-flex-container.columns-3>li {
        width: calc(33.33333% - .83333em)
    }

    .wp-block-post-template.is-flex-container.is-flex-container.columns-3>li:nth-child(3n),.wp-block-query-loop.is-flex-container.is-flex-container.columns-3>li:nth-child(3n) {
        margin-right: 0
    }

    .wp-block-post-template.is-flex-container.is-flex-container.columns-4>li,.wp-block-query-loop.is-flex-container.is-flex-container.columns-4>li {
        width: calc(25% - .9375em)
    }

    .wp-block-post-template.is-flex-container.is-flex-container.columns-4>li:nth-child(4n),.wp-block-query-loop.is-flex-container.is-flex-container.columns-4>li:nth-child(4n) {
        margin-right: 0
    }

    .wp-block-post-template.is-flex-container.is-flex-container.columns-5>li,.wp-block-query-loop.is-flex-container.is-flex-container.columns-5>li {
        width: calc(20% - 1em)
    }

    .wp-block-post-template.is-flex-container.is-flex-container.columns-5>li:nth-child(5n),.wp-block-query-loop.is-flex-container.is-flex-container.columns-5>li:nth-child(5n) {
        margin-right: 0
    }

    .wp-block-post-template.is-flex-container.is-flex-container.columns-6>li,.wp-block-query-loop.is-flex-container.is-flex-container.columns-6>li {
        width: calc(16.66667% - 1.04167em)
    }

    .wp-block-post-template.is-flex-container.is-flex-container.columns-6>li:nth-child(6n),.wp-block-query-loop.is-flex-container.is-flex-container.columns-6>li:nth-child(6n) {
        margin-right: 0
    }
}

.wp-block-query-pagination {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap
}

.wp-block-query-pagination>.wp-block-query-pagination-next,.wp-block-query-pagination>.wp-block-query-pagination-numbers,.wp-block-query-pagination>.wp-block-query-pagination-previous {
    display: inline-block;
    margin-right: .5em;
    margin-bottom: .5em
}

.wp-block-query-pagination>.wp-block-query-pagination-next:last-child,.wp-block-query-pagination>.wp-block-query-pagination-numbers:last-child,.wp-block-query-pagination>.wp-block-query-pagination-previous:last-child {
    margin-right: 0
}

.wp-block-quote.is-large,.wp-block-quote.is-style-large {
    margin-bottom: 1em;
    padding: 0 1em
}

.wp-block-quote.is-large p,.wp-block-quote.is-style-large p {
    font-size: 1.5em;
    font-style: italic;
    line-height: 1.6
}

.wp-block-quote.is-large cite,.wp-block-quote.is-large footer,.wp-block-quote.is-style-large cite,.wp-block-quote.is-style-large footer {
    font-size: 1.125em;
    text-align: right
}

.wp-block-rss.wp-block-rss {
    box-sizing: border-box
}

.wp-block-rss.alignleft {
    margin-right: 2em
}

.wp-block-rss.alignright {
    margin-left: 2em
}

.wp-block-rss.is-grid {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    list-style: none
}

.wp-block-rss.is-grid li {
    margin: 0 1em 1em 0;
    width: 100%
}

@media (min-width: 600px) {
    .wp-block-rss.columns-2 li {
        width:calc(50% - 1em)
    }

    .wp-block-rss.columns-3 li {
        width: calc(33.33333% - 1em)
    }

    .wp-block-rss.columns-4 li {
        width: calc(25% - 1em)
    }

    .wp-block-rss.columns-5 li {
        width: calc(20% - 1em)
    }

    .wp-block-rss.columns-6 li {
        width: calc(16.66667% - 1em)
    }
}

.wp-block-rss__item-author,.wp-block-rss__item-publish-date {
    display: block;
    color: #555;
    font-size: .8125em
}

.wp-block-search .wp-block-search__button {
    background: #f7f7f7;
    border: 1px solid #ccc;
    padding: .375em .625em;
    color: #32373c;
    margin-left: .625em;
    word-break: normal
}

.wp-block-search .wp-block-search__button.has-icon {
    line-height: 0
}

.wp-block-search .wp-block-search__button svg {
    min-width: 1.5em;
    min-height: 1.5em
}

.wp-block-search .wp-block-search__inside-wrapper {
    display: flex;
    flex: auto;
    flex-wrap: nowrap;
    max-width: 100%
}

.wp-block-search .wp-block-search__label {
    width: 100%
}

.wp-block-search .wp-block-search__input {
    flex-grow: 1;
    min-width: 3em;
    border: 1px solid #949494
}

.wp-block-search.wp-block-search__button-only .wp-block-search__button {
    margin-left: 0
}

.wp-block-search.wp-block-search__button-inside .wp-block-search__inside-wrapper {
    padding: 4px;
    border: 1px solid #949494
}

.wp-block-search.wp-block-search__button-inside .wp-block-search__inside-wrapper .wp-block-search__input {
    border-radius: 0;
    border: none;
    padding: 0 0 0 .25em
}

.wp-block-search.wp-block-search__button-inside .wp-block-search__inside-wrapper .wp-block-search__input:focus {
    outline: none
}

.wp-block-search.wp-block-search__button-inside .wp-block-search__inside-wrapper .wp-block-search__button {
    padding: .125em .5em
}

.wp-block-search.aligncenter .wp-block-search__inside-wrapper {
    margin: auto
}

.wp-block-separator {
    border-top: 1px solid;
    border-bottom: 1px solid
}

.wp-block-separator.is-style-wide {
    border-bottom-width: 1px
}

.wp-block-separator.is-style-dots {
    background: none!important;
    border: none;
    text-align: center;
    width: none;
    line-height: 1;
    height: auto
}

.wp-block-separator.is-style-dots:before {
    content: "···";
    color: currentColor;
    font-size: 1.5em;
    letter-spacing: 2em;
    padding-left: 2em;
    font-family: serif
}

.wp-block-site-logo {
    line-height: 0
}

.wp-block-site-logo a {
    display: inline-block
}

.wp-block-site-logo.is-default-size img {
    width: 120px;
    height: auto
}

.wp-block-site-logo .aligncenter {
    display: table
}

.wp-block-site-logo.is-style-rounded img {
    border-radius: 9999px
}

.wp-block-social-links {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    padding-right: 0;
    text-indent: 0;
    margin-left: 0
}

.wp-block-social-links .wp-social-link a,.wp-block-social-links .wp-social-link a:hover {
    text-decoration: none;
    border-bottom: 0;
    box-shadow: none
}

.wp-block-social-links .wp-social-link.wp-social-link.wp-social-link {
    margin: 4px 8px 4px 0
}

.wp-block-social-links .wp-social-link a {
    padding: .25em
}

.wp-block-social-links .wp-social-link svg {
    width: 1em;
    height: 1em
}

.wp-block-social-links.has-small-icon-size {
    font-size: 16px
}

.wp-block-social-links,.wp-block-social-links.has-normal-icon-size {
    font-size: 24px
}

.wp-block-social-links.has-large-icon-size {
    font-size: 36px
}

.wp-block-social-links.has-huge-icon-size {
    font-size: 48px
}

.wp-block-social-links.aligncenter {
    justify-content: center;
    display: flex
}

.wp-block-social-links.alignright {
    justify-content: flex-end
}

.wp-block-social-link {
    display: block;
    border-radius: 9999px;
    transition: transform .1s ease;
    height: auto
}

@media (prefers-reduced-motion:reduce) {
    .wp-block-social-link {
        transition-duration: 0s;
        transition-delay: 0s
    }
}

.wp-block-social-link a {
    display: block;
    line-height: 0;
    transition: transform .1s ease
}

.wp-block-social-link:hover {
    transform: scale(1.1)
}

.wp-block-social-links .wp-block-social-link .wp-block-social-link-anchor,.wp-block-social-links .wp-block-social-link .wp-block-social-link-anchor:active,.wp-block-social-links .wp-block-social-link .wp-block-social-link-anchor:hover,.wp-block-social-links .wp-block-social-link .wp-block-social-link-anchor:visited,.wp-block-social-links .wp-block-social-link .wp-block-social-link-anchor svg {
    color: currentColor;
    fill: currentColor
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link {
    background-color: #f0f0f0;
    color: #444
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-amazon {
    background-color: #f90;
    color: #fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-bandcamp {
    background-color: #1ea0c3;
    color: #fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-behance {
    background-color: #0757fe;
    color: #fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-codepen {
    background-color: #1e1f26;
    color: #fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-deviantart {
    background-color: #02e49b;
    color: #fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-dribbble {
    background-color: #e94c89;
    color: #fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-dropbox {
    background-color: #4280ff;
    color: #fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-etsy {
    background-color: #f45800;
    color: #fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-facebook {
    background-color: #1778f2;
    color: #fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-fivehundredpx {
    background-color: #000;
    color: #fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-flickr {
    background-color: #0461dd;
    color: #fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-foursquare {
    background-color: #e65678;
    color: #fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-github {
    background-color: #24292d;
    color: #fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-goodreads {
    background-color: #eceadd;
    color: #382110
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-google {
    background-color: #ea4434;
    color: #fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-instagram {
    background-color: #f00075;
    color: #fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-lastfm {
    background-color: #e21b24;
    color: #fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-linkedin {
    background-color: #0d66c2;
    color: #fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-mastodon {
    background-color: #3288d4;
    color: #fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-medium {
    background-color: #02ab6c;
    color: #fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-meetup {
    background-color: #f6405f;
    color: #fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-patreon {
    background-color: #ff424d;
    color: #fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-pinterest {
    background-color: #e60122;
    color: #fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-pocket {
    background-color: #ef4155;
    color: #fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-reddit {
    background-color: #fe4500;
    color: #fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-skype {
    background-color: #0478d7;
    color: #fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-snapchat {
    background-color: #fefc00;
    color: #fff;
    stroke: #000
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-soundcloud {
    background-color: #ff5600;
    color: #fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-spotify {
    background-color: #1bd760;
    color: #fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-telegram {
    background-color: #2aabee;
    color: #fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-tiktok {
    background-color: #000;
    color: #fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-tumblr {
    background-color: #011835;
    color: #fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-twitch {
    background-color: #6440a4;
    color: #fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-twitter {
    background-color: #1da1f2;
    color: #fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-vimeo {
    background-color: #1eb7ea;
    color: #fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-vk {
    background-color: #4680c2;
    color: #fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-wordpress {
    background-color: #3499cd;
    color: #fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-yelp {
    background-color: #d32422;
    color: #fff
}

.wp-block-social-links:not(.is-style-logos-only) .wp-social-link-youtube {
    background-color: red;
    color: #fff
}

.wp-block-social-links.is-style-logos-only .wp-social-link {
    background: none;
    padding: 4px
}

.wp-block-social-links.is-style-logos-only .wp-social-link-amazon {
    color: #f90
}

.wp-block-social-links.is-style-logos-only .wp-social-link-bandcamp {
    color: #1ea0c3
}

.wp-block-social-links.is-style-logos-only .wp-social-link-behance {
    color: #0757fe
}

.wp-block-social-links.is-style-logos-only .wp-social-link-codepen {
    color: #1e1f26
}

.wp-block-social-links.is-style-logos-only .wp-social-link-deviantart {
    color: #02e49b
}

.wp-block-social-links.is-style-logos-only .wp-social-link-dribbble {
    color: #e94c89
}

.wp-block-social-links.is-style-logos-only .wp-social-link-dropbox {
    color: #4280ff
}

.wp-block-social-links.is-style-logos-only .wp-social-link-etsy {
    color: #f45800
}

.wp-block-social-links.is-style-logos-only .wp-social-link-facebook {
    color: #1778f2
}

.wp-block-social-links.is-style-logos-only .wp-social-link-fivehundredpx {
    color: #000
}

.wp-block-social-links.is-style-logos-only .wp-social-link-flickr {
    color: #0461dd
}

.wp-block-social-links.is-style-logos-only .wp-social-link-foursquare {
    color: #e65678
}

.wp-block-social-links.is-style-logos-only .wp-social-link-github {
    color: #24292d
}

.wp-block-social-links.is-style-logos-only .wp-social-link-goodreads {
    color: #382110
}

.wp-block-social-links.is-style-logos-only .wp-social-link-google {
    color: #ea4434
}

.wp-block-social-links.is-style-logos-only .wp-social-link-instagram {
    color: #f00075
}

.wp-block-social-links.is-style-logos-only .wp-social-link-lastfm {
    color: #e21b24
}

.wp-block-social-links.is-style-logos-only .wp-social-link-linkedin {
    color: #0d66c2
}

.wp-block-social-links.is-style-logos-only .wp-social-link-mastodon {
    color: #3288d4
}

.wp-block-social-links.is-style-logos-only .wp-social-link-medium {
    color: #02ab6c
}

.wp-block-social-links.is-style-logos-only .wp-social-link-meetup {
    color: #f6405f
}

.wp-block-social-links.is-style-logos-only .wp-social-link-patreon {
    color: #ff424d
}

.wp-block-social-links.is-style-logos-only .wp-social-link-pinterest {
    color: #e60122
}

.wp-block-social-links.is-style-logos-only .wp-social-link-pocket {
    color: #ef4155
}

.wp-block-social-links.is-style-logos-only .wp-social-link-reddit {
    color: #fe4500
}

.wp-block-social-links.is-style-logos-only .wp-social-link-skype {
    color: #0478d7
}

.wp-block-social-links.is-style-logos-only .wp-social-link-snapchat {
    color: #fff;
    stroke: #000
}

.wp-block-social-links.is-style-logos-only .wp-social-link-soundcloud {
    color: #ff5600
}

.wp-block-social-links.is-style-logos-only .wp-social-link-spotify {
    color: #1bd760
}

.wp-block-social-links.is-style-logos-only .wp-social-link-telegram {
    color: #2aabee
}

.wp-block-social-links.is-style-logos-only .wp-social-link-tiktok {
    color: #000
}

.wp-block-social-links.is-style-logos-only .wp-social-link-tumblr {
    color: #011835
}

.wp-block-social-links.is-style-logos-only .wp-social-link-twitch {
    color: #6440a4
}

.wp-block-social-links.is-style-logos-only .wp-social-link-twitter {
    color: #1da1f2
}

.wp-block-social-links.is-style-logos-only .wp-social-link-vimeo {
    color: #1eb7ea
}

.wp-block-social-links.is-style-logos-only .wp-social-link-vk {
    color: #4680c2
}

.wp-block-social-links.is-style-logos-only .wp-social-link-wordpress {
    color: #3499cd
}

.wp-block-social-links.is-style-logos-only .wp-social-link-yelp {
    color: #d32422
}

.wp-block-social-links.is-style-logos-only .wp-social-link-youtube {
    color: red
}

.wp-block-social-links.is-style-pill-shape .wp-social-link {
    width: auto
}

.wp-block-social-links.is-style-pill-shape .wp-social-link a {
    padding-left: .66667em;
    padding-right: .66667em
}

.wp-block-spacer {
    clear: both
}

.wp-block-tag-cloud.aligncenter {
    text-align: center
}

.wp-block-tag-cloud.alignfull {
    padding-left: 1em;
    padding-right: 1em
}

.wp-block-table {
    margin: 0 0 1em;
    overflow-x: auto
}

.wp-block-table table {
    border-collapse: collapse;
    width: 100%
}

.wp-block-table .has-fixed-layout {
    table-layout: fixed;
    width: 100%
}

.wp-block-table .has-fixed-layout td,.wp-block-table .has-fixed-layout th {
    word-break: break-word
}

.wp-block-table.aligncenter,.wp-block-table.alignleft,.wp-block-table.alignright {
    display: table;
    width: auto
}

.wp-block-table.aligncenter td,.wp-block-table.aligncenter th,.wp-block-table.alignleft td,.wp-block-table.alignleft th,.wp-block-table.alignright td,.wp-block-table.alignright th {
    word-break: break-word
}

.wp-block-table .has-subtle-light-gray-background-color {
    background-color: #f3f4f5
}

.wp-block-table .has-subtle-pale-green-background-color {
    background-color: #e9fbe5
}

.wp-block-table .has-subtle-pale-blue-background-color {
    background-color: #e7f5fe
}

.wp-block-table .has-subtle-pale-pink-background-color {
    background-color: #fcf0ef
}

.wp-block-table.is-style-stripes {
    border-spacing: 0;
    border-collapse: inherit;
    background-color: transparent;
    border-bottom: 1px solid #f0f0f0
}

.wp-block-table.is-style-stripes tbody tr:nth-child(odd) {
    background-color: #f0f0f0
}

.wp-block-table.is-style-stripes.has-subtle-light-gray-background-color tbody tr:nth-child(odd) {
    background-color: #f3f4f5
}

.wp-block-table.is-style-stripes.has-subtle-pale-green-background-color tbody tr:nth-child(odd) {
    background-color: #e9fbe5
}

.wp-block-table.is-style-stripes.has-subtle-pale-blue-background-color tbody tr:nth-child(odd) {
    background-color: #e7f5fe
}

.wp-block-table.is-style-stripes.has-subtle-pale-pink-background-color tbody tr:nth-child(odd) {
    background-color: #fcf0ef
}

.wp-block-table.is-style-stripes td,.wp-block-table.is-style-stripes th {
    border-color: transparent
}

.wp-block-table .has-border-color>*,.wp-block-table .has-border-color td,.wp-block-table .has-border-color th,.wp-block-table .has-border-color tr {
    border-color: inherit
}

.wp-block-table table[style*=border-style]>*,.wp-block-table table[style*=border-style] td,.wp-block-table table[style*=border-style] th,.wp-block-table table[style*=border-style] tr {
    border-style: inherit
}

.wp-block-table table[style*=border-width]>*,.wp-block-table table[style*=border-width] td,.wp-block-table table[style*=border-width] th,.wp-block-table table[style*=border-width] tr {
    border-width: inherit
}

.wp-block-text-columns,.wp-block-text-columns.aligncenter {
    display: flex
}

.wp-block-text-columns .wp-block-column {
    margin: 0 1em;
    padding: 0
}

.wp-block-text-columns .wp-block-column:first-child {
    margin-left: 0
}

.wp-block-text-columns .wp-block-column:last-child {
    margin-right: 0
}

.wp-block-text-columns.columns-2 .wp-block-column {
    width: 50%
}

.wp-block-text-columns.columns-3 .wp-block-column {
    width: 33.33333%
}

.wp-block-text-columns.columns-4 .wp-block-column {
    width: 25%
}

pre.wp-block-verse {
    font-family: inherit;
    overflow: auto;
    white-space: pre-wrap
}

.wp-block-video {
    margin: 0 0 1em
}

.wp-block-video video {
    width: 100%
}

@supports (position: sticky) {
    .wp-block-video [poster] {
        -o-object-fit:cover;
        object-fit: cover
    }
}

.wp-block-video.aligncenter {
    text-align: center
}

.wp-block-video figcaption {
    margin-top: .5em;
    margin-bottom: 1em
}

.wp-block-post-featured-image {
    margin-left: 0;
    margin-right: 0
}

.wp-block-post-featured-image a {
    display: inline-block
}

.wp-block-post-featured-image img {
    max-width: 100%;
    height: auto
}

.wp-block-post-featured-image.alignfull img,.wp-block-post-featured-image.alignwide img {
    width: 100%
}

:root .has-pale-pink-background-color {
    background-color: #f78da7
}

:root .has-vivid-red-background-color {
    background-color: #cf2e2e
}

:root .has-luminous-vivid-orange-background-color {
    background-color: #ff6900
}

:root .has-luminous-vivid-amber-background-color {
    background-color: #fcb900
}

:root .has-light-green-cyan-background-color {
    background-color: #7bdcb5
}

:root .has-vivid-green-cyan-background-color {
    background-color: #00d084
}

:root .has-pale-cyan-blue-background-color {
    background-color: #8ed1fc
}

:root .has-vivid-cyan-blue-background-color {
    background-color: #0693e3
}

:root .has-vivid-purple-background-color {
    background-color: #9b51e0
}

:root .has-white-background-color {
    background-color: #fff
}

:root .has-very-light-gray-background-color {
    background-color: #eee
}

:root .has-cyan-bluish-gray-background-color {
    background-color: #abb8c3
}

:root .has-very-dark-gray-background-color {
    background-color: #313131
}

:root .has-black-background-color {
    background-color: #000
}

:root .has-pale-pink-color {
    color: #f78da7
}

:root .has-vivid-red-color {
    color: #cf2e2e
}

:root .has-luminous-vivid-orange-color {
    color: #ff6900
}

:root .has-luminous-vivid-amber-color {
    color: #fcb900
}

:root .has-light-green-cyan-color {
    color: #7bdcb5
}

:root .has-vivid-green-cyan-color {
    color: #00d084
}

:root .has-pale-cyan-blue-color {
    color: #8ed1fc
}

:root .has-vivid-cyan-blue-color {
    color: #0693e3
}

:root .has-vivid-purple-color {
    color: #9b51e0
}

:root .has-white-color {
    color: #fff
}

:root .has-very-light-gray-color {
    color: #eee
}

:root .has-cyan-bluish-gray-color {
    color: #abb8c3
}

:root .has-very-dark-gray-color {
    color: #313131
}

:root .has-black-color {
    color: #000
}

:root .has-vivid-cyan-blue-to-vivid-purple-gradient-background {
    background: linear-gradient(135deg,#0693e3,#9b51e0)
}

:root .has-vivid-green-cyan-to-vivid-cyan-blue-gradient-background {
    background: linear-gradient(135deg,#00d084,#0693e3)
}

:root .has-light-green-cyan-to-vivid-green-cyan-gradient-background {
    background: linear-gradient(135deg,#7adcb4,#00d082)
}

:root .has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background {
    background: linear-gradient(135deg,#fcb900,#ff6900)
}

:root .has-luminous-vivid-orange-to-vivid-red-gradient-background {
    background: linear-gradient(135deg,#ff6900,#cf2e2e)
}

:root .has-very-light-gray-to-cyan-bluish-gray-gradient-background {
    background: linear-gradient(135deg,#eee,#a9b8c3)
}

:root .has-cool-to-warm-spectrum-gradient-background {
    background: linear-gradient(135deg,#4aeadc,#9778d1 20%,#cf2aba 40%,#ee2c82 60%,#fb6962 80%,#fef84c)
}

:root .has-blush-light-purple-gradient-background {
    background: linear-gradient(135deg,#ffceec,#9896f0)
}

:root .has-blush-bordeaux-gradient-background {
    background: linear-gradient(135deg,#fecda5,#fe2d2d 50%,#6b003e)
}

:root .has-purple-crush-gradient-background {
    background: linear-gradient(135deg,#34e2e4,#4721fb 50%,#ab1dfe)
}

:root .has-luminous-dusk-gradient-background {
    background: linear-gradient(135deg,#ffcb70,#c751c0 50%,#4158d0)
}

:root .has-hazy-dawn-gradient-background {
    background: linear-gradient(135deg,#faaca8,#dad0ec)
}

:root .has-pale-ocean-gradient-background {
    background: linear-gradient(135deg,#fff5cb,#b6e3d4 50%,#33a7b5)
}

:root .has-electric-grass-gradient-background {
    background: linear-gradient(135deg,#caf880,#71ce7e)
}

:root .has-subdued-olive-gradient-background {
    background: linear-gradient(135deg,#fafae1,#67a671)
}

:root .has-atomic-cream-gradient-background {
    background: linear-gradient(135deg,#fdd79a,#004a59)
}

:root .has-nightshade-gradient-background {
    background: linear-gradient(135deg,#330968,#31cdcf)
}

:root .has-midnight-gradient-background {
    background: linear-gradient(135deg,#020381,#2874fc)
}

.has-small-font-size {
    font-size: .8125em
}

.has-normal-font-size,.has-regular-font-size {
    font-size: 1em
}

.has-medium-font-size {
    font-size: 1.25em
}

.has-large-font-size {
    font-size: 2.25em
}

.has-huge-font-size,.has-larger-font-size {
    font-size: 2.625em
}

.has-text-align-center {
    text-align: center
}

.has-text-align-left {
    text-align: left
}

.has-text-align-right {
    text-align: right
}

#end-resizable-editor-section {
    display: none
}

.aligncenter {
    clear: both
}

.items-justified-left {
    justify-content: flex-start
}

.items-justified-center {
    justify-content: center
}

.items-justified-right {
    justify-content: flex-end
}

.items-justified-space-between {
    justify-content: space-between
}

.screen-reader-text {
    border: 0;
    clip: rect(1px,1px,1px,1px);
    -webkit-clip-path: inset(50%);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    word-wrap: normal!important
}

.screen-reader-text:focus {
    background-color: #ddd;
    clip: auto!important;
    -webkit-clip-path: none;
    clip-path: none;
    color: #444;
    display: block;
    font-size: 1em;
    height: auto;
    left: 5px;
    line-height: normal;
    padding: 15px 23px 14px;
    text-decoration: none;
    top: 5px;
    width: auto;
    z-index: 100000
}
.ct-section {
width:100%;
background-size:cover;
background-repeat:repeat;
}
.ct-section>.ct-section-inner-wrap {
display:flex;
flex-direction:column;
align-items:flex-start;
}
.ct-div-block {
display:flex;
flex-wrap:nowrap;
flex-direction:column;
align-items:flex-start;
}
.ct-new-columns {
display:flex;
width:100%;
flex-direction:row;
align-items:stretch;
justify-content:center;
flex-wrap:wrap;
}
.ct-link-text {
display:inline-block;
}
.ct-link {
display:flex;
flex-wrap:wrap;
text-align:center;
text-decoration:none;
flex-direction:column;
align-items:center;
justify-content:center;
}
.ct-link-button {
display:inline-block;
text-align:center;
text-decoration:none;
}
.ct-link-button {
background-color: #1e73be;
border: 1px solid #1e73be;
color: #ffffff;
padding: 10px 16px;
}
.ct-image {
max-width:100%;
}
.ct-fancy-icon>svg {
width:55px;height:55px;}
.ct-inner-content {
width:100%;
}
.ct-slide {
display:flex;
flex-wrap:wrap;
text-align:center;
flex-direction:column;
align-items:center;
justify-content:center;
}
.ct-nestable-shortcode {
display:flex;
flex-wrap:nowrap;
flex-direction:column;
align-items:flex-start;
}
.oxy-comments {
width:100%;
text-align:left;
}
.oxy-comment-form {
width:100%;
}
.oxy-login-form {
width:100%;
}
.oxy-search-form {
width:100%;
}
.oxy-tabs-contents {
display:flex;
width:100%;
flex-wrap:nowrap;
flex-direction:column;
align-items:flex-start;
}
.oxy-tab {
display:flex;
flex-wrap:nowrap;
flex-direction:column;
align-items:flex-start;
}
.oxy-tab-content {
display:flex;
width:100%;
flex-wrap:nowrap;
flex-direction:column;
align-items:flex-start;
}
.oxy-testimonial {
width:100%;
}
.oxy-icon-box {
width:100%;
}
.oxy-pricing-box {
width:100%;
}
.oxy-posts-grid {
width:100%;
}
.oxy-gallery {
width:100%;
}
.ct-slider {
width:100%;
}
.oxy-tabs {
display:flex;
flex-wrap:nowrap;
flex-direction:row;
align-items:stretch;
}
.ct-modal {
flex-direction:column;
align-items:flex-start;
}
.ct-span {
display:inline-block;
text-decoration:inherit;
}
.ct-widget {
width:100%;
}
.oxy-dynamic-list {
width:100%;
}
@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
            .ct-div-block,
            .oxy-post-content,
            .ct-text-block,
            .ct-headline,
            .oxy-rich-text,
            .ct-link-text { max-width: 100%; }
            img { flex-shrink: 0; }
            body * { min-height: 1px; }
        }            .oxy-testimonial {
                flex-direction: row;
                align-items: center;
            }
                        .oxy-testimonial .oxy-testimonial-photo-wrap {
                order: 1;
            }
            
                        .oxy-testimonial .oxy-testimonial-photo {
                width: 125px;                height: 125px;                margin-right: 20px;
            }
            
                        .oxy-testimonial .oxy-testimonial-photo-wrap, 
            .oxy-testimonial .oxy-testimonial-author-wrap, 
            .oxy-testimonial .oxy-testimonial-content-wrap {
                align-items: flex-start;                text-align: left;            }
            
                                                            .oxy-testimonial .oxy-testimonial-text {
                margin-bottom:8px;font-size: 21px;
line-height: 1.4;
-webkit-font-smoothing: subpixel-antialiased;
            }
            
                                    .oxy-testimonial .oxy-testimonial-author {
                font-size: 18px;
-webkit-font-smoothing: subpixel-antialiased;
            }
                            

                                                .oxy-testimonial .oxy-testimonial-author-info {
                font-size: 12px;
-webkit-font-smoothing: subpixel-antialiased;
            }
            
             
            
                        .oxy-icon-box {
                text-align: left;                flex-direction: column;            }
            
                        .oxy-icon-box .oxy-icon-box-icon {
                margin-bottom: 12px;
                align-self: flex-start;            }
            
                                                                        .oxy-icon-box .oxy-icon-box-heading {
                font-size: 21px;
margin-bottom: 12px;            }
            
                                                                                    .oxy-icon-box .oxy-icon-box-text {
                font-size: 16px;
margin-bottom: 12px;align-self: flex-start;            }
            
                        .oxy-icon-box .oxy-icon-box-link {
                margin-top: 20px;                            }
            
            
            /* GLOBALS */

                                                            .oxy-pricing-box .oxy-pricing-box-section {
                padding-top: 20px;
padding-left: 20px;
padding-right: 20px;
padding-bottom: 20px;
alignment: center;
text-align: center;            }
                        
                        .oxy-pricing-box .oxy-pricing-box-section.oxy-pricing-box-price {
                justify-content: center;            }
            
            /* IMAGE */
                                                                                    .oxy-pricing-box .oxy-pricing-box-section.oxy-pricing-box-graphic {
                justify-content: center;            }
            
            /* TITLE */
                                                            
                                    .oxy-pricing-box .oxy-pricing-box-title-title {
                font-size: 48px;
            }
            
                                    .oxy-pricing-box .oxy-pricing-box-title-subtitle {
                font-size: 24px;
            }
            

            /* PRICE */
                                                .oxy-pricing-box .oxy-pricing-box-section.oxy-pricing-box-price {
                                                flex-direction: row;                                            }
            
                                    .oxy-pricing-box .oxy-pricing-box-currency {
                font-size: 28px;
            }
            
                                    .oxy-pricing-box .oxy-pricing-box-amount-main {
                font-size: 80px;
line-height: 0.7;
            }
            
                                    .oxy-pricing-box .oxy-pricing-box-amount-decimal {
                font-size: 13px;
            }
                        
                                    .oxy-pricing-box .oxy-pricing-box-term {
                font-size: 16px;
            }
            
                                    .oxy-pricing-box .oxy-pricing-box-sale-price {
                font-size: 12px;
color: rgba(0,0,0,0.5);
                margin-bottom: 20px;            }
            
            /* CONTENT */

                                                                        .oxy-pricing-box .oxy-pricing-box-section.oxy-pricing-box-content {
                font-size: 16px;
color: rgba(0,0,0,0.5);
            }
            
            /* CTA */

                                                                        .oxy-pricing-box .oxy-pricing-box-section.oxy-pricing-box-cta {
                justify-content: center;            }
            
        
                                .oxy-progress-bar .oxy-progress-bar-background {
            background-color: #000000;            background-image: linear-gradient(-45deg,rgba(255,255,255,.12) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.12) 50%,rgba(255,255,255,.12) 75%,transparent 75%,transparent);            animation: none 0s paused;        }
                
                .oxy-progress-bar .oxy-progress-bar-progress-wrap {
            width: 85%;        }
        
                                                        .oxy-progress-bar .oxy-progress-bar-progress {
            background-color: #66aaff;padding: 40px;animation: none 0s paused, none 0s paused;            background-image: linear-gradient(-45deg,rgba(255,255,255,.12) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.12) 50%,rgba(255,255,255,.12) 75%,transparent 75%,transparent);        
        }
                
                        .oxy-progress-bar .oxy-progress-bar-overlay-text {
            font-size: 30px;
font-weight: 900;
-webkit-font-smoothing: subpixel-antialiased;
        }
        
                        .oxy-progress-bar .oxy-progress-bar-overlay-percent {
            font-size: 12px;
        }
        
        .ct-slider .unslider-nav ol li {border-color: #ffffff; }.ct-slider .unslider-nav ol li.unslider-active {background-color: #ffffff; }.ct-slider .ct-slide {
                padding: 0px;			}
        
                        .oxy-superbox .oxy-superbox-secondary, 
            .oxy-superbox .oxy-superbox-primary {
                transition-duration: 0.5s;            }
            
            
            
            
            
        
        
        
        .oxy-pro-menu {
menu_dropdown_animation:fade-up;
}
.oxy-pro-menu .oxy-pro-menu-list .menu-item a{
padding-top:px;
padding-left:px;
padding-right:px;
padding-bottom:px;
}

.oxy-pro-menu .oxy-pro-menu-list > .menu-item{
margin-top:px;
margin-left:px;
margin-right:px;
margin-bottom:px;
}

.oxy-pro-menu .oxy-pro-menu-container:not(.oxy-pro-menu-open-container):not(.oxy-pro-menu-off-canvas-container) .sub-menu{
box-shadow:px px px px ;}

.oxy-pro-menu .oxy-pro-menu-show-dropdown .oxy-pro-menu-list .menu-item-has-children > a svg{
margin-top:px;
margin-left:px;
margin-right:px;
margin-bottom:px;
transition-duration:0.4s;
}

.oxy-pro-menu .oxy-pro-menu-show-dropdown .oxy-pro-menu-list .menu-item-has-children > a div{
margin-left:0px;
}

.oxy-pro-menu .oxy-pro-menu-container:not(.oxy-pro-menu-open-container):not(.oxy-pro-menu-off-canvas-container) .sub-menu .menu-item a{
padding-top:px;
padding-left:px;
padding-right:px;
padding-bottom:px;
}

.oxy-pro-menu .oxy-pro-menu-mobile-open-icon svg{
width:30px;
height:30px;
}

.oxy-pro-menu .oxy-pro-menu-mobile-open-icon{
padding-top:15px;
padding-right:15px;
padding-bottom:15px;
padding-left:15px;
}

.oxy-pro-menu .oxy-pro-menu-mobile-open-icon, .oxy-pro-menu .oxy-pro-menu-mobile-open-icon svg{
transition-duration:0.4s;
}

.oxy-pro-menu .oxy-pro-menu-mobile-close-icon{
top:20px;
left:20px;
}

.oxy-pro-menu .oxy-pro-menu-mobile-close-icon svg{
width:24px;
height:24px;
}

.oxy-pro-menu .oxy-pro-menu-mobile-close-icon, .oxy-pro-menu .oxy-pro-menu-mobile-close-icon svg{
transition-duration:0.4s;
}

.oxy-pro-menu .oxy-pro-menu-off-canvas-container > div:first-child, .oxy-pro-menu .oxy-pro-menu-open-container > div:first-child{
oxy-pro-menu_slug_oxypromenuoffcanvascontaineroxypromenulistmenuitemoxypromenuopencontaineroxypromenulistmenuitem_min_width:px;
}

.oxy-pro-menu .oxy-pro-menu-off-canvas-container{
oxy-pro-menu_slug_oxypromenuoffcanvascontainer_width:px;
}

.oxy-pro-menu .oxy-pro-menu-container.oxy-pro-menu-off-canvas-container, .oxy-pro-menu .oxy-pro-menu-container.oxy-pro-menu-open-container{
background-color:#ffffff;
}

.oxy-pro-menu .oxy-pro-menu-container.oxy-pro-menu-open-container .menu-item a, .oxy-pro-menu .oxy-pro-menu-container.oxy-pro-menu-off-canvas-container .menu-item a{
padding-top:px;
padding-left:px;
padding-right:px;
padding-bottom:px;
}

.oxy-pro-menu .oxy-pro-menu-container.oxy-pro-menu-open-container, .oxy-pro-menu .oxy-pro-menu-container.oxy-pro-menu-off-canvas-container{
padding-top:px;
padding-left:px;
padding-right:px;
padding-bottom:px;
}

.oxy-pro-menu .oxy-pro-menu-off-canvas-container, .oxy-pro-menu .oxy-pro-menu-open-container{
background-color:;
background-image:url();
overlay-color:;
background-size:;
background-repeat:;
background-attachment:;
background-blend-mode:;
background-size-width:px;
background-size-height:px;
background-position:px px;
}

.oxy-pro-menu .oxy-pro-menu-off-canvas-container .oxy-pro-menu-list .menu-item-has-children > a svg, .oxy-pro-menu .oxy-pro-menu-open-container .oxy-pro-menu-list .menu-item-has-children > a svg{
font-size:24px;
}

.oxy-pro-menu .oxy-pro-menu-dropdown-links-toggle.oxy-pro-menu-open-container .menu-item-has-children ul, .oxy-pro-menu .oxy-pro-menu-dropdown-links-toggle.oxy-pro-menu-off-canvas-container .menu-item-has-children ul{
background-color:rgba(0,0,0,0.2);
border-top-style:solid;
}

.oxy-pro-menu .oxy-pro-menu-container:not(.oxy-pro-menu-open-container):not(.oxy-pro-menu-off-canvas-container) .oxy-pro-menu-list{
                    flex-direction: row;
               }
.oxy-pro-menu .oxy-pro-menu-container .menu-item a{
                    text-align: left;
                    justify-content: flex-start;
                }
.oxy-pro-menu .oxy-pro-menu-container.oxy-pro-menu-open-container .menu-item, .oxy-pro-menu .oxy-pro-menu-container.oxy-pro-menu-off-canvas-container .menu-item{
                    align-items: flex-start;
                }

            .oxy-pro-menu .oxy-pro-menu-off-canvas-container{
                    top: 0;
                    bottom: 0;
                    right: auto;
                    left: 0;
               }
.oxy-pro-menu .oxy-pro-menu-container.oxy-pro-menu-open-container .oxy-pro-menu-list .menu-item a, .oxy-pro-menu .oxy-pro-menu-container.oxy-pro-menu-off-canvas-container .oxy-pro-menu-list .menu-item a{
                    text-align: left;
                    justify-content: flex-start;
                }

            
            .oxy-shape-divider {
                width: 0px;
                height: 0px;
                
            }
            
            .oxy_shape_divider svg {
                width: 100%;
            }
            .ct-section-inner-wrap, .oxy-header-container{
  max-width: 1120px;
}
body {font-family: 'Maven Pro';}body {line-height: 1.6;font-size: 16px;font-weight: 400;color: #404040;}.oxy-nav-menu-hamburger-line {background-color: #404040;}h1, h2, h3, h4, h5, h6 {font-family: 'Raleway';font-size: 36px;font-weight: 700;line-height: ;color: #404040;}h2, h3, h4, h5, h6{line-height: ;}h3, h4, h5, h6{line-height: ;}h4, h5, h6{line-height: ;}h5, h6{line-height: ;}h6{line-height: ;}a {color: #07adb7;text-decoration: none;}a:hover {color: #2a445a;text-decoration: none;}.ct-link-text {text-decoration: ;}.ct-section-inner-wrap {
padding-top: 75px;
padding-right: 20px;
padding-bottom: 75px;
padding-left: 20px;
}.ct-new-columns > .ct-div-block {
padding-top: 20px;
padding-right: 20px;
padding-bottom: 20px;
padding-left: 20px;
}.oxy-header-container {
padding-right: 20px;
padding-left: 20px;
}@media (max-width: 992px) {
                .ct-columns-inner-wrap {
                    display: block !important;
                }
                .ct-columns-inner-wrap:after {
                    display: table;
                    clear: both;
                    content: "";
                }
                .ct-column {
                    width: 100% !important;
                    margin: 0 !important;
                }
                .ct-columns-inner-wrap {
                    margin: 0 !important;
                }
            }
.oxel_horizontal_divider {
 margin-top:16px;
 margin-bottom:16px;
 width:100%;
}
.oxel_horizontal_divider:not(.ct-section):not(.oxy-easy-posts),
.oxel_horizontal_divider.oxy-easy-posts .oxy-posts,
.oxel_horizontal_divider.ct-section .ct-section-inner-wrap{
flex-direction:unset;
}
.oxel_horizontal_divider__line {
 height:2px;
 background-color:#98a1a8;
}
.oxel_horizontal_divider__icon {
color: #98a1a8;}.oxel_horizontal_divider__icon 
>svg {width: 16px;height: 16px;}.oxel_horizontal_divider__icon {
flex-shrink: 0;
}
.oxel_horizontal_divider__icon:not(.ct-section):not(.oxy-easy-posts),
.oxel_horizontal_divider__icon.oxy-easy-posts .oxy-posts,
.oxel_horizontal_divider__icon.ct-section .ct-section-inner-wrap{
display:flex;
}
.oxel_icon_button__container:hover{
 background-color:#cfd3d7;
}
.oxel_icon_button__container {
 background-color:#ffffff;
 padding-top:8px;
 padding-right:8px;
 padding-bottom:8px;
 transition-duration:0.3s;
 border-radius:10px;
 padding-left:8px;
}
.oxel_icon_button__container:not(.ct-section):not(.oxy-easy-posts),
.oxel_icon_button__container.oxy-easy-posts .oxy-posts,
.oxel_icon_button__container.ct-section .ct-section-inner-wrap{
display:flex;
flex-direction:row;
align-items:center;
}
.oxel_icon_button_text {
 color:#000000;
}
.oxel_icon_button_icon {
color: #2a445a;}.oxel_icon_button_icon 
>svg {width: 18px;height: 18px;}.oxel_icon_button_icon {
 margin-right:8px;
}
.oxel_iconlist {
}
.oxel_iconlist__row {
 padding-top:8px;
 padding-left:8px;
 padding-right:8px;
 padding-bottom:8px;
 width:100%;
 margin-top:0px;
}
.oxel_iconlist__row:not(.ct-section):not(.oxy-easy-posts),
.oxel_iconlist__row.oxy-easy-posts .oxy-posts,
.oxel_iconlist__row.ct-section .ct-section-inner-wrap{
display:flex;
flex-direction:row;
align-items:center;
}
.oxel_iconlist__row__icon {
color: #7f8b93;}.oxel_iconlist__row__icon 
>svg {width: 18px;height: 18px;}.oxel_iconlist__row__icon {
 margin-left:32px;
 margin-right:32px;
}
.oxel_iconlist__row__label {
}
.oxel_iconlist__row--dark {
 background-color:#eceeef;
}
.hosting-heading-one {
 font-family:'Raleway';
 color:#2a445a;
 font-size:64px;
 font-weight:700;
 line-height:1.1;
}
@media (max-width: 767px) {
.hosting-heading-one {
 font-size:48px;
}
}

.oxy-stock-content-styles {
}
.hosting-other-single {
}
.hosting-logo:hover{
}
.hosting-logo {
 transition-duration:0.2s;
 transition-timing-function:ease;
 transition-property:all;
}
.hosting-simple-button:hover{
transform:scale(1.05,1.05);}
.hosting-simple-button {
background-color :transparent;
border: 1px solid transparent;
color: #ffffff;
padding: 12px 19.2px;
}.hosting-simple-button {
 font-family:'Maven Pro';
 padding-left:32px;
 padding-right:32px;
 font-size:16px;
 font-weight:700;
 transition-duration:0.2s;
 transition-timing-function:ease;
 transition-property:all;
}
.hosting-white-outline-button:hover{
transform:scale(1.05,1.05);}
.hosting-white-outline-button {
background-color: transparent;
border: 1px solid #ffffff;
color: #ffffff;
padding: 11px 18.2px;
}.hosting-white-outline-button {
 font-family:'Maven Pro';
 font-size:16px;
 font-weight:700;
 padding-left:32px;
 padding-right:32px;
 border-radius:5px;
 border-top-style:solid;
 border-right-style:solid;
 border-bottom-style:solid;
 border-left-style:solid;
 border-top-width:2px;
 border-right-width:2px;
 border-bottom-width:2px;
 border-left-width:2px;
 transition-duration:0.2s;
 transition-timing-function:ease;
 transition-property:all;
}
.hosting-footer-1-column {
 text-align:left;
}
.hosting-footer-1-column:not(.ct-section):not(.oxy-easy-posts),
.hosting-footer-1-column.oxy-easy-posts .oxy-posts,
.hosting-footer-1-column.ct-section .ct-section-inner-wrap{
display:flex;
flex-direction:row;
align-items:center;
justify-content:flex-start;
}
@media (max-width: 767px) {
.hosting-footer-1-column {
 text-align:center;
 border-bottom-style:solid;
 border-bottom-width:1px;
 border-bottom-color:rgba(255,255,255,0.6);
}
.hosting-footer-1-column:not(.ct-section):not(.oxy-easy-posts),
.hosting-footer-1-column.oxy-easy-posts .oxy-posts,
.hosting-footer-1-column.ct-section .ct-section-inner-wrap{
display:flex;
flex-direction:column;
align-items:center;
}
}

.hosting-footer-1-image {
color: #ffffff;}.hosting-footer-1-image 
>svg {width: 28px;height: 28px;}.hosting-footer-1-image {
 margin-right:12px;
}
.hosting-footer-1-text:hover{
 color:#ffffff;
}
.hosting-footer-1-text {
 font-family:'Maven Pro';
 color:#ffffff;
 font-size:16px;
 font-weight:400;
 line-height:1.6;
 text-decoration:none;
}
.hosting-footer-1-text:not(.ct-section):not(.oxy-easy-posts),
.hosting-footer-1-text.oxy-easy-posts .oxy-posts,
.hosting-footer-1-text.ct-section .ct-section-inner-wrap{
display:inline-block;
}
.hosting-dark-outline-button:hover{
transform:scale(1.05,1.05);}
.hosting-dark-outline-button {
background-color: transparent;
border: 1px solid #07adb7;
color: #07adb7;
padding: 11px 18.2px;
}.hosting-dark-outline-button {
 font-family:'Maven Pro';
 font-size:16px;
 font-weight:700;
 border-radius:5px;
 border-top-style:solid;
 border-right-style:solid;
 border-bottom-style:solid;
 border-left-style:solid;
 border-top-width:2px;
 border-right-width:2px;
 border-bottom-width:2px;
 border-left-width:2px;
 padding-left:32px;
 padding-right:32px;
 background-color:#ffffff;
 transition-duration:0.2s;
 transition-timing-function:ease;
 transition-property:all;
}
.hosting-about-2-image {
 border-radius:5px;
 margin-bottom:40px;
}
.hosting-heading-two {
 font-family:'Raleway';
 color:#2a445a;
 font-size:40px;
 font-weight:700;
 line-height:1.1;
 margin-bottom:0px;
}
@media (max-width: 767px) {
.hosting-heading-two {
 font-size:32px;
}
}

.hosting-company-2-wrapper {
 text-align:center;
 width:25%;
}
.hosting-company-2-wrapper:not(.ct-section):not(.oxy-easy-posts),
.hosting-company-2-wrapper.oxy-easy-posts .oxy-posts,
.hosting-company-2-wrapper.ct-section .ct-section-inner-wrap{
display:flex;
flex-direction:column;
align-items:center;
}
.hosting-company-2-icon {
color: #07adb7;}.hosting-company-2-icon 
>svg {width: 36px;height: 36px;}.hosting-company-2-icon {
 margin-bottom:12px;
}
.hosting-company-2-title {
 font-family:'Raleway';
 color:#2a445a;
 font-size:20px;
 font-weight:700;
 line-height:1.1;
 margin-bottom:8px;
}
.hosting-company-2-text {
 font-family:'Maven Pro';
 color:#666666;
 font-weight:400;
 font-size:16px;
 line-height:1.6;
}
.hosting-main-button:hover{
transform:scale(1.05,1.05); box-shadow:0px 30px 20px -20px rgba(0,0,0,0.2);
}
.hosting-main-button {
background-color :#07adb7;
border: 1px solid #07adb7;
color: #ffffff;
padding: 12px 19.2px;
}.hosting-main-button {
 padding-left:32px;
 padding-right:32px;
 font-weight:700;
 border-radius:5px;
 transition-duration:0.2s;
 transition-timing-function:ease;
 transition-property:all;
}
.hosting-features-2-photo {
 border-radius:5px;
}
.hosting-features-1-wrapper {
 text-align:center;
 width:33.33%;
}
.hosting-features-1-wrapper:not(.ct-section):not(.oxy-easy-posts),
.hosting-features-1-wrapper.oxy-easy-posts .oxy-posts,
.hosting-features-1-wrapper.ct-section .ct-section-inner-wrap{
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
}
.hosting-features-1-icon {
color: #ffffff;}.hosting-features-1-icon 
>svg {width: 36px;height: 36px;}.hosting-features-1-icon {
 margin-bottom:12px;
}
.hosting-features-1-title {
 font-family:'Raleway';
 color:#ffffff;
 font-size:20px;
 font-weight:700;
 line-height:1.1;
 margin-bottom:8px;
}
.hosting-features-1-text {
 color:#f6fafd;
}
.hosting-product-1-check-wrapper {
 width:100%;
 margin-bottom:12px;
}
.hosting-product-1-check-wrapper:not(.ct-section):not(.oxy-easy-posts),
.hosting-product-1-check-wrapper.oxy-easy-posts .oxy-posts,
.hosting-product-1-check-wrapper.ct-section .ct-section-inner-wrap{
display:flex;
flex-direction:row;
align-items:flex-start;
}
.hosting-product-1-check {
color: #5abc9c;}.hosting-product-1-check 
>svg {width: 16px;height: 16px;}.hosting-product-1-check {
 margin-right:8px;
 margin-top:4px;
}
.hosting-product-1-text {
 font-family:'Maven Pro';
 color:#666666;
 font-size:16px;
 font-weight:400;
 line-height:1.6;
 text-align:left;
}
.hosting-product-2-wrapper {
 width:100%;
 background-color:#ffffff;
 border-radius:5px;
 padding-top:28px;
 padding-left:28px;
 padding-right:28px;
 padding-bottom:28px;
 height:100%;
 box-shadow:0px 0px 5px rgba(0,0,0,0.2);
}
.hosting-product-2-icon {
color: #07adb7;}.hosting-product-2-icon 
>svg {width: 36px;height: 36px;}.hosting-product-2-icon {
 margin-bottom:12px;
}
.hosting-product-2-title {
 font-family:'Raleway';
 color:#2a445a;
 font-size:24px;
 font-weight:900;
 line-height:1.1;
 margin-bottom:12px;
}
.hosting-product-2-text {
 font-family:'Maven Pro';
 color:#666666;
 font-size:16px;
 font-weight:400;
 line-height:1.6;
 margin-bottom:12px;
 margin-left:12px;
}
.hosting-product-2-bullet {
 color:#8ec98a;
 margin-left:-12px;
}
.hosting-product-2-digit {
 font-family:'Maven Pro';
 font-size:48px;
 color:#2a445a;
 font-weight:900;
 line-height:1.1;
 margin-top:4px;
}
.hosting-product-2-label {
 font-family:'Maven Pro';
 color:#2a445a;
 font-size:16px;
 font-weight:400;
 line-height:1.6;
 margin-bottom:20px;
}
.hosting-providers-1-image-wrapper {
 text-align:center;
}
.hosting-providers-1-image-wrapper:not(.ct-section):not(.oxy-easy-posts),
.hosting-providers-1-image-wrapper.oxy-easy-posts .oxy-posts,
.hosting-providers-1-image-wrapper.ct-section .ct-section-inner-wrap{
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
}
.hosting-providers-1-images {
}
.hosting-providers-1-text-wrapper {
 text-align:left;
}
.hosting-providers-1-text-wrapper:not(.ct-section):not(.oxy-easy-posts),
.hosting-providers-1-text-wrapper.oxy-easy-posts .oxy-posts,
.hosting-providers-1-text-wrapper.ct-section .ct-section-inner-wrap{
display:flex;
flex-direction:column;
align-items:flex-start;
}
.hosting-providers-1-title {
 font-family:'Raleway';
 color:#2a445a;
 font-size:24px;
 font-weight:900;
 line-height:1.1;
 margin-bottom:12px;
}
.hosting-providers-2-text {
 font-family:'Maven Pro';
 color:#666666;
 font-size:16px;
 line-height:1.6;
}
.hosting-contact-3-wrapper {
 width:100%;
 margin-bottom:20px;
 font-size:16px;
 color:#ffffff;
 padding-bottom:20px;
 border-bottom-style:solid;
 border-bottom-width:1px;
 border-bottom-color:rgba(255,255,255,0.6);
}
.hosting-contact-3-wrapper:not(.ct-section):not(.oxy-easy-posts),
.hosting-contact-3-wrapper.oxy-easy-posts .oxy-posts,
.hosting-contact-3-wrapper.ct-section .ct-section-inner-wrap{
display:flex;
flex-direction:row;
align-items:center;
}
.hosting-contact-3-icon {
color: #ffffff;}.hosting-contact-3-icon 
>svg {width: 28px;height: 28px;}.hosting-contact-3-icon {
 margin-right:12px;
}
.Paragraph {
 font-size:16px;
 line-height:1.5;
 max-width:500px;
}
.hosting-contact-3-title {
 font-family:'Raleway';
 color:#2a445a;
 font-size:24px;
 font-weight:900;
 line-height:1.1;
 margin-bottom:12px;
}
.hosting-contact-3-text {
 font-family:'Maven Pro';
 color:#666666;
 font-size:16px;
 font-weight:400;
 line-height:1.6;
 margin-bottom:4px;
}
.hosting-contact-3-textlink:hover{
 text-decoration:underline;
}
.hosting-contact-3-textlink {
 font-family:'Maven Pro';
 color:#07adb7;
 font-size:16px;
 font-weight:400;
 text-decoration:none;
}
.toggle-4605 {
 font-family:'Raleway';
 margin-left:-16px;
 margin-bottom:8px;
 color:#07adb7;
}

                .toggle-4605 .oxy-expand-collapse-icon {
            font-size: 12px;        }
        
                .toggle-4605 .oxy-expand-collapse-icon::before,
        .toggle-4605 .oxy-expand-collapse-icon::after {
            background-color: color(4);        }
        
        .toggle-4605-expanded {
}
.hosting-accordion-1-title {
 font-family:'Raleway';
 color:#2a445a;
 font-size:16px;
 font-weight:700;
 line-height:1.6;
 border-bottom-style:dashed;
 border-bottom-width:1px;
 border-bottom-color:#07adb7;
 text-align:left;
}
.hosting-accordion-1-title:not(.ct-section):not(.oxy-easy-posts),
.hosting-accordion-1-title.oxy-easy-posts .oxy-posts,
.hosting-accordion-1-title.ct-section .ct-section-inner-wrap{
display:inline-flex;
flex-direction:unset;
}
@media (max-width: 767px) {
.hosting-accordion-1-title {
}
.hosting-accordion-1-title:not(.ct-section):not(.oxy-easy-posts),
.hosting-accordion-1-title.oxy-easy-posts .oxy-posts,
.hosting-accordion-1-title.ct-section .ct-section-inner-wrap{
flex-direction:unset;
}
}

.hosting-accordion-1-text {
 font-family:'Maven Pro';
 color:#666666;
 font-size:16px;
 font-weight:400;
 line-height:1.6;
 text-align:left;
 margin-bottom:16px;
}
.hosting-hero-1-image {
 width:16%;
 opacity:0.5;
}
@media (max-width: 767px) {
.hosting-hero-1-image {
 width:33.33%;
}
}

.hosting-price-1-wrapper {
 width:100%;
 background-color:#ffffff;
 border-radius:5px;
 height:100%;
 border-top-color:#b2d27d;
 border-top-width:5px;
 border-top-style:solid;
 padding-top:30px;
 padding-left:30px;
 padding-right:30px;
 padding-bottom:30px;
 text-align:left;
 box-shadow:0px 0px 5px rgba(0,0,0,0.2);
}
.hosting-price-1-wrapper:not(.ct-section):not(.oxy-easy-posts),
.hosting-price-1-wrapper.oxy-easy-posts .oxy-posts,
.hosting-price-1-wrapper.ct-section .ct-section-inner-wrap{
display:flex;
flex-direction:column;
align-items:stretch;
}
.hosting-pricing-1-icon {
color: #07adb7;}.hosting-pricing-1-icon 
>svg {width: 48px;height: 48px;}.hosting-pricing-1-icon {
 margin-bottom:12px;
}
.hosting-pricing-1-title {
 font-family:'Raleway';
 color:#2a445a;
 font-size:24px;
 font-weight:900;
 line-height:1.1;
 margin-bottom:8px;
}
.hosting-pricing-1-text {
 font-family:'Maven Pro';
 color:#666666;
 font-size:16px;
 font-weight:400;
 line-height:1.6;
 margin-bottom:12px;
 max-width:360px;
}
.hosting-pricing-1-month {
 font-family:'Maven Pro';
 color:#2a445a;
 font-size:12px;
 font-weight:400;
 line-height:1.6;
 margin-bottom:24px;
}
.hosting-iconblock-1-column {
 text-align:center;
}
.hosting-iconblock-1-column:not(.ct-section):not(.oxy-easy-posts),
.hosting-iconblock-1-column.oxy-easy-posts .oxy-posts,
.hosting-iconblock-1-column.ct-section .ct-section-inner-wrap{
display:flex;
flex-direction:column;
align-items:center;
justify-content:flex-start;
}
.hosting-iconblock-1-icon {
color: #07adb7;}.hosting-iconblock-1-icon 
>svg {width: 48px;height: 48px;}.hosting-iconblock-1-icon {
 margin-bottom:12px;
}
.hosting-iconblock-1-title {
 font-family:'Raleway';
 font-size:16px;
 font-weight:900;
 color:#2a445a;
 line-height:1.1;
 margin-top:auto;
}
.hosting-slider-1-slide {
 background-color:#ffffff;
 border-radius:5px;
 box-shadow:0px 0px 5px rgba(0,0,0,0.2);
}
.hosting-slider-1-image {
 width:240px;
}
.hosting-slider-1-text {
 font-family:'Maven Pro';
 color:#666666;
 font-size:16px;
 font-weight:400;
 line-height:1.6;
 margin-bottom:24px;
 font-style:italic;
}
.hosting-iconblock-2-column {
 text-align:center;
}
.hosting-iconblock-2-column:not(.ct-section):not(.oxy-easy-posts),
.hosting-iconblock-2-column.oxy-easy-posts .oxy-posts,
.hosting-iconblock-2-column.ct-section .ct-section-inner-wrap{
display:flex;
flex-direction:column;
align-items:center;
}
.hosting-iconblock-3-icon {
color: #ffffff;}.hosting-iconblock-3-icon 
>svg {width: 48px;height: 48px;}.hosting-iconblock-3-icon {
 margin-bottom:12px;
}
.hosting-iconblock-2-title {
 font-family:'Raleway';
 color:#ffffff;
 font-size:16px;
 font-weight:900;
 line-height:1.2;
 margin-bottom:4px;
}
.hosting-iconblock-2-text {
 font-family:'Maven Pro';
 color:#ffffff;
 font-size:16px;
 font-weight:400;
 line-height:1.6;
 max-width:360px;
}
.oxy-close-modal {
}
</style>

        <div id="div_block-148-87" class="ct-div-block"><div id="div_block-144-87" class="ct-div-block"><header id="_header-2-87" class="oxy-header-wrapper oxy-overlay-header oxy-header"><div id="_header_row-22-87" class="oxy-header-row"><div class="oxy-header-container"><div id="_header_left-23-87" class="oxy-header-left"><a id="link-190-10" class="ct-link" href="https://www.pagerewriter.com/"><img id="image-191-10" alt="Page ReWriter" src="./Page ReWriter - All The Content You Will Ever Need!_files/logo-min.png" class="ct-image"></a></div><div id="_header_center-26-87" class="oxy-header-center"></div><div id="_header_right-28-87" class="oxy-header-right"><div id="div_block-29-87" class="ct-div-block"><a id="link_button-252-10" class="ct-link-button hosting-simple-button" href="https://app.paykickstart.com/checkout/ZnyKdYXBJD0a1kmeJdkqVormO37Pg98G" target="_self">Create a FREE Account!</a><a id="link_button-31-87" class="ct-link-button hosting-white-outline-button" href="https://app.pagerewriter.com/" target="_self">Login</a></div></div></div></div></header>
<div id="inner_content-7-87" class="ct-inner-content"><section id="section-2-4" class=" ct-section "><div class="ct-section-inner-wrap"><div id="div_block-1122-4" class="ct-div-block"><h1 id="headline-1119-4" class="ct-headline hosting-heading-one">Quickly Write Ranking Content</h1><div id="text_block-6-4" class="ct-text-block">The only content tool SEO experts will ever need!<br></div><a id="link_button-1460-18" class="ct-link-button hosting-main-button" href="http:">Watch Demo!</a><div id="text_block-11-4" class="ct-text-block ">The Best Content Tool For Writers Who Want To Rank In The Search Engines!</div></div></div></section>            <div tabindex="-1" class="oxy-modal-backdrop center " style="background-color: rgba(0,0,0,0.5);" data-trigger="user_clicks_element" data-trigger-selector="#link_button-1460-18" data-trigger-time="5" data-trigger-time-unit="seconds" data-close-automatically="no" data-close-after-time="10" data-close-after-time-unit="seconds" data-trigger_scroll_amount="50" data-trigger_scroll_direction="down" data-scroll_to_selector="" data-time_inactive="60" data-time-inactive-unit="seconds" data-number_of_clicks="3" data-close_on_esc="on" data-number_of_page_views="3" data-close-after-form-submit="no" data-open-again="always_show" data-open-again-after-days="3">

            <div id="modal-1470-18" class="ct-modal"><div id="video-1471-18" class="ct-video">
        <div class="oxygen-vsb-responsive-video-wrapper oxygen-vsb-responsive-video-wrapper-custom"></div>
        </div></div>
        </div>
    <section id="section-39-4" class=" ct-section "><div class="ct-section-inner-wrap"><h2 id="headline-140-4" class="ct-headline hosting-heading-two">Choose The Best Plan For Your Content Needs</h2><div id="new_columns-1313-4" class="ct-new-columns"><div id="div_block-1314-4" class="ct-div-block"><div id="div_block-1321-4" class="ct-div-block hosting-price-1-wrapper"><h3 id="headline-1341-4" class="ct-headline hosting-pricing-1-title">Pay As You Go</h3><div id="text_block-1361-4" class="ct-text-block hosting-pricing-1-text">20 Credits<br>$1 Per Credit<br>Flexible, No contract<br>Top-up as you please<br></div><h4 id="headline-1374-4" class="ct-headline">$20</h4><div id="text_block-1459-18" class="ct-text-block hosting-pricing-1-month">No commitment</div><a id="link_button-1330-4" class="ct-link-button hosting-main-button" href="https://app.paykickstart.com/checkout/ZnyKdYXBJD0a1kmeJdkqVormO37Pg98G" target="_blank">Get Started!</a></div></div><div id="div_block-1315-4" class="ct-div-block"><div id="div_block-1322-4" class="ct-div-block hosting-price-1-wrapper"><h3 id="headline-1348-4" class="ct-headline hosting-pricing-1-title">Starter</h3><div id="text_block-1363-4" class="ct-text-block hosting-pricing-1-text">60 Credits /month<br>$0.33 Per Credit<br>Good for Small Blogs &amp; Personal Sites<br></div><h4 id="headline-1376-4" class="ct-headline">$19.99</h4><div id="text_block-1389-4" class="ct-text-block hosting-pricing-1-month">/month</div><a id="link_button-1332-4" class="ct-link-button hosting-main-button" href="https://app.paykickstart.com/checkout/VXQq3DLZY0pNOzpdmMz9wo7g8Keld5ab" target="_blank">Get Started!</a></div></div><div id="div_block-1316-4" class="ct-div-block"><div id="div_block-1324-4" class="ct-div-block hosting-price-1-wrapper"><h3 id="headline-1352-4" class="ct-headline hosting-pricing-1-title">Pro</h3><div id="text_block-1365-4" class="ct-text-block hosting-pricing-1-text">200 Credits&nbsp;/month<br>$0.20 Per Credit<br>Good for PBN's &amp; Client Sites<br></div><h4 id="headline-1378-4" class="ct-headline">$39.99</h4><div id="text_block-1387-4" class="ct-text-block hosting-pricing-1-month">/month</div><a id="link_button-1334-4" class="ct-link-button hosting-main-button" href="https://app.paykickstart.com/checkout/7DbEdNQKwroYezYwnlkV6Ry490aO38Lg" target="_blank">Get Started!</a></div></div><div id="div_block-1317-4" class="ct-div-block"><div id="div_block-1326-4" class="ct-div-block hosting-price-1-wrapper"><h3 id="headline-1356-4" class="ct-headline hosting-pricing-1-title">Agency</h3><div id="text_block-1367-4" class="ct-text-block hosting-pricing-1-text">600 Credits&nbsp;/month<br>$0.13 Per Credit<br>Good for Agencies &amp; Mass Page Experts<br></div><h4 id="headline-1380-4" class="ct-headline">$79.99</h4><div id="text_block-1385-4" class="ct-text-block hosting-pricing-1-month">/month</div><a id="link_button-1336-4" class="ct-link-button hosting-main-button" href="https://app.paykickstart.com/checkout/5Nv0broBqwlyOjJXPlWQ7RXg1L9GaAeM" target="_blank">Get Started!</a></div></div></div><div id="div_block-1318-4" class="ct-div-block"><div id="div_block-1328-4" class="ct-div-block hosting-price-1-wrapper"><div id="new_columns-1338-4" class="ct-new-columns"><div id="div_block-1339-4" class="ct-div-block"><div id="fancy_icon-1413-4" class="ct-fancy-icon hosting-pricing-1-icon"><svg id="svg-fancy_icon-1413-4"><use xlink:href="#Lineariconsicon-gift"></use></svg></div><h3 id="headline-1402-4" class="ct-headline hosting-pricing-1-title">Sign up for a FREE account</h3><div id="text_block-1405-4" class="ct-text-block hosting-pricing-1-text">3 FREE Credits /month<br>Try all our features, free, every month!&nbsp;<br>No commitment.&nbsp; +add credit any time with PAYG top-ups<br></div></div><div id="div_block-1340-4" class="ct-div-block"><a id="link_button-1393-4" class="ct-link-button hosting-dark-outline-button" href="https://app.paykickstart.com/checkout/ZnyKdYXBJD0a1kmeJdkqVormO37Pg98G" target="_blank">YES! I want a FREE Account</a></div></div></div></div></div></section><section id="section-817-4" class=" ct-section"><div class="ct-section-inner-wrap"><h2 id="headline-818-4" class="ct-headline hosting-heading-two">Simple. Powerful. Reliable.</h2><div id="text_block-819-4" class="ct-text-block ">Customers choose us because they get the best content back</div><div id="new_columns-1138-4" class="ct-new-columns"><div id="div_block-1140-4" class="ct-div-block hosting-iconblock-1-column"><div id="fancy_icon-1415-4" class="ct-fancy-icon hosting-iconblock-1-icon"><svg id="svg-fancy_icon-1415-4"><use xlink:href="#Lineariconsicon-calendar-full"></use></svg></div><h3 id="headline-1160-4" class="ct-headline hosting-iconblock-1-title">24x7 Save Time Every Day</h3></div><div id="div_block-1141-4" class="ct-div-block hosting-iconblock-1-column"><div id="fancy_icon-1416-4" class="ct-fancy-icon hosting-iconblock-1-icon"><svg id="svg-fancy_icon-1416-4"><use xlink:href="#Lineariconsicon-license"></use></svg></div><h3 id="headline-1161-4" class="ct-headline hosting-iconblock-1-title">100% Ranking Content</h3></div><div id="div_block-1142-4" class="ct-div-block hosting-iconblock-1-column"><div id="fancy_icon-1418-4" class="ct-fancy-icon hosting-iconblock-1-icon"><svg id="svg-fancy_icon-1418-4"><use xlink:href="#Lineariconsicon-earth"></use></svg></div><h3 id="headline-1163-4" class="ct-headline hosting-iconblock-1-title">Works Anywhere In The World</h3></div><div id="div_block-1152-4" class="ct-div-block hosting-iconblock-1-column"><div id="fancy_icon-1421-4" class="ct-fancy-icon hosting-iconblock-1-icon"><svg id="svg-fancy_icon-1421-4"><use xlink:href="#Lineariconsicon-apartment"></use></svg></div><h3 id="headline-1171-4" class="ct-headline hosting-iconblock-1-title">Works In Any Industry</h3></div><div id="div_block-1143-4" class="ct-div-block hosting-iconblock-1-column"><div id="fancy_icon-1423-4" class="ct-fancy-icon hosting-iconblock-1-icon"><svg id="svg-fancy_icon-1423-4"><use xlink:href="#Lineariconsicon-spell-check"></use></svg></div><h3 id="headline-1165-4" class="ct-headline hosting-iconblock-1-title">Spin ReWriter Integration</h3></div><div id="div_block-1156-4" class="ct-div-block hosting-iconblock-1-column"><div id="fancy_icon-1425-4" class="ct-fancy-icon hosting-iconblock-1-icon"><svg id="svg-fancy_icon-1425-4"><use xlink:href="#Lineariconsicon-hourglass"></use></svg></div><h3 id="headline-1167-4" class="ct-headline hosting-iconblock-1-title">The Fastest Way To Make Content</h3></div></div></div></section><section id="section-1110-4" class=" ct-section"><div class="ct-section-inner-wrap"><h2 id="headline-829-4" class="ct-headline hosting-heading-two">Frequently Asked Questions</h2><div id="new_columns-1236-4" class="ct-new-columns"><div id="div_block-1237-4" class="ct-div-block"><div id="_toggle-1239-4" class="oxy-toggle toggle-4605 toggle-4605-expanded" data-oxy-toggle-initial-state="open" data-oxy-toggle-active-class="toggle-4605-expanded">
  <div class="oxy-expand-collapse-icon" href="#"></div>
  <div class="oxy-toggle-content">
    <h1 id="headline-1240-4" class="ct-headline hosting-accordion-1-title">How much content can be created how quickly?</h1>			</div>
</div><div id="text_block-1241-4" class="ct-text-block hosting-accordion-1-text">You can create as much content as you need.</div><div id="_toggle-1244-4" class="oxy-toggle toggle-4605" data-oxy-toggle-initial-state="closed" data-oxy-toggle-active-class="toggle-4605-expanded">
  <div class="oxy-expand-collapse-icon oxy-eci-collapsed" href="#"></div>
  <div class="oxy-toggle-content">
    <h1 id="headline-1245-4" class="ct-headline hosting-accordion-1-title">Is the content human readable?</h1>			</div>
</div><div id="text_block-1247-4" class="ct-text-block hosting-accordion-1-text" style="display: none;">The content is very readable content.</div><div id="_toggle-1249-4" class="oxy-toggle toggle-4605" data-oxy-toggle-initial-state="closed" data-oxy-toggle-active-class="toggle-4605-expanded">
  <div class="oxy-expand-collapse-icon oxy-eci-collapsed" href="#"></div>
  <div class="oxy-toggle-content">
    <h1 id="headline-1250-4" class="ct-headline hosting-accordion-1-title">If readable, enough so that visitors can/would actually engage with it?</h1>			</div>
</div><div id="text_block-1252-4" class="ct-text-block hosting-accordion-1-text" style="display: none;">The content is ranking already so is engaging.</div><div id="_toggle-1254-4" class="oxy-toggle toggle-4605" data-oxy-toggle-initial-state="closed" data-oxy-toggle-active-class="toggle-4605-expanded">
  <div class="oxy-expand-collapse-icon oxy-eci-collapsed" href="#"></div>
  <div class="oxy-toggle-content">
    <h1 id="headline-1255-4" class="ct-headline hosting-accordion-1-title">Is the product Downloadable or SAAS?</h1>			</div>
</div><div id="text_block-1257-4" class="ct-text-block hosting-accordion-1-text" style="display: none;">Everything is done in the cloud.</div><div id="_toggle-1259-4" class="oxy-toggle toggle-4605" data-oxy-toggle-initial-state="closed" data-oxy-toggle-active-class="toggle-4605-expanded">
  <div class="oxy-expand-collapse-icon oxy-eci-collapsed" href="#"></div>
  <div class="oxy-toggle-content">
    <h1 id="headline-1260-4" class="ct-headline hosting-accordion-1-title">How Many Computers Can It Be Installed On?</h1>			</div>
</div><div id="text_block-1262-4" class="ct-text-block hosting-accordion-1-text" style="display: none;">Its a SAAAS so you can login from anywhere.</div></div><div id="div_block-1268-4" class="ct-div-block"><div id="_toggle-1269-4" class="oxy-toggle toggle-4605" data-oxy-toggle-initial-state="closed" data-oxy-toggle-active-class="toggle-4605-expanded">
  <div class="oxy-expand-collapse-icon oxy-eci-collapsed" href="#"></div>
  <div class="oxy-toggle-content">
    <h1 id="headline-1270-4" class="ct-headline hosting-accordion-1-title">Is it Unlimited?</h1>			</div>
</div><div id="text_block-1271-4" class="ct-text-block hosting-accordion-1-text" style="display: none;">We have multiple packages to choose from.</div><div id="_toggle-1272-4" class="oxy-toggle toggle-4605" data-oxy-toggle-initial-state="closed" data-oxy-toggle-active-class="toggle-4605-expanded">
  <div class="oxy-expand-collapse-icon oxy-eci-collapsed" href="#"></div>
  <div class="oxy-toggle-content">
    <h1 id="headline-1273-4" class="ct-headline hosting-accordion-1-title">Can I create Long Form ( 600+ blog posts)?<br></h1>			</div>
</div><div id="text_block-1274-4" class="ct-text-block hosting-accordion-1-text" style="display: none;">Of course.</div><div id="_toggle-1275-4" class="oxy-toggle toggle-4605" data-oxy-toggle-initial-state="closed" data-oxy-toggle-active-class="toggle-4605-expanded">
  <div class="oxy-expand-collapse-icon oxy-eci-collapsed" href="#"></div>
  <div class="oxy-toggle-content">
    <h1 id="headline-1276-4" class="ct-headline hosting-accordion-1-title">does it include a spinner?</h1>			</div>
</div><div id="text_block-1277-4" class="ct-text-block hosting-accordion-1-text" style="display: none;">It integrates with Spin ReWriter.</div><div id="_toggle-1278-4" class="oxy-toggle toggle-4605" data-oxy-toggle-initial-state="closed" data-oxy-toggle-active-class="toggle-4605-expanded">
  <div class="oxy-expand-collapse-icon oxy-eci-collapsed" href="#"></div>
  <div class="oxy-toggle-content">
    <h1 id="headline-1279-4" class="ct-headline hosting-accordion-1-title">How much time does it take to rework the content?</h1>			</div>
</div><div id="text_block-1280-4" class="ct-text-block hosting-accordion-1-text" style="display: none;">That depneds on what you want to do with the content.</div><div id="_toggle-1281-4" class="oxy-toggle toggle-4605" data-oxy-toggle-initial-state="closed" data-oxy-toggle-active-class="toggle-4605-expanded">
  <div class="oxy-expand-collapse-icon oxy-eci-collapsed" href="#"></div>
  <div class="oxy-toggle-content">
    <h1 id="headline-1282-4" class="ct-headline hosting-accordion-1-title">Do I get "Charged" for the rubbish output that it spits out?</h1>			</div>
</div><div id="text_block-1283-4" class="ct-text-block hosting-accordion-1-text" style="display: none;">It doesn't output any rubbish.&nbsp;</div></div></div></div></section></div></div><section id="section-8-87" class=" ct-section"><div class="ct-section-inner-wrap"><div id="new_columns-100-87" class="ct-new-columns"><div id="div_block-101-87" class="ct-div-block hosting-footer-1-column"><div id="fancy_icon-149-87" class="ct-fancy-icon hosting-footer-1-image"><svg id="svg-fancy_icon-149-87"><use xlink:href="#Lineariconsicon-cloud-sync"></use></svg></div><div id="text_block-110-87" class="ct-text-block hosting-footer-1-text">In The Cloud<br>No Installation Needed&nbsp;</div></div><div id="div_block-102-87" class="ct-div-block hosting-footer-1-column"><div id="fancy_icon-150-87" class="ct-fancy-icon hosting-footer-1-image"><svg id="svg-fancy_icon-150-87"><use xlink:href="#Lineariconsicon-clock"></use></svg></div><div id="text_block-111-87" class="ct-text-block hosting-footer-1-text">Save 100s Of Hours<br>In Research &amp; Typing</div></div><div id="div_block-103-87" class="ct-div-block hosting-footer-1-column"><div id="fancy_icon-152-87" class="ct-fancy-icon hosting-footer-1-image"><svg id="svg-fancy_icon-152-87"><use xlink:href="#Lineariconsicon-bullhorn"></use></svg></div><div id="text_block-113-87" class="ct-text-block hosting-footer-1-text">Unlimited Support<br>At No Extra Cost</div></div></div><div id="new_columns-121-87" class="ct-new-columns"><div id="div_block-122-87" class="ct-div-block"><a id="link-188-10" class="ct-link" href="https://www.pagerewriter.com/"><img id="image-189-10" alt="Page ReWriter" src="./Page ReWriter - All The Content You Will Ever Need!_files/logo-min.png" class="ct-image"></a><div id="text_block-135-87" class="ct-text-block">The world's best content tool</div></div><div id="div_block-123-87" class="ct-div-block"><a id="link_button-30-87" class="ct-link-button hosting-simple-button" href="https://www.pagerewriter.com/training/" target="_self">Training</a></div><div id="div_block-125-87" class="ct-div-block"><h3 id="headline-138-87" class="ct-headline">Join us on Social</h3><div id="_social_icons-141-87" class="oxy-social-icons"><a href="https://facebook.com/groups/magicpage" target="_blank" class="oxy-social-icons-facebook"><svg><use xlink:href="#oxy-social-icons-icon-facebook"></use></svg></a><a href="https://youtube.com/MikeMartinYoutube" target="_blank" class="oxy-social-icons-youtube"><svg><use xlink:href="#oxy-social-icons-icon-youtube"></use></svg></a></div></div></div><div id="new_columns-192-10" class="ct-new-columns"><div id="div_block-197-10" class="ct-div-block"><div id="div_block-241-10" class="ct-div-block"><div id="text_block-203-10" class="ct-text-block hosting-footer-1-text"><b>Contact Funnels Ltd</b> - 71-75 Shelton Street, Covent Garden, London, England, WC2H 9JQ<br></div></div><div id="div_block-243-10" class="ct-div-block"><a id="link-246-10" class="ct-link" href="http:" target="_self"></a><a id="text_block-217-10" class="ct-link-text hosting-footer-1-text" href="https://leadsimplify.com/terms/" target="_blank">Terms and Conditions<br></a><div id="text_block-251-10" class="ct-text-block">&nbsp;|&nbsp;</div><a id="link_text-227-10" class="ct-link-text hosting-footer-1-text" href="https://leadsimplify.com/privacy-policy/" target="_blank">Privacy Policy&nbsp;<br></a><div id="text_block-256-10" class="ct-text-block">&nbsp;|&nbsp;</div><a id="link_text-258-10" class="ct-link-text hosting-footer-1-text" href="https://docs.google.com/document/d/1h-oiXGg5XOO1gJVZEsZiFsQyx1ksffhsKmuraEclCOc/edit?usp=sharing" target="_blank">Affiliates</a></div></div></div></div></section></div>	<!-- WP_FOOTER -->
<!--?xml version="1.0"?--><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1"><defs><symbol id="Lineariconsicon-apartment" viewBox="0 0 20 20"><title>apartment</title><path class="path1" d="M14 6h1v1h-1v-1z"></path><path class="path2" d="M14 8h1v1h-1v-1z"></path><path class="path3" d="M14 10h1v1h-1v-1z"></path><path class="path4" d="M14 12h1v1h-1v-1z"></path><path class="path5" d="M14 16h1v1h-1v-1z"></path><path class="path6" d="M14 14h1v1h-1v-1z"></path><path class="path7" d="M6 6h1v1h-1v-1z"></path><path class="path8" d="M6 8h1v1h-1v-1z"></path><path class="path9" d="M6 10h1v1h-1v-1z"></path><path class="path10" d="M6 12h1v1h-1v-1z"></path><path class="path11" d="M6 16h1v1h-1v-1z"></path><path class="path12" d="M6 14h1v1h-1v-1z"></path><path class="path13" d="M4 6h1v1h-1v-1z"></path><path class="path14" d="M4 8h1v1h-1v-1z"></path><path class="path15" d="M4 10h1v1h-1v-1z"></path><path class="path16" d="M4 12h1v1h-1v-1z"></path><path class="path17" d="M4 16h1v1h-1v-1z"></path><path class="path18" d="M4 14h1v1h-1v-1z"></path><path class="path19" d="M8 6h1v1h-1v-1z"></path><path class="path20" d="M8 8h1v1h-1v-1z"></path><path class="path21" d="M8 10h1v1h-1v-1z"></path><path class="path22" d="M8 12h1v1h-1v-1z"></path><path class="path23" d="M8 16h1v1h-1v-1z"></path><path class="path24" d="M8 14h1v1h-1v-1z"></path><path class="path25" d="M18.5 19h-0.5v-13.5c0-0.763-0.567-1.549-1.291-1.791l-4.709-1.57v-1.64c0-0.158-0.075-0.307-0.202-0.401s-0.291-0.123-0.442-0.078l-9.042 2.713c-0.737 0.221-1.314 0.997-1.314 1.766v14.5h-0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h18c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5zM16.393 4.658c0.318 0.106 0.607 0.507 0.607 0.842v13.5h-5v-15.806l4.393 1.464zM2 4.5c0-0.329 0.287-0.714 0.602-0.808l8.398-2.52v17.828h-9v-14.5z"></path></symbol><symbol id="Lineariconsicon-cloud-sync" viewBox="0 0 20 20"><title>cloud-sync</title><path class="path1" d="M16.006 8.012c-0.061 0-0.122 0.001-0.183 0.004 0.116-0.322 0.177-0.666 0.177-1.017 0-1.654-1.346-3-3-3-0.948 0-1.851 0.456-2.415 1.22-0.129 0.174-0.237 0.36-0.324 0.555-1.123-1.132-2.658-1.775-4.261-1.775-3.308 0-6 2.692-6 6s2.692 6 6 6h10.006c2.202 0 3.994-1.792 3.994-3.994s-1.792-3.994-3.994-3.994zM16.006 15h-10.006c-2.757 0-5-2.243-5-5s2.243-5 5-5c1.428 0 2.791 0.613 3.74 1.681 0.125 0.141 0.243 0.29 0.351 0.442l0.005 0.007c0.122 0.174 0.34 0.253 0.545 0.195s0.351-0.238 0.364-0.451c0.024-0.384 0.157-0.751 0.386-1.061 0.382-0.517 0.969-0.814 1.611-0.814 1.103 0 2 0.897 2 2 0 0.515-0.195 1.004-0.55 1.377-0.16 0.168-0.183 0.424-0.056 0.618s0.371 0.275 0.589 0.196c0.327-0.119 0.671-0.179 1.023-0.179 1.651 0 2.994 1.343 2.994 2.994s-1.343 2.994-2.994 2.994z"></path><path class="path2" d="M6.404 11.959c-0.132 0.027-0.268 0.041-0.404 0.041-1.103 0-2-0.897-2-2v-0.293l0.146 0.146c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146c0.195-0.195 0.195-0.512 0-0.707l-1-1c-0.195-0.195-0.512-0.195-0.707 0l-1 1c-0.195 0.195-0.195 0.512 0 0.707s0.512 0.195 0.707 0l0.146-0.146v0.293c0 1.654 1.346 3 3 3 0.203 0 0.406-0.021 0.604-0.061 0.271-0.055 0.445-0.32 0.39-0.59s-0.319-0.445-0.59-0.39z"></path><path class="path3" d="M9.146 10.146l-0.146 0.146v-0.293c0-1.654-1.346-3-3-3-0.203 0-0.406 0.021-0.604 0.061-0.271 0.055-0.445 0.32-0.39 0.59s0.32 0.445 0.59 0.39c0.132-0.027 0.268-0.041 0.404-0.041 1.103 0 2 0.897 2 2v0.293l-0.146-0.146c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l1 1c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l1-1c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0z"></path></symbol><symbol id="Lineariconsicon-license" viewBox="0 0 20 20"><title>license</title><path class="path1" d="M18.5 18h-17c-0.827 0-1.5-0.673-1.5-1.5v-13c0-0.827 0.673-1.5 1.5-1.5h17c0.827 0 1.5 0.673 1.5 1.5v13c0 0.827-0.673 1.5-1.5 1.5zM1.5 3c-0.276 0-0.5 0.224-0.5 0.5v13c0 0.276 0.224 0.5 0.5 0.5h17c0.276 0 0.5-0.224 0.5-0.5v-13c0-0.276-0.224-0.5-0.5-0.5h-17z"></path><path class="path2" d="M9.5 6h-6c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h6c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"></path><path class="path3" d="M9.5 9h-6c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h6c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"></path><path class="path4" d="M9.5 11h-6c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h6c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"></path><path class="path5" d="M9.5 13h-6c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h6c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"></path><path class="path6" d="M8.5 15h-5c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"></path><path class="path7" d="M17.943 6.544l-0.813-0.591-0.311-0.956h-1.005l-0.813-0.591-0.813 0.591h-1.005l-0.311 0.956-0.813 0.591 0.311 0.956-0.311 0.956 0.813 0.591 0.132 0.406c-0.002 0.016-0.002 0.031-0.002 0.047v5c0 0.202 0.122 0.385 0.309 0.462s0.402 0.035 0.545-0.108l1.146-1.146 1.146 1.146c0.096 0.096 0.223 0.147 0.354 0.146 0.064 0 0.129-0.012 0.191-0.038 0.187-0.077 0.309-0.26 0.309-0.462v-5c0-0.016-0.001-0.032-0.002-0.047l0.132-0.406 0.813-0.591-0.311-0.956 0.311-0.956zM13.233 6.926l0.488-0.355 0.187-0.574h0.604l0.488-0.355 0.488 0.355h0.604l0.187 0.574 0.488 0.355-0.187 0.574 0.187 0.574-0.488 0.355-0.187 0.574h-0.604l-0.488 0.355-0.488-0.355h-0.604l-0.187-0.574-0.488-0.355 0.187-0.574-0.187-0.574zM15.354 12.646c-0.195-0.195-0.512-0.195-0.707 0l-0.646 0.646v-3.29h0.187l0.813 0.591 0.813-0.591h0.187v3.29l-0.646-0.646z"></path></symbol><symbol id="Lineariconsicon-calendar-full" viewBox="0 0 20 20"><title>calendar-full</title><path class="path1" d="M18.5 2h-2.5v-0.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v0.5h-10v-0.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v0.5h-2.5c-0.827 0-1.5 0.673-1.5 1.5v14c0 0.827 0.673 1.5 1.5 1.5h17c0.827 0 1.5-0.673 1.5-1.5v-14c0-0.827-0.673-1.5-1.5-1.5zM1.5 3h2.5v1.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-1.5h10v1.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-1.5h2.5c0.276 0 0.5 0.224 0.5 0.5v2.5h-18v-2.5c0-0.276 0.224-0.5 0.5-0.5zM18.5 18h-17c-0.276 0-0.5-0.224-0.5-0.5v-10.5h18v10.5c0 0.276-0.224 0.5-0.5 0.5z"></path><path class="path2" d="M7.5 10h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"></path><path class="path3" d="M10.5 10h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"></path><path class="path4" d="M13.5 10h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"></path><path class="path5" d="M16.5 10h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"></path><path class="path6" d="M4.5 12h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"></path><path class="path7" d="M7.5 12h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"></path><path class="path8" d="M10.5 12h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"></path><path class="path9" d="M13.5 12h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"></path><path class="path10" d="M16.5 12h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"></path><path class="path11" d="M4.5 14h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"></path><path class="path12" d="M7.5 14h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"></path><path class="path13" d="M10.5 14h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"></path><path class="path14" d="M13.5 14h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"></path><path class="path15" d="M16.5 14h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"></path><path class="path16" d="M4.5 16h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"></path><path class="path17" d="M7.5 16h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"></path><path class="path18" d="M10.5 16h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"></path><path class="path19" d="M13.5 16h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"></path><path class="path20" d="M16.5 16h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"></path></symbol><symbol id="Lineariconsicon-spell-check" viewBox="0 0 20 20"><title>spell-check</title><path class="path1" d="M4.5 14c-0.276 0-0.5 0.224-0.5 0.5v0.001c-0.418-0.315-0.938-0.501-1.5-0.501-1.378 0-2.5 1.122-2.5 2.5s1.122 2.5 2.5 2.5c0.562 0 1.082-0.187 1.5-0.501v0.001c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-4c0-0.276-0.224-0.5-0.5-0.5zM2.5 18c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5z"></path><path class="path2" d="M8.5 14c-0.562 0-1.082 0.187-1.5 0.501v-4.001c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v8c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-0.001c0.418 0.315 0.938 0.501 1.5 0.501 1.378 0 2.5-1.122 2.5-2.5s-1.122-2.5-2.5-2.5zM8.5 18c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5z"></path><path class="path3" d="M14.5 19c-1.378 0-2.5-1.122-2.5-2.5s1.122-2.5 2.5-2.5c0.439 0 0.872 0.116 1.25 0.335 0.239 0.138 0.321 0.444 0.183 0.683s-0.444 0.321-0.683 0.183c-0.227-0.131-0.486-0.2-0.75-0.2-0.827 0-1.5 0.673-1.5 1.5s0.673 1.5 1.5 1.5c0.264 0 0.523-0.069 0.75-0.2 0.239-0.138 0.545-0.057 0.683 0.182s0.057 0.545-0.182 0.683c-0.379 0.219-0.811 0.335-1.25 0.335z"></path><path class="path4" d="M11.5 10.5c-0.128 0-0.256-0.049-0.354-0.146l-3-3c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l2.646 2.646 6.646-6.646c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-7 7c-0.098 0.098-0.226 0.146-0.354 0.146z"></path></symbol><symbol id="Lineariconsicon-gift" viewBox="0 0 20 20"><title>gift</title><path class="path1" d="M18.5 5h-3.001c0.315-0.418 0.501-0.938 0.501-1.5 0-1.378-1.122-2.5-2.5-2.5-1.39 0-2.556 1.101-3.127 1.758-0.346 0.397-0.644 0.823-0.873 1.235-0.229-0.412-0.527-0.837-0.873-1.235-0.571-0.656-1.737-1.758-3.127-1.758-1.378 0-2.5 1.122-2.5 2.5 0 0.562 0.187 1.082 0.501 1.5h-3.001c-0.276 0-0.5 0.224-0.5 0.5v3c0 0.276 0.224 0.5 0.5 0.5h0.5v9.5c0 0.827 0.673 1.5 1.5 1.5h14c0.827 0 1.5-0.673 1.5-1.5v-9.5h0.5c0.276 0 0.5-0.224 0.5-0.5v-3c0-0.276-0.224-0.5-0.5-0.5zM11.127 3.414c0.782-0.899 1.647-1.414 2.373-1.414 0.827 0 1.5 0.673 1.5 1.5s-0.673 1.5-1.5 1.5h-3.378c0.173-0.442 0.523-1.032 1.005-1.586zM11 19h-3v-13h3v13zM4 3.5c0-0.827 0.673-1.5 1.5-1.5 0.726 0 1.591 0.515 2.373 1.414 0.482 0.554 0.832 1.144 1.005 1.586h-3.378c-0.827 0-1.5-0.673-1.5-1.5zM1 6h6v2h-6v-2zM2 18.5v-9.5h5v10h-4.5c-0.276 0-0.5-0.224-0.5-0.5zM17 18.5c0 0.276-0.224 0.5-0.5 0.5h-4.5v-10h5v9.5zM18 8h-6v-2h6v2z"></path></symbol><symbol id="Lineariconsicon-earth" viewBox="0 0 20 20"><title>earth</title><path class="path1" d="M17.071 2.929c-1.889-1.889-4.4-2.929-7.071-2.929s-5.182 1.040-7.071 2.929c-1.889 1.889-2.929 4.4-2.929 7.071s1.040 5.182 2.929 7.071c1.889 1.889 4.4 2.929 7.071 2.929s5.182-1.040 7.071-2.929c1.889-1.889 2.929-4.4 2.929-7.071s-1.040-5.182-2.929-7.071zM18.397 6.761c-0.195-0.351-0.685-0.518-1.325-0.736-0.687-0.234-0.93-0.94-1.211-1.758-0.244-0.71-0.496-1.443-1.095-1.899 1.639 1.027 2.924 2.567 3.631 4.393zM15.591 10.191c0.076 0.677 0.154 1.378-0.687 2.322-0.227 0.255-0.36 0.61-0.501 0.986-0.326 0.871-0.634 1.694-1.946 1.706-0.037-0.044-0.141-0.21-0.234-0.733-0.085-0.482-0.134-1.106-0.187-1.765-0.080-1.012-0.171-2.16-0.421-3.112-0.32-1.217-0.857-1.936-1.641-2.198-0.342-0.114-0.692-0.17-1.068-0.17-0.278 0-0.53 0.030-0.752 0.056-0.173 0.020-0.337 0.040-0.475 0.040 0 0-0 0-0 0-0.234 0-0.499 0-0.826-0.748-0.469-1.075-0.123-2.798 1.254-3.707 0.755-0.498 1.276-0.711 1.742-0.711 0.372 0 0.773 0.129 1.342 0.433 0.672 0.358 1.199 0.404 1.583 0.404 0.152 0 0.29-0.008 0.423-0.016 0.112-0.007 0.217-0.013 0.315-0.013 0.22 0 0.398 0.029 0.607 0.171 0.385 0.263 0.585 0.844 0.796 1.458 0.32 0.932 0.683 1.988 1.835 2.38 0.155 0.053 0.421 0.143 0.61 0.222-0.163 0.168-0.435 0.411-0.702 0.649-0.172 0.154-0.367 0.328-0.583 0.525-0.624 0.569-0.55 1.235-0.484 1.822zM1.001 9.923c0.108 0.019 0.224 0.042 0.344 0.067 0.562 0.12 0.825 0.228 0.94 0.289-0.053 0.103-0.16 0.255-0.231 0.355-0.247 0.351-0.555 0.788-0.438 1.269 0.079 0.325 0.012 0.723-0.103 1.091-0.332-0.938-0.513-1.946-0.513-2.996 0-0.026 0.001-0.051 0.001-0.077zM10 19c-3.425 0-6.41-1.924-7.93-4.747 0.262-0.499 0.748-1.603 0.521-2.569 0.016-0.097 0.181-0.331 0.28-0.472 0.271-0.385 0.608-0.863 0.358-1.37-0.175-0.356-0.644-0.596-1.566-0.804-0.214-0.048-0.422-0.087-0.599-0.118 0.536-4.455 4.338-7.919 8.935-7.919 1.578 0 3.062 0.409 4.352 1.125-0.319-0.139-0.608-0.161-0.84-0.161-0.127 0-0.253 0.007-0.375 0.015-0.119 0.007-0.242 0.014-0.364 0.014-0.284 0-0.638-0.034-1.112-0.287-0.724-0.385-1.266-0.55-1.812-0.55-0.676 0-1.362 0.262-2.293 0.876-0.805 0.531-1.411 1.343-1.707 2.288-0.289 0.921-0.258 1.864 0.087 2.654 0.407 0.932 0.944 1.348 1.742 1.348 0 0 0 0 0 0 0.197 0 0.389-0.023 0.592-0.047 0.205-0.024 0.416-0.049 0.635-0.049 0.271 0 0.51 0.038 0.751 0.118 0.439 0.147 0.763 0.639 0.991 1.504s0.314 1.966 0.391 2.936c0.064 0.81 0.124 1.574 0.257 2.151 0.081 0.35 0.185 0.616 0.32 0.813 0.201 0.294 0.489 0.456 0.811 0.456 0.884 0 1.59-0.285 2.099-0.847 0.423-0.467 0.639-1.044 0.813-1.508 0.102-0.273 0.208-0.556 0.311-0.672 1.137-1.277 1.020-2.329 0.934-3.098-0.063-0.564-0.064-0.764 0.164-0.972 0.212-0.193 0.405-0.366 0.575-0.518 0.363-0.324 0.625-0.558 0.809-0.758 0.126-0.138 0.422-0.461 0.34-0.865-0.001-0.004-0.002-0.007-0.002-0.011 0.343 0.951 0.53 1.976 0.53 3.044 0 4.963-4.037 9-9 9z"></path></symbol><symbol id="Lineariconsicon-bullhorn" viewBox="0 0 20 20"><title>bullhorn</title><path class="path1" d="M19.389 3.099c-0.578-1.735-1.346-2.099-1.889-2.099-0.011 0-0.023 0-0.035 0.001-0.553 0.012-1.536 0.299-3.008 0.731-3.084 0.903-7.744 2.269-12.458 2.269-1.14 0-2 1.505-2 3.5s0.86 3.5 2 3.5c0.369 0 0.738 0.008 1.105 0.024l1.666 6.628c0.19 0.756 0.949 1.348 1.729 1.348h1.313c0.433 0 0.801-0.18 1.008-0.495s0.229-0.723 0.060-1.121l-2.577-6.048c3.136 0.462 6.022 1.308 8.154 1.932 1.472 0.431 2.455 0.719 3.008 0.731 0.012 0 0.023 0.001 0.035 0.001 0.542 0 1.31-0.364 1.889-2.099 0.394-1.183 0.611-2.746 0.611-4.401s-0.217-3.218-0.611-4.401zM16 7.5c0-0.513 0.022-1.015 0.064-1.496 0.513 0.052 0.936 0.716 0.936 1.496s-0.422 1.445-0.936 1.496c-0.042-0.481-0.064-0.983-0.064-1.496zM1 7.5c0-1.526 0.592-2.5 1-2.5 1.135 0 2.264-0.076 3.368-0.204-0.237 0.758-0.368 1.697-0.368 2.704s0.13 1.946 0.368 2.704c-1.104-0.128-2.233-0.204-3.368-0.204-0.408 0-1-0.974-1-2.5zM7.961 17.776c0.041 0.096 0.038 0.16 0.026 0.178s-0.069 0.046-0.174 0.046h-1.313c-0.319 0-0.681-0.282-0.759-0.592l-1.588-6.319c0.335 0.027 0.669 0.059 1 0.097l2.808 6.59zM6.489 10.353c-0.304-0.687-0.489-1.748-0.489-2.853 0-1.122 0.18-2.163 0.488-2.852 3.185-0.473 6.096-1.325 8.25-1.957 0.415-0.122 0.811-0.238 1.171-0.339-0.103 0.215-0.203 0.463-0.298 0.747-0.394 1.183-0.611 2.746-0.611 4.401s0.217 3.218 0.611 4.401c0.095 0.284 0.195 0.532 0.298 0.747-0.36-0.101-0.756-0.217-1.171-0.339-2.155-0.631-5.065-1.484-8.25-1.957zM18.44 11.585c-0.373 1.12-0.778 1.415-0.94 1.415s-0.567-0.296-0.94-1.415c-0.157-0.47-0.283-1.009-0.375-1.596 0.486-0.056 0.943-0.331 1.276-0.775 0.348-0.464 0.539-1.073 0.539-1.714s-0.192-1.251-0.539-1.714c-0.333-0.444-0.79-0.719-1.276-0.775 0.093-0.586 0.219-1.126 0.375-1.596 0.373-1.12 0.778-1.416 0.94-1.416s0.567 0.296 0.94 1.415c0.361 1.084 0.56 2.534 0.56 4.085s-0.199 3.001-0.56 4.085z"></path></symbol><symbol id="Lineariconsicon-hourglass" viewBox="0 0 20 20"><title>hourglass</title><path class="path1" d="M16 3.5v-0.5c0-0.392-0.241-0.733-0.717-1.014-0.344-0.203-0.821-0.382-1.419-0.531-1.172-0.293-2.722-0.454-4.364-0.454s-3.192 0.161-4.364 0.454c-0.598 0.149-1.075 0.328-1.419 0.531-0.476 0.281-0.717 0.622-0.717 1.014v0.5c0 2.631 1.593 4.999 4 6.002v1.997c-2.407 1.003-4 3.371-4 6.002v0.5c0 0.392 0.241 0.733 0.717 1.014 0.344 0.203 0.821 0.382 1.419 0.531 1.172 0.293 2.722 0.454 4.364 0.454s3.192-0.161 4.364-0.454c0.598-0.149 1.075-0.328 1.419-0.531 0.476-0.281 0.717-0.623 0.717-1.014v-0.5c0-2.631-1.593-4.999-4-6.002v-1.997c2.407-1.003 4-3.371 4-6.002zM5.612 2.369c1.066-0.238 2.447-0.369 3.888-0.369s2.823 0.131 3.888 0.369c1.15 0.257 1.498 0.534 1.589 0.631-0.091 0.097-0.439 0.374-1.589 0.631-1.066 0.238-2.447 0.369-3.888 0.369s-2.823-0.131-3.888-0.369c-1.15-0.257-1.498-0.534-1.589-0.631 0.091-0.097 0.439-0.374 1.589-0.631zM11.333 12.313c2.193 0.775 3.667 2.86 3.667 5.187v0.473c-0.042 0.057-0.324 0.37-1.612 0.657-1.066 0.238-2.447 0.369-3.888 0.369s-2.823-0.131-3.888-0.369c-1.287-0.288-1.57-0.6-1.612-0.657v-0.473c0-2.327 1.473-4.412 3.667-5.187 0.2-0.071 0.333-0.259 0.333-0.471v-2.683c0-0.212-0.134-0.401-0.333-0.471-1.976-0.699-3.368-2.461-3.624-4.506 0.3 0.135 0.666 0.257 1.093 0.364 1.172 0.293 2.722 0.454 4.364 0.454s3.192-0.161 4.364-0.454c0.428-0.107 0.794-0.229 1.093-0.364-0.256 2.045-1.647 3.807-3.624 4.506-0.2 0.071-0.333 0.26-0.333 0.471v2.683c0 0.212 0.134 0.401 0.333 0.471z"></path><path class="path2" d="M13.667 16.529c-2.262-0.799-3.667-2.726-3.667-5.029v-3.025c0.6-0.059 1.178-0.225 1.723-0.495 0.247-0.123 0.348-0.423 0.225-0.67s-0.423-0.348-0.67-0.225c-0.555 0.276-1.153 0.416-1.778 0.416s-1.223-0.14-1.778-0.416c-0.247-0.123-0.547-0.022-0.67 0.225s-0.022 0.547 0.225 0.67c0.545 0.271 1.122 0.436 1.723 0.495v3.025c0 2.302-1.405 4.229-3.667 5.029-0.21 0.074-0.346 0.279-0.332 0.501s0.172 0.409 0.39 0.458c0.982 0.22 2.477 0.512 4.109 0.512s3.127-0.292 4.109-0.512c0.218-0.049 0.377-0.236 0.39-0.458s-0.122-0.427-0.332-0.501zM9.5 17c-0.877 0-1.701-0.087-2.437-0.205 0.665-0.421 1.244-0.952 1.711-1.575 0.293-0.391 0.536-0.812 0.726-1.254 0.19 0.442 0.433 0.863 0.726 1.254 0.466 0.622 1.045 1.153 1.711 1.575-0.736 0.117-1.56 0.205-2.437 0.205z"></path></symbol><symbol id="Lineariconsicon-clock" viewBox="0 0 20 20"><title>clock</title><path class="path1" d="M16.32 17.113c1.729-1.782 2.68-4.124 2.68-6.613 0-2.37-0.862-4.608-2.438-6.355l0.688-0.688 0.647 0.646c0.098 0.098 0.226 0.146 0.353 0.146s0.256-0.049 0.353-0.146c0.195-0.195 0.195-0.512 0-0.707l-2-2c-0.195-0.195-0.512-0.195-0.707 0s-0.195 0.512 0 0.707l0.647 0.646-0.688 0.688c-1.747-1.576-3.985-2.438-6.355-2.438s-4.608 0.862-6.355 2.438l-0.688-0.688 0.646-0.646c0.195-0.195 0.195-0.512 0-0.707s-0.512-0.195-0.707 0l-2 2c-0.195 0.195-0.195 0.512 0 0.707 0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146l0.646-0.646 0.688 0.688c-1.576 1.747-2.438 3.985-2.438 6.355 0 2.489 0.951 4.831 2.68 6.613l-2.034 2.034c-0.195 0.195-0.195 0.512 0 0.707 0.098 0.098 0.226 0.147 0.354 0.147s0.256-0.049 0.354-0.147l2.060-2.059c1.705 1.428 3.836 2.206 6.087 2.206s4.382-0.778 6.087-2.206l2.059 2.059c0.098 0.098 0.226 0.147 0.354 0.147s0.256-0.049 0.353-0.147c0.195-0.195 0.195-0.512 0-0.707l-2.034-2.034zM1 10.5c0-4.687 3.813-8.5 8.5-8.5s8.5 3.813 8.5 8.5c0 4.687-3.813 8.5-8.5 8.5s-8.5-3.813-8.5-8.5z"></path><path class="path2" d="M15.129 7.25c-0.138-0.239-0.444-0.321-0.683-0.183l-4.92 2.841-3.835-2.685c-0.226-0.158-0.538-0.103-0.696 0.123s-0.103 0.538 0.123 0.696l4.096 2.868c0.001 0.001 0.002 0.001 0.002 0.002 0.009 0.006 0.018 0.012 0.027 0.017 0.002 0.001 0.004 0.003 0.006 0.004 0.009 0.005 0.018 0.010 0.027 0.015 0.002 0.001 0.004 0.002 0.006 0.003 0.010 0.005 0.020 0.009 0.031 0.014 0.006 0.003 0.013 0.005 0.019 0.007 0.004 0.001 0.008 0.003 0.013 0.005 0.007 0.002 0.014 0.004 0.021 0.006 0.004 0.001 0.008 0.002 0.012 0.003 0.007 0.002 0.014 0.003 0.022 0.005 0.004 0.001 0.008 0.002 0.012 0.002 0.007 0.001 0.014 0.002 0.021 0.003 0.005 0.001 0.010 0.001 0.015 0.002 0.006 0.001 0.012 0.001 0.018 0.002 0.009 0.001 0.018 0.001 0.027 0.001 0.002 0 0.004 0 0.006 0 0 0 0-0 0-0s0 0 0.001 0c0.019 0 0.037-0.001 0.056-0.003 0.001-0 0.002-0 0.003-0 0.018-0.002 0.036-0.005 0.054-0.010 0.002-0 0.003-0.001 0.005-0.001 0.017-0.004 0.034-0.009 0.050-0.015 0.003-0.001 0.006-0.002 0.008-0.003 0.016-0.006 0.031-0.012 0.046-0.020 0.004-0.002 0.007-0.004 0.011-0.006 0.005-0.003 0.011-0.005 0.016-0.008l5.196-3c0.239-0.138 0.321-0.444 0.183-0.683z"></path></symbol></defs></svg>


<svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
   <defs>
      <symbol id="oxy-social-icons-icon-linkedin" viewBox="0 0 32 32">
         <title>linkedin</title>
         <path d="M12 12h5.535v2.837h0.079c0.77-1.381 2.655-2.837 5.464-2.837 5.842 0 6.922 3.637 6.922 8.367v9.633h-5.769v-8.54c0-2.037-0.042-4.657-3.001-4.657-3.005 0-3.463 2.218-3.463 4.509v8.688h-5.767v-18z"></path>
         <path d="M2 12h6v18h-6v-18z"></path>
         <path d="M8 7c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z"></path>
      </symbol>
      <symbol id="oxy-social-icons-icon-facebook" viewBox="0 0 32 32">
         <title>facebook</title>
         <path d="M19 6h5v-6h-5c-3.86 0-7 3.14-7 7v3h-4v6h4v16h6v-16h5l1-6h-6v-3c0-0.542 0.458-1 1-1z"></path>
      </symbol>
      <symbol id="oxy-social-icons-icon-pinterest" viewBox="0 0 32 32">
         <title>pinterest</title>
         <path d="M16 2.138c-7.656 0-13.863 6.206-13.863 13.863 0 5.875 3.656 10.887 8.813 12.906-0.119-1.094-0.231-2.781 0.050-3.975 0.25-1.081 1.625-6.887 1.625-6.887s-0.412-0.831-0.412-2.056c0-1.925 1.119-3.369 2.506-3.369 1.181 0 1.756 0.887 1.756 1.95 0 1.188-0.756 2.969-1.15 4.613-0.331 1.381 0.688 2.506 2.050 2.506 2.462 0 4.356-2.6 4.356-6.35 0-3.319-2.387-5.638-5.787-5.638-3.944 0-6.256 2.956-6.256 6.019 0 1.194 0.456 2.469 1.031 3.163 0.113 0.137 0.131 0.256 0.094 0.4-0.106 0.438-0.338 1.381-0.387 1.575-0.063 0.256-0.2 0.306-0.463 0.188-1.731-0.806-2.813-3.337-2.813-5.369 0-4.375 3.175-8.387 9.156-8.387 4.806 0 8.544 3.425 8.544 8.006 0 4.775-3.012 8.625-7.194 8.625-1.406 0-2.725-0.731-3.175-1.594 0 0-0.694 2.644-0.863 3.294-0.313 1.206-1.156 2.712-1.725 3.631 1.3 0.4 2.675 0.619 4.106 0.619 7.656 0 13.863-6.206 13.863-13.863 0-7.662-6.206-13.869-13.863-13.869z"></path>
      </symbol>
      <symbol id="oxy-social-icons-icon-youtube" viewBox="0 0 32 32">
         <title>youtube</title>
         <path d="M31.681 9.6c0 0-0.313-2.206-1.275-3.175-1.219-1.275-2.581-1.281-3.206-1.356-4.475-0.325-11.194-0.325-11.194-0.325h-0.012c0 0-6.719 0-11.194 0.325-0.625 0.075-1.987 0.081-3.206 1.356-0.963 0.969-1.269 3.175-1.269 3.175s-0.319 2.588-0.319 5.181v2.425c0 2.587 0.319 5.181 0.319 5.181s0.313 2.206 1.269 3.175c1.219 1.275 2.819 1.231 3.531 1.369 2.563 0.244 10.881 0.319 10.881 0.319s6.725-0.012 11.2-0.331c0.625-0.075 1.988-0.081 3.206-1.356 0.962-0.969 1.275-3.175 1.275-3.175s0.319-2.587 0.319-5.181v-2.425c-0.006-2.588-0.325-5.181-0.325-5.181zM12.694 20.15v-8.994l8.644 4.513-8.644 4.481z"></path>
      </symbol>
      <symbol id="oxy-social-icons-icon-rss" viewBox="0 0 32 32">
         <title>rss</title>
         <path d="M4.259 23.467c-2.35 0-4.259 1.917-4.259 4.252 0 2.349 1.909 4.244 4.259 4.244 2.358 0 4.265-1.895 4.265-4.244-0-2.336-1.907-4.252-4.265-4.252zM0.005 10.873v6.133c3.993 0 7.749 1.562 10.577 4.391 2.825 2.822 4.384 6.595 4.384 10.603h6.16c-0-11.651-9.478-21.127-21.121-21.127zM0.012 0v6.136c14.243 0 25.836 11.604 25.836 25.864h6.152c0-17.64-14.352-32-31.988-32z"></path>
      </symbol>
      <symbol id="oxy-social-icons-icon-twitter" viewBox="0 0 32 32">
         <title>twitter</title>
         <path d="M32 7.075c-1.175 0.525-2.444 0.875-3.769 1.031 1.356-0.813 2.394-2.1 2.887-3.631-1.269 0.75-2.675 1.3-4.169 1.594-1.2-1.275-2.906-2.069-4.794-2.069-3.625 0-6.563 2.938-6.563 6.563 0 0.512 0.056 1.012 0.169 1.494-5.456-0.275-10.294-2.888-13.531-6.862-0.563 0.969-0.887 2.1-0.887 3.3 0 2.275 1.156 4.287 2.919 5.463-1.075-0.031-2.087-0.331-2.975-0.819 0 0.025 0 0.056 0 0.081 0 3.181 2.263 5.838 5.269 6.437-0.55 0.15-1.131 0.231-1.731 0.231-0.425 0-0.831-0.044-1.237-0.119 0.838 2.606 3.263 4.506 6.131 4.563-2.25 1.762-5.075 2.813-8.156 2.813-0.531 0-1.050-0.031-1.569-0.094 2.913 1.869 6.362 2.95 10.069 2.95 12.075 0 18.681-10.006 18.681-18.681 0-0.287-0.006-0.569-0.019-0.85 1.281-0.919 2.394-2.075 3.275-3.394z"></path>
      </symbol>
      <symbol id="oxy-social-icons-icon-instagram" viewBox="0 0 32 32">
         <title>instagram</title>
         <path d="M16 2.881c4.275 0 4.781 0.019 6.462 0.094 1.563 0.069 2.406 0.331 2.969 0.55 0.744 0.288 1.281 0.638 1.837 1.194 0.563 0.563 0.906 1.094 1.2 1.838 0.219 0.563 0.481 1.412 0.55 2.969 0.075 1.688 0.094 2.194 0.094 6.463s-0.019 4.781-0.094 6.463c-0.069 1.563-0.331 2.406-0.55 2.969-0.288 0.744-0.637 1.281-1.194 1.837-0.563 0.563-1.094 0.906-1.837 1.2-0.563 0.219-1.413 0.481-2.969 0.55-1.688 0.075-2.194 0.094-6.463 0.094s-4.781-0.019-6.463-0.094c-1.563-0.069-2.406-0.331-2.969-0.55-0.744-0.288-1.281-0.637-1.838-1.194-0.563-0.563-0.906-1.094-1.2-1.837-0.219-0.563-0.481-1.413-0.55-2.969-0.075-1.688-0.094-2.194-0.094-6.463s0.019-4.781 0.094-6.463c0.069-1.563 0.331-2.406 0.55-2.969 0.288-0.744 0.638-1.281 1.194-1.838 0.563-0.563 1.094-0.906 1.838-1.2 0.563-0.219 1.412-0.481 2.969-0.55 1.681-0.075 2.188-0.094 6.463-0.094zM16 0c-4.344 0-4.887 0.019-6.594 0.094-1.7 0.075-2.869 0.35-3.881 0.744-1.056 0.412-1.95 0.956-2.837 1.85-0.894 0.888-1.438 1.781-1.85 2.831-0.394 1.019-0.669 2.181-0.744 3.881-0.075 1.713-0.094 2.256-0.094 6.6s0.019 4.887 0.094 6.594c0.075 1.7 0.35 2.869 0.744 3.881 0.413 1.056 0.956 1.95 1.85 2.837 0.887 0.887 1.781 1.438 2.831 1.844 1.019 0.394 2.181 0.669 3.881 0.744 1.706 0.075 2.25 0.094 6.594 0.094s4.888-0.019 6.594-0.094c1.7-0.075 2.869-0.35 3.881-0.744 1.050-0.406 1.944-0.956 2.831-1.844s1.438-1.781 1.844-2.831c0.394-1.019 0.669-2.181 0.744-3.881 0.075-1.706 0.094-2.25 0.094-6.594s-0.019-4.887-0.094-6.594c-0.075-1.7-0.35-2.869-0.744-3.881-0.394-1.063-0.938-1.956-1.831-2.844-0.887-0.887-1.781-1.438-2.831-1.844-1.019-0.394-2.181-0.669-3.881-0.744-1.712-0.081-2.256-0.1-6.6-0.1v0z"></path>
         <path d="M16 7.781c-4.537 0-8.219 3.681-8.219 8.219s3.681 8.219 8.219 8.219 8.219-3.681 8.219-8.219c0-4.537-3.681-8.219-8.219-8.219zM16 21.331c-2.944 0-5.331-2.387-5.331-5.331s2.387-5.331 5.331-5.331c2.944 0 5.331 2.387 5.331 5.331s-2.387 5.331-5.331 5.331z"></path>
         <path d="M26.462 7.456c0 1.060-0.859 1.919-1.919 1.919s-1.919-0.859-1.919-1.919c0-1.060 0.859-1.919 1.919-1.919s1.919 0.859 1.919 1.919z"></path>
      </symbol>
      <symbol id="oxy-social-icons-icon-facebook-blank" viewBox="0 0 32 32">
         <title>facebook-blank</title>
         <path d="M29 0h-26c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h13v-14h-4v-4h4v-2c0-3.306 2.694-6 6-6h4v4h-4c-1.1 0-2 0.9-2 2v2h6l-1 4h-5v14h9c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3z"></path>
      </symbol>
      <symbol id="oxy-social-icons-icon-rss-blank" viewBox="0 0 32 32">
         <title>rss-blank</title>
         <path d="M29 0h-26c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h26c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3zM8.719 25.975c-1.5 0-2.719-1.206-2.719-2.706 0-1.488 1.219-2.712 2.719-2.712 1.506 0 2.719 1.225 2.719 2.712 0 1.5-1.219 2.706-2.719 2.706zM15.544 26c0-2.556-0.994-4.962-2.794-6.762-1.806-1.806-4.2-2.8-6.75-2.8v-3.912c7.425 0 13.475 6.044 13.475 13.475h-3.931zM22.488 26c0-9.094-7.394-16.5-16.481-16.5v-3.912c11.25 0 20.406 9.162 20.406 20.413h-3.925z"></path>
      </symbol>
      <symbol id="oxy-social-icons-icon-linkedin-blank" viewBox="0 0 32 32">
         <title>linkedin-blank</title>
         <path d="M29 0h-26c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h26c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3zM12 26h-4v-14h4v14zM10 10c-1.106 0-2-0.894-2-2s0.894-2 2-2c1.106 0 2 0.894 2 2s-0.894 2-2 2zM26 26h-4v-8c0-1.106-0.894-2-2-2s-2 0.894-2 2v8h-4v-14h4v2.481c0.825-1.131 2.087-2.481 3.5-2.481 2.488 0 4.5 2.238 4.5 5v9z"></path>
      </symbol>
      <symbol id="oxy-social-icons-icon-pinterest-blank" viewBox="0 0 32 32">
         <title>pinterest</title>
         <path d="M16 2.138c-7.656 0-13.863 6.206-13.863 13.863 0 5.875 3.656 10.887 8.813 12.906-0.119-1.094-0.231-2.781 0.050-3.975 0.25-1.081 1.625-6.887 1.625-6.887s-0.412-0.831-0.412-2.056c0-1.925 1.119-3.369 2.506-3.369 1.181 0 1.756 0.887 1.756 1.95 0 1.188-0.756 2.969-1.15 4.613-0.331 1.381 0.688 2.506 2.050 2.506 2.462 0 4.356-2.6 4.356-6.35 0-3.319-2.387-5.638-5.787-5.638-3.944 0-6.256 2.956-6.256 6.019 0 1.194 0.456 2.469 1.031 3.163 0.113 0.137 0.131 0.256 0.094 0.4-0.106 0.438-0.338 1.381-0.387 1.575-0.063 0.256-0.2 0.306-0.463 0.188-1.731-0.806-2.813-3.337-2.813-5.369 0-4.375 3.175-8.387 9.156-8.387 4.806 0 8.544 3.425 8.544 8.006 0 4.775-3.012 8.625-7.194 8.625-1.406 0-2.725-0.731-3.175-1.594 0 0-0.694 2.644-0.863 3.294-0.313 1.206-1.156 2.712-1.725 3.631 1.3 0.4 2.675 0.619 4.106 0.619 7.656 0 13.863-6.206 13.863-13.863 0-7.662-6.206-13.869-13.863-13.869z"></path>
      </symbol>
      <symbol id="oxy-social-icons-icon-youtube-blank" viewBox="0 0 32 32">
         <title>youtube</title>
         <path d="M31.681 9.6c0 0-0.313-2.206-1.275-3.175-1.219-1.275-2.581-1.281-3.206-1.356-4.475-0.325-11.194-0.325-11.194-0.325h-0.012c0 0-6.719 0-11.194 0.325-0.625 0.075-1.987 0.081-3.206 1.356-0.963 0.969-1.269 3.175-1.269 3.175s-0.319 2.588-0.319 5.181v2.425c0 2.587 0.319 5.181 0.319 5.181s0.313 2.206 1.269 3.175c1.219 1.275 2.819 1.231 3.531 1.369 2.563 0.244 10.881 0.319 10.881 0.319s6.725-0.012 11.2-0.331c0.625-0.075 1.988-0.081 3.206-1.356 0.962-0.969 1.275-3.175 1.275-3.175s0.319-2.587 0.319-5.181v-2.425c-0.006-2.588-0.325-5.181-0.325-5.181zM12.694 20.15v-8.994l8.644 4.513-8.644 4.481z"></path>
      </symbol>
      <symbol id="oxy-social-icons-icon-twitter-blank" viewBox="0 0 32 32">
         <title>twitter</title>
         <path d="M32 7.075c-1.175 0.525-2.444 0.875-3.769 1.031 1.356-0.813 2.394-2.1 2.887-3.631-1.269 0.75-2.675 1.3-4.169 1.594-1.2-1.275-2.906-2.069-4.794-2.069-3.625 0-6.563 2.938-6.563 6.563 0 0.512 0.056 1.012 0.169 1.494-5.456-0.275-10.294-2.888-13.531-6.862-0.563 0.969-0.887 2.1-0.887 3.3 0 2.275 1.156 4.287 2.919 5.463-1.075-0.031-2.087-0.331-2.975-0.819 0 0.025 0 0.056 0 0.081 0 3.181 2.263 5.838 5.269 6.437-0.55 0.15-1.131 0.231-1.731 0.231-0.425 0-0.831-0.044-1.237-0.119 0.838 2.606 3.263 4.506 6.131 4.563-2.25 1.762-5.075 2.813-8.156 2.813-0.531 0-1.050-0.031-1.569-0.094 2.913 1.869 6.362 2.95 10.069 2.95 12.075 0 18.681-10.006 18.681-18.681 0-0.287-0.006-0.569-0.019-0.85 1.281-0.919 2.394-2.075 3.275-3.394z"></path>
      </symbol>
      <symbol id="oxy-social-icons-icon-instagram-blank" viewBox="0 0 32 32">
         <title>instagram</title>
         <path d="M16 2.881c4.275 0 4.781 0.019 6.462 0.094 1.563 0.069 2.406 0.331 2.969 0.55 0.744 0.288 1.281 0.638 1.837 1.194 0.563 0.563 0.906 1.094 1.2 1.838 0.219 0.563 0.481 1.412 0.55 2.969 0.075 1.688 0.094 2.194 0.094 6.463s-0.019 4.781-0.094 6.463c-0.069 1.563-0.331 2.406-0.55 2.969-0.288 0.744-0.637 1.281-1.194 1.837-0.563 0.563-1.094 0.906-1.837 1.2-0.563 0.219-1.413 0.481-2.969 0.55-1.688 0.075-2.194 0.094-6.463 0.094s-4.781-0.019-6.463-0.094c-1.563-0.069-2.406-0.331-2.969-0.55-0.744-0.288-1.281-0.637-1.838-1.194-0.563-0.563-0.906-1.094-1.2-1.837-0.219-0.563-0.481-1.413-0.55-2.969-0.075-1.688-0.094-2.194-0.094-6.463s0.019-4.781 0.094-6.463c0.069-1.563 0.331-2.406 0.55-2.969 0.288-0.744 0.638-1.281 1.194-1.838 0.563-0.563 1.094-0.906 1.838-1.2 0.563-0.219 1.412-0.481 2.969-0.55 1.681-0.075 2.188-0.094 6.463-0.094zM16 0c-4.344 0-4.887 0.019-6.594 0.094-1.7 0.075-2.869 0.35-3.881 0.744-1.056 0.412-1.95 0.956-2.837 1.85-0.894 0.888-1.438 1.781-1.85 2.831-0.394 1.019-0.669 2.181-0.744 3.881-0.075 1.713-0.094 2.256-0.094 6.6s0.019 4.887 0.094 6.594c0.075 1.7 0.35 2.869 0.744 3.881 0.413 1.056 0.956 1.95 1.85 2.837 0.887 0.887 1.781 1.438 2.831 1.844 1.019 0.394 2.181 0.669 3.881 0.744 1.706 0.075 2.25 0.094 6.594 0.094s4.888-0.019 6.594-0.094c1.7-0.075 2.869-0.35 3.881-0.744 1.050-0.406 1.944-0.956 2.831-1.844s1.438-1.781 1.844-2.831c0.394-1.019 0.669-2.181 0.744-3.881 0.075-1.706 0.094-2.25 0.094-6.594s-0.019-4.887-0.094-6.594c-0.075-1.7-0.35-2.869-0.744-3.881-0.394-1.063-0.938-1.956-1.831-2.844-0.887-0.887-1.781-1.438-2.831-1.844-1.019-0.394-2.181-0.669-3.881-0.744-1.712-0.081-2.256-0.1-6.6-0.1v0z"></path>
         <path d="M16 7.781c-4.537 0-8.219 3.681-8.219 8.219s3.681 8.219 8.219 8.219 8.219-3.681 8.219-8.219c0-4.537-3.681-8.219-8.219-8.219zM16 21.331c-2.944 0-5.331-2.387-5.331-5.331s2.387-5.331 5.331-5.331c2.944 0 5.331 2.387 5.331 5.331s-2.387 5.331-5.331 5.331z"></path>
         <path d="M26.462 7.456c0 1.060-0.859 1.919-1.919 1.919s-1.919-0.859-1.919-1.919c0-1.060 0.859-1.919 1.919-1.919s1.919 0.859 1.919 1.919z"></path>
      </symbol>
   </defs>
</svg>





  




`

const Editor = props => {
    useEffect(() => {
        init()
    }, [])
    const editorRef = useRef(null);
    const blocksRef = useRef(null);
    const editor = useRef(null);
    const panelTopRef = useRef(null);
    const basicActionsRef = useRef(null);

    const init = () => {
        editor.current = grapesjs.init({
            // Indicate where to init the editor. You can also pass an HTMLElement
            container: editorRef.current,
            // Get the content for the canvas directly from the element
            // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
            fromElement: true,
            // components: htmlString,
            // Size of the editor
            height: '100vh',
            width: 'auto',
            // Disable the storage manager for the moment
            storageManager: false,
            // Avoid any default panel
            panels: { defaults: [] },
            plugins: [parserPostCSS],
            blockManager: {
                appendTo: blocksRef.current,
                blocks: [
                    {
                        id: 'section', // id is mandatory
                        label: '<b>Section</b>', // You can use HTML/SVG inside labels
                        attributes: { class:'gjs-block-section' },
                        content: `<section>
                        <h1>This is a simple title</h1>
                        <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
                        </section>`,
                    }, {
                        id: 'text',
                        label: 'Text',
                        content: '<div data-gjs-type="text">Insert your text here</div>',
                    }, {
                        id: 'image',
                        label: 'Image',
                        // Select the component once it's dropped
                        select: true,
                        // You can pass components as a JSON instead of a simple HTML string,
                        // in this case we also use a defined component type `image`
                        content: { type: 'image' },
                        // This triggers `active` event on dropped components and the `image`
                        // reacts by opening the AssetManager
                        activate: true,
                    }
                ]
            },
        });
        editor.current.Panels.addPanel({
            id: 'panel-top',
            el: panelTopRef.current,
        });
        editor.current.Panels.addPanel({
            id: 'basic-actions',
            el: basicActionsRef.current,
            buttons: [
                {
                    id: 'visibility',
                    active: true, // active by default
                    className: 'btn-toggle-borders',
                    label: '<u>B</u>',
                    command: 'sw-visibility', // Built-in command
                }, {
                id: 'export',
                className: 'btn-open-export',
                label: 'Exp',
                command: 'export-template',
                context: 'export-template', // For grouping context of buttons from the same panel
                }, {
                    id: 'show-json',
                    className: 'btn-show-json',
                    label: 'JSON',
                    context: 'show-json',
                    command(editor) {
                    editor.Modal.setTitle('Components JSON')
                        .setContent(`<textarea style="width:100%; height: 250px;">
                        ${JSON.stringify(editor.getComponents())}
                        </textarea>`)
                        .open();
                    },
                }
                ],
            });
    }
    
    return (
        <>
            <div className="panel-top-wrapper">
                <div ref={panelTopRef} className="panel__top">
                    <div ref={basicActionsRef} className="panel__basic-actions"></div>
                </div>
            </div>
            <div ref={editorRef} className="editor" dangerouslySetInnerHTML={{__html: htmlString}} />
            <div ref={blocksRef} className="blocks"></div>
        </>
    )
}

export default Editor;