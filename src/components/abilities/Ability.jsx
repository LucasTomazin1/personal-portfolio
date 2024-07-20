import { icons } from "../icons";
import styled from "styled-components";

export const Ability = ({ technology }) => {
  const IconComponent = icons[technology];

  return (
    <AbilityCard>
      <h5>{technology}</h5>
      <Icon>
        <IconComponent />
      </Icon>
    </AbilityCard>
  );
};

const AbilityCard = styled.li`
  width: 12rem;
  height: 12rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #212121;
  border-top-left-radius: 2.5rem;
  border-bottom: solid 3px #8257e6;
  transition: all 0.3s ease-out;

  h5 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  &:hover {
    transform: scale(1.08);
    color: #8257e6;
    font-weight: 500;
  }

  media (max-width: 1024px) {
    width: 10rem;
    height: 10rem;

    h5 {
      font-size: 1.7rem;
    }
  }

  @media (max-width: 768px) {
    width: 9rem;
    height: 9rem;
    border-top-left-radius: 2rem;

    h5 {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 425px) {
    width: 6rem;
    height: 7rem;
    border-top-left-radius: 1.2rem;
    border-bottom: solid 2px #8257e6;

    h5 {
      font-size: 1rem;
    }
  }

  @media (max-width: 320px) {
    width: 4.5rem;
    height: 5rem;
    border-top-left-radius: 1rem;
    h5 {
      font-size: 0.8rem;
      font-weight: 500;
    }
  }
`;

const Icon = styled.div`
  font-size: 5rem;

  @media (max-width: 1024px) {
    font-size: 4rem;
  }

  @media (max-width: 768px) {
    font-size: 3.5rem;
  }

  @media (max-width: 425px) {
    font-size: 2.5rem;
  }

  @media (max-width: 320px) {
    font-size: 2rem;
  }
`;
