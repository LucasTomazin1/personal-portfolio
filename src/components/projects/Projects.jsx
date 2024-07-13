import styled from 'styled-components';
import { Project } from './Project';
import GithubImage from "../../assets/images/api-github.png"
import GtaImage from "../../assets/images/clone-gta.png"

const BASE_URL = "https://lucastomazin1.github.io/"

export const Projects = () =>{
    return(
        <Container id="projects">
            <h2>Projetos</h2>
            <h3>Destaques</h3>
            <MainProjects>
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
                </MainProjects>
                <h3>Outros Projetos</h3>
                <OtherProjects>
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
                </OtherProjects>
        </Container>
    )
}

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    
        h3::after {
            content: "";
            display: block;
            width: 75%;
            border-bottom: solid 2px #8257E6;
            position: absolute;
            bottom: 0;
        }
`

const MainProjects = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 10rem;
    gap: 2rem;

`

const OtherProjects = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 10rem;
    gap: 2rem;

`