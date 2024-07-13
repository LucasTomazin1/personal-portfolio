import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }
    html {
        font-size: 10px;
        max-width: 1280px;
        background-color: #13131f;
        color: #00FFFF;
        font-family: Montserrat, sans-serif;
        scroll-behavior: smooth;
    }
    a{
        text-decoration: none;
        color: #00FFFF;
    }
    a:hover {
        color: #87CEFA;
        font-weight: 500;
    }    
    li{
        list-style-type: none;
    }
    h2{
        font-size: 4rem;
        font-weight: 600;
        margin-bottom: 5rem;
    }
    h3{
        position: relative;
        display: inline-block;
        font-size: 2rem;
        font-weight: 600;
        padding-bottom: 0.5rem;
        margin-bottom: 3rem;
    }
`