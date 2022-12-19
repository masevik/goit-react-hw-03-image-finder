import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  color: #212121;
  background-color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  }

ul,
ol {
  margin: 0;
  padding-left: 0;
  }

li {
  list-style: none;
  }

img {
  display: block;
  max-width: 100%;
  height: auto;
  }


html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

/*
 * Стили компонента Modal
 */

.Overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
}

.Modal {
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
}
`;
