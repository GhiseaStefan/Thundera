import { createGlobalStyle, styled } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Roboto Slab';
    src: url('/fonts/RobotoSlab-Regular.ttf');
    font-weight: normal;
}

@font-face {
  font-family: 'Roboto Slab';
  src: url('/fonts/RobotoSlab-Bold.ttf');
  font-weight: bold;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto Slab';
}

#root {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
`;

export const MainContent = styled.div`
flex: 1;
`