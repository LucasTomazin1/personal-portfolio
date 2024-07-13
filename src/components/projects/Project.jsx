import styled from "styled-components"
import { icons } from "../icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Project = ({title, src, link, Replink, technology}) => {
    const techArray = technology.split(", ")
    return(
        <Container>
            <ProjecCard  href={link} target="_blank">
                <Img src={src} alt={title}/>
                <Content>
                    <h4>{title}</h4>
                    <ProjectIcons>
                        {techArray.map((tech) => {
                            const icon = icons[tech];
                            return icon ? <FontAwesomeIcon key={tech} icon={icon} /> : null; 
                        })}
                    </ProjectIcons>
                    <span> Ver no GitHub Pages</span>
                </Content>
            </ProjecCard>
            <RepositoryLink href={Replink} target="_blank">
                    <span>Acessar repositório</span>
            </RepositoryLink>
        </Container>
    )
}


const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
transition: transform 0.3s ease-out;    

span{
    font-size: 1.7rem;
}

&:hover {
    transform: scale(1.08);
}

`

const ProjecCard = styled.a`
    display: flex;
    justify-content: center;
    max-width: 100%;
    height: 24rem;
    position: relative;
    overflow: hidden;
    border-bottom: solid 3px #8257E6;
    border-top-left-radius: 3rem;
    &:hover + a {
    visibility: visible;
    }
`

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

    h4{
        font-size: 2rem;
        font-weight: 600;
    }
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

const RepositoryLink = styled.a`
    width: 100%; 
    max-width: 38rem;
    background-color: #8257E6; 
    text-align: center;
    padding: 1rem 2.28rem;
    position: absolute;
    top: 100%;
    left: 0;
    transition: all 0.3s ease-out;
    border-bottom-right-radius: 3rem;
    visibility: hidden;

    &:hover {
        visibility: visible;
    }
    `
    