import styled from "styled-components";

export const AboutMe = () => {
  return (
    <About id="about">
      <h2>Sobre mim</h2>
      <p>
        Sou um desenvolvedor web apaixonado por tecnologia e novos aprendizados.
        Atualmente, estou me dedicando ao estudo intensivo, adquirindo
        habilidades em HTML, CSS, JavaScript e React. Tenho uma estrutura
        organizada para meus projetos e estou aprimorando tanto minhas
        competências práticas quanto comportamentais e habilidades
        interpessoais.
      </p>
      <p>
        Estou em busca de oportunidades que me permitam aprender com
        profissionais experientes e crescer na área de desenvolvimento web.
        Estou pronto para enfrentar novos desafios.
      </p>
    </About>
  );
};

const About = styled.div`
  padding: 10rem;
  margin: 0 20rem;
  text-align: center;

  @media (max-width: 1024px) {
    padding: 8rem;
    margin: 0 15rem;
  }

  @media (max-width: 768px) {
    padding: 6rem;
    margin: 0 10rem;
    padding-top: 8.5rem;
  }

  @media (max-width: 425px) {
    padding: 4rem;
    margin: 0 5rem;
    padding-top: 8rem;
  }

  @media (max-width: 320px) {
    padding: 3rem;
    margin: 0;
    padding-top: 8rem;
  }

  p {
    font-weight: 400;
    font-size: 2rem;
    color: #a9a9a9;
    line-height: 1.6;

    @media (max-width: 1024px) {
      font-size: 1.8rem;
    }

    @media (max-width: 768px) {
      font-size: 1.6rem;
    }

    @media (max-width: 425px) {
      font-size: 1.4rem;
    }

    @media (max-width: 320px) {
      font-size: 1.2rem;
    }
  }
`;
