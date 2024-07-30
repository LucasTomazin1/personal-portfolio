import styled from "styled-components";
import { Project } from "./Project";
import GithubImage from "../../assets/images/api-github.png";
import GtaImage from "../../assets/images/clone-gta.png";
import FormImage from "../../assets/images/validacao-formulario.png";
import PokedexImage from "../../assets/images/pokedex.png";
import ECommerceImage from "../../assets/images/e-commerce.png";
const BASE_URL = "https://lucastomazin1.github.io/";
const BASE_REP = "https://github.com/LucasTomazin1/";

export const Projects = () => {
  return (
    <Container id="projects">
      <h2>Projetos</h2>
      <AllProjects>
        <h3>Destaques</h3>
        <MainProjects>
          <Project
            title="Pokédex"
            src={PokedexImage}
            link={`${BASE_URL}pokedex`}
            Replink={`${BASE_REP}pokedex`}
            technology="React, JavaScript, Css-in-JS"
          />
          <Project
            title="E-commerce (em desenvolvimento)"
            src={ECommerceImage}
            link={`${BASE_URL}e-commerce`}
            Replink={`${BASE_REP}e-commerce`}
            technology="React, TypeScript, Css-in-JS"
          />
        </MainProjects>
        <h3>Outros Projetos</h3>
        <OtherProjects>
          <Project
            title="GitHub API"
            src={GithubImage}
            link={`${BASE_URL}quest-api-github`}
            Replink={`${BASE_REP}quest-api-github`}
            technology="HTML 5, CSS 3, JavaScript"
          />
          <Project
            title="GTA V landing page"
            src={GtaImage}
            link={`${BASE_URL}projeto-gta`}
            Replink={`${BASE_REP}projeto-gta`}
            technology="HTML 5, CSS 3, JavaScript"
          />
          <Project
            title="Validação de formulário"
            src={FormImage}
            link={`${BASE_URL}quest-api-github`}
            Replink={`${BASE_REP}quest-formulario-javascript`}
            technology="HTML 5, CSS 3, JavaScript"
          />
        </OtherProjects>
      </AllProjects>
    </Container>
  );
};

const AllProjects = styled.div`
  h3 {
    align-self: flex-start;
  }
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10rem;

  h3::after {
    content: "";
    display: block;
    width: 75%;
    border-bottom: solid 2px #8257e6;
    position: absolute;
    bottom: 0;
  }

  @media (max-width: 1024px) {
    padding: 8rem;
  }

  @media (max-width: 768px) {
    padding: 6rem;
    padding-top: 8rem;
  }

  @media (max-width: 425px) {
    padding: 4rem;
    padding-top: 8rem;
    }
    
    @media (max-width: 320px) {
        padding: 3rem;
        padding-top: 7rem;
  }
`;

const MainProjects = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 10rem;
  gap: 2rem;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    padding-bottom: 8rem;
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    padding-bottom: 6rem;
  }

  @media (max-width: 425px) {
    padding-bottom: 4rem;
  }

  @media (max-width: 320px) {
    padding-bottom: 3rem;
  }
`;

const OtherProjects = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 10rem;
  gap: 2rem;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    padding-bottom: 8rem;
  }

  @media (max-width: 768px) {
    padding-bottom: 6rem;
    gap: 1.5rem;
  }

  @media (max-width: 425px) {
    padding-bottom: 4rem;
  }

  @media (max-width: 320px) {
    padding-bottom: 3rem;
  }
`;
