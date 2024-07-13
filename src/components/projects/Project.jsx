import styled from "styled-components"
import { icons } from "../icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Project = ({title, src, link, technology}) => {
    const techArray = technology.split(", ")
    return(
        <ProjecCard  href={link} target="_blank">
            <Img src={src} alt={title}/>
            <Content>
                <h2>{title}</h2>
                <ProjectIcons>
                    {techArray.map((tech) => {
                        const icon = icons[tech];
                        return icon ? <FontAwesomeIcon key={tech} icon={icon} /> : null; 
                    })}
                </ProjectIcons>
            </Content>
        </ProjecCard>
    )
}

const ProjecCard = styled.a`
    display: flex;
    justify-content: center;
    max-width: 38rem;
    height: 24rem;
    position: relative;
    overflow: hidden;
    border-bottom: solid 3px #8257E6;
    border-top-left-radius: 3rem;
    transition: all 0.3s ease-out;
    
    &:hover {
        transform: scale(1.08);
    }
`

const Content = styled.div`
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`

const Img = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover; 
`

const ProjectIcons = styled.div`
    display: flex;
    font-size: 2rem;
    gap: 1rem;
`