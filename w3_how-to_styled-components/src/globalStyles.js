import { createGlobalStyle } from "styled-components";

//  FONT
import DMSansBold from './fonts/DMSans-Bold.ttf';
import DMSansBoldItalic from './fonts/DMSans-BoldItalic.ttf';
import DMSansItalic from './fonts/DMSans-Italic.ttf';
import DMSansMediumItalic from './fonts/DMSans-MediumItalic.ttf';
import DMSansMedium from './fonts/DMSans-Medium.ttf';
import DMSansRegular from './fonts/DMSans-Regular.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'DM Sans';
    src: url(${DMSansItalic}) format('truetype');
    font-weight: normal;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'DM Sans';
    src: url(${DMSansBoldItalic}) format('truetype');
    font-weight: bold;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'DM Sans';
    src: url(${DMSansBold}) format('truetype');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'DM Sans';
    src: url(${DMSansMediumItalic}) format('truetype');
    font-weight: 500;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'DM Sans';
    src: url(${DMSansMedium}) format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'DM Sans';
    src: url(${DMSansRegular}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

* {
    font-family: 'DM Sans';
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ligthgrey;
  }

  #screen {
    width: 100%;
    max-width: 1200px;
    margin: auto;

    display: flex;
    flex-direction: column;
  }

  #pageContainer {
    padding: 30px;
    display: flex;
  }
`;

export default GlobalStyle

