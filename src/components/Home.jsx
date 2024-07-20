import styled from "styled-components";
import foto from "../assets/images/foto.png";
import { SocialLinks } from "./social-links/SocialLinks";

export const Home = () => {
  return (
    <Container>
      <Content>
        <span>Olá, eu sou o</span>
        <h1>Lucas Tomazini</h1>
        <p>Desenvolvedor Front-End</p>
        <SocialLinks />
      </Content>
      <ImgContainer>
        <Img src={foto} alt="Lucas Tomazini" />
      </ImgContainer>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  justify-content: center;
  gap: 15rem;
  padding-top: 15rem;
  align-items: center;
  padding-top: 15rem;

  @media (max-width: 1024px) {
    gap: 10rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5rem;
  }

  @media (max-width: 425px) {
    gap: 3rem;
    padding-top: 11rem;
  }

  @media (max-width: 320px) {
  }
`;

const Content = styled.div`
  span {
    font-size: 4.5rem;
    color: #87cefa;
  }
  h1 {
    font-size: 6rem;
    color: #8257e6;
    margin-bottom: 0.5rem;
  }
  p {
    color: #a9a9a9;
    font-size: 2.5rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 1024px) {
    span {
      font-size: 4rem;
    }
    h1 {
      font-size: 5.5rem;
    }
    p {
      font-size: 2.2rem;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
    text-align: center;
    span {
      font-size: 3.5rem;
    }
    h1 {
      font-size: 5rem;
    }
    p {
      font-size: 2rem;
    }
  }

  @media (max-width: 425px) {
    span {
      font-size: 3rem;
    }
    h1 {
      font-size: 4rem;
    }
    p {
      font-size: 1.8rem;
    }
  }

  @media (max-width: 320px) {
    span {
      font-size: 2.5rem;
    }
    h1 {
      font-size: 3.5rem;
    }
    p {
      font-size: 1.5rem;
    }
  }
`;

const ImgContainer = styled.div`
  display: flex;
  background: linear-gradient(
    to top,
    rgba(255, 255, 255, 0),
    rgba(135, 206, 250, 1)
  );
  border-radius: 50%;
  height: 36rem;
  width: 35rem;
  justify-content: center;
  border: solid 0.7rem rgba(130, 87, 230, 0.9);
  overflow: hidden;
  box-shadow: 5px 5px 50px rgba(173, 216, 230, 0.2);

  @media (max-width: 1024px) {
    height: 30rem;
    width: 30rem;
  }

  @media (max-width: 768px) {
    height: 25rem;
    width: 25rem;
  }

  @media (max-width: 425px) {
    height: 20rem;
    width: 20rem;
  }

  @media (max-width: 320px) {
    height: 15rem;
    width: 15rem;
  }
`;

const Img = styled.img`
  padding-left: 5rem;
  border-radius: 50%;

  @media (max-width: 1024px) {
    padding-left: 3.5rem;
  }

  @media (max-width: 425px) {
    padding-left: 3rem;
  }

  @media (max-width: 320px) {
    padding-left: 2rem;
  }
`;
