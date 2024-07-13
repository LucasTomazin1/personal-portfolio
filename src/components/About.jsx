import styled from "styled-components"

export const AboutMe = () => {
    return(
        <About id="about">
            <h2>Sobre mim</h2>
            <p>
                Sou um desenvolvedor web apaixonado por tecnologia e novos aprendizados. Atualmente, estou me dedicando ao estudo intensivo, adquirindo habilidades em HTML, CSS, JavaScript e React. Tenho uma estrutura organizada para meus projetos e estou aprimorando tanto minhas competências práticas quanto comportamentais e habilidades interpessoais.
            </p>
            <p>                
                Estou em busca de oportunidades que me permitam aprender com profissionais experientes e crescer na área de desenvolvimento web. Estou pronto para enfrentar novos desafios.
            </p>
        </About>
    )
}

const About = styled.div`
padding: 10rem;
margin: 0 20rem;
text-align: center;

    p{
        font-weight: 400;
        font-size: 2rem;
        color: #A9A9A9;
        line-height: 1.6;
    }
`