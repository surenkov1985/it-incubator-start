import { createGlobalStyle } from "styled-components";
import { myTheme } from "./Theme.styled";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    background-color: ${myTheme.colors.gray.dark};
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
    
`;
