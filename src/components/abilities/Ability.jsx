import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { icons } from "../icons"
import styled from "styled-components"

export const Ability = ({technology}) => {
    const icon = icons[technology]
    return(
        <AbilityCard>
            <h5>{technology}</h5>
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
    border-bottom: solid 3px #8257E6;
    transition: all 0.3s ease-out;
    
    h5{
        font-size: 2rem;
        font-weight: 600;
    }
    &:hover {
        transform: scale(1.08);
        color: #8257E6;
        font-weight: 500;
    }
`

const Icon = styled.div`
    font-size: 5rem;
`