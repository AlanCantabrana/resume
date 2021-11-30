import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    html,

    * {
    box-sizing: border-box;
    margin: 0;
    }
  

    body {
        font-size: 14px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #ccc;
        position: relative;
        overflow-x: hidden;
    }

    a {
    color: inherit;
    text-decoration: none;
    }

    * {
    box-sizing: border-box;
    }

`
export default GlobalStyle
