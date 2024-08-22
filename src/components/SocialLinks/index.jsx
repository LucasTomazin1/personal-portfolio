import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope as faEnvelopeRegular } from "@fortawesome/free-regular-svg-icons";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export const SocialLinks = () => {
  return (
    <Links>
      <li>
        <a
          href="https://github.com/LucasTomazin1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/lucas-tomazini-82042a301/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </li>
      <li>
        <a
          href="https://wa.me/5554996107420"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </li>
      <li>
        <a
          href="mailto:lucasgtomazini@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelopeRegular} />
        </a>
      </li>
    </Links>
  );
};

const Links = styled.ul`
  display: flex;
  gap: 6rem;
  max-width: 100%;
  font-size: 3.5rem;
  transition: all 0.3s ease-out;
  margin-bottom: 4rem;
  justify-content: space-evenly;
  

  li:hover {
    transform: scale(1.08);
    color: #8257e6;
  }

  @media (max-width: 425px) {
    gap: 2rem;
    max-width: 100%;
    font-size: 2.5rem;
    margin-bottom: 2rem; 
  }
`;
