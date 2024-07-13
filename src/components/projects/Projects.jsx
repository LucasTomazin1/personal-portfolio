import styled from 'styled-components';
import { Project } from './Project';
import GithubImage from "../../assets/images/api-github.png"
import GtaImage from "../../assets/images/clone-gta.png"

const BASE_URL = "https://lucastomazin1.github.io/"

export const Projects = () =>{
    return(
        <Container id="projects">
            <Project
                title="GitHub API"
                src={GithubImage}
                link={`${BASE_URL}quest-api-github`}
                technology="HTML 5, CSS 3, JavaScript"
                />
            <Project
                title="GTA V landing page clone"
                src={GtaImage}
                link={`${BASE_URL}projeto-gta`}
                technology="HTML 5, CSS 3, JavaScript"
            />
        </Container>
    )
}

const Container = styled.section`
    display: flex;
    justify-content: center;
    padding-bottom: 10rem;
    gap: 2rem;
`