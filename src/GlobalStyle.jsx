import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 10px;
        width: 100%;
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
        @media (max-width: 1024px) {
      h2 {
          font-size: 3.5rem;
      }
      h3 {
          font-size: 1.8rem;
      }
  }

  @media (max-width: 768px) {
      h2 {
          font-size: 3rem;
          margin-bottom: 4rem;
      }
      h3 {
          font-size: 1.6rem;
      }
  }

  @media (max-width: 425px) {
      h2 {
          font-size: 2.5rem;
          margin-bottom: 3rem;
      }
      h3 {
          font-size: 1.4rem;
      }
  }

  @media (max-width: 320px) {
      h2 {
          font-size: 2rem;
                  margin-bottom: 2rem;
      }
      h3 {
          font-size: 1.2rem;
      }
  }
`;
