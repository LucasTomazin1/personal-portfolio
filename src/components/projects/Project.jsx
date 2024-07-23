import styled from "styled-components";
import { icons } from "../icons";

export const Project = ({ title, src, link, Replink, technology }) => {
  const techArray = technology.split(", ");
  return (
    <Container>
      <ProjecCard href={link} target="_blank">
        <Img src={src} alt={title} />
        <Content>
          <h4>{title}</h4>
          <ProjectIcons className={technology}>
            {techArray.map((tech) => {
              const IconComponent = icons[tech];
              return IconComponent ? <IconComponent key={tech} /> : null;
            })}
          </ProjectIcons>
          <span> Ver no GitHub Pages</span>
        </Content>
      </ProjecCard>
      <RepositoryLink href={Replink} target="_blank">
        <span>Acessar repositório</span>
      </RepositoryLink>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease-out;

  span {
    font-size: 1.7rem;
  }

  &:hover {
    transform: scale(1.08);
  }
`;

const ProjecCard = styled.a`
  display: flex;
  justify-content: center;
  max-width: 30rem;
  height: auto;
  position: relative;
  overflow: hidden;
  border-bottom: solid 3px #8257e6;
  border-top-left-radius: 3rem;
  &:hover + a {
    visibility: visible;
  }
`;

const Content = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  h4 {
    font-size: 2rem;
    font-weight: 600;
  }
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const ProjectIcons = styled.div`
  display: flex;
  font-size: 2.5rem;
  gap: 1rem;
`;

const RepositoryLink = styled.a`
  width: 100%;
  max-width: 38rem;
  background-color: #8257e6;
  text-align: center;
  padding: 1.5rem 2.28rem;
  position: absolute;
  top: 100%;
  left: 0;
  transition: all 0.3s ease-out;
  border-bottom-right-radius: 3rem;
  visibility: hidden;

  &:hover {
    visibility: visible;
  }
  @media (max-width: 768px) {
    position: static;
    visibility: visible;
  }
`;
