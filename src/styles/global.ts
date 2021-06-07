import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@font-face {
  font-family: 'SFProDisplay';
  src: local('SFProDisplay'), url(./fonts/SFProDisplay.ttf) format('truetype');
}

#root {
  width: 100%;
  height: 100%;
}

* {
  margin: 0;
  box-sizing: border-box;
  outline: 0;
  font-family: 'SFProDisplay', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;
