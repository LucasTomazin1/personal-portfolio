import styled from "styled-components";
import { SocialLinks } from "./social-links/SocialLinks";

export const Footer = () => {
  return (
    <Container>
      <SocialLinks />
      <span>Designed and coded by Lucas Tomazini</span>
    </Container>
  );
};

const Container = styled.section`
  background-color: #13131b;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem;
  width: 100%;
  max-width: 100vw;

  span {
    font-weight: 400;
    font-size: 2rem;
    color: #a9a9a9;
    opacity: 0.5;
    text-align: center;
  }

   @media (max-width: 425px) {
    padding: 2.5rem;
    
    span {
      font-size: 1.5rem; 
    }
  }
`;
