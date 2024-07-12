import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHtml5, faCss3, faJs, faReact, faGitAlt, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPalette } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"

const icons = {
    "HTML 5": faHtml5,
    "CSS 3": faCss3,
    "JavaScript": faJs,
    "React": faReact,
    "Css-in-JS": faPalette,
    "Git": faGitAlt,
    "Git Hub": faGithub,
};

export const Ability = ({technology}) => {
    const icon = icons[technology]
    return(
        <AbilityCard>
            <h2>{technology}</h2>
            <Icon>
                <FontAwesomeIcon icon={icon} />
            </Icon>
        </AbilityCard>
    )
}

const AbilityCard = styled.li`
    width: 12rem;
    height: 12rem;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #212121;
    border-top-left-radius: 2.5rem;
    border-bottom: solid 2px #8257E6;
    transition: 0.2s;
`

const Icon = styled.div`
    font-size: 5rem;
`