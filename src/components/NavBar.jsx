import styled from "styled-components";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Header>
      <Nav>
        <Hamburger onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </Hamburger>
        <Ul isOpen={isOpen}>
          <li>
            <A href="#about">Sobre mim</A>
          </li>
          <li>
            <A href="#abilities">Habilidades</A>
          </li>
          <li>
            <A href="#projects">Projetos</A>
          </li>
          <li>
            <A href="#" target="_blanc">
              Curriculo
            </A>
          </li>
        </Ul>
        <Span>&lt;DevLucasTomazini /&gt;</Span>
      </Nav>
    </Header>
  );
};

const Header = styled.header`
  width: 100vw;
  background-color: #13131b;
  border-bottom: solid 3px #8257e6;
  position: fixed;
  z-index: 1;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2rem;
  font-size: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const A = styled.a`
  padding: 1rem;
`;

const Span = styled.span`
  font-size: 3rem;
  font-weight: 700;

  @media (max-width: 425px) {
    font-size: 2rem;
    font-weight: 600;
  }

  @media (max-width: 320px) {
    font-size: 2rem;
    font-weight: 600;
  }
`;

const Ul = styled.ul`
  display: flex;
  gap: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    background-color: #13131b;
    position: absolute;
    top: 80px; // Ajustar conforme necessário
    right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    width: 100%;
    height: calc(100vh - 80px);
    justify-content: center;
    align-items: center;
    transition: right 0.3s ease-in-out;
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  font-size: 2rem;
  color: white;

  @media (max-width: 768px) {
    display: block;
  }
`;
