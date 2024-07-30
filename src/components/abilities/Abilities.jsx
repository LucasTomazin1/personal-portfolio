import styled from "styled-components";
import { Ability } from "./Ability";

export const Abilities = () => {
  return (
    <Section id="abilities">
      <h2>Habilidades</h2>
      <Ul>
        <Ability technology="HTML 5" />
        <Ability technology="CSS 3" />
        <Ability technology="JavaScript" />
        <Ability technology="TypeScript" />
        <Ability technology="React" />
        <Ability technology="Css-in-JS" />
        <Ability technology="Git" />
        <Ability technology="Github" />
      </Ul>
    </Section>
  );
};

const Section = styled.section`
  padding: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  media (max-width: 1024px) {
    padding: 8rem;
  }

  @media (max-width: 768px) {
    padding: 6rem;
    padding-top: 8.5rem;
  }

  @media (max-width: 425px) {
    padding: 4rem;
    padding-top: 7rem;
  }

  @media (max-width: 320px) {
    padding: 2rem;
  }
`;

const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  gap: 2rem;
  flex-wrap: wrap;
  max-width: 40vw;

  media (max-width: 1024px) {
    max-width: 45vw;
  }

  @media (max-width: 768px) {
    max-width: 55vw;
  }

  @media (max-width: 425px) {
    max-width: 70vw;
  }
`;
