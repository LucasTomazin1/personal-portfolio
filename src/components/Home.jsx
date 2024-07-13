import styled from "styled-components"
import foto from "../assets/images/foto.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope as faEnvelopeRegular } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
export const Home = () => {
    return(
        <Container>
            <Content>
                <span>Olá, eu sou o</span>
                <h1>Lucas Tomazini</h1>
                <p>Desenvolvedor Front-End</p>
                <Links>
                    <li><a href="https://github.com/LucasTomazin1" target="_blanc"><FontAwesomeIcon icon={faGithub} /></a></li>
                    <li><a href="https://www.linkedin.com/in/lucas-tomazini-82042a301/" target="_blanc"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                    <li><a href="https://wa.me/5554996107420" target="_blanc"><FontAwesomeIcon icon={faWhatsapp} /></a></li>
                    <li><a href="mailto:lucasgtomazini@gmail.com" target="_blanc"><FontAwesomeIcon icon={faEnvelopeRegular} /></a></li>
                </Links>
            </Content>
            <ImgContainer>
                <Img src={foto} alt="Lucas Tomazini" />
            </ImgContainer>
        </Container>
    )
}

const Container = styled.section`
    display: flex;
    justify-content: center;
    gap: 15rem;
    padding-top: 15rem;
    align-items: center;
    padding-left: 10rem;
`

const Content = styled.div`
    span{
        font-size: 4.5rem;
        color: #87CEFA;
    }
    h1{
        font-size: 6rem;
        color: #8257E6;
    }
    p{
    color: #A9A9A9;
    font-size: 2.5rem;
    margin-bottom: 2.5rem;
    }
`
const Links = styled.ul`
    display: flex;
    font-size: 3.5rem;
    gap: 2rem;
    transition: all 0.3s ease-out;
    
    li:hover {
        transform: scale(1.08);
        color: #8257E6;
`

const ImgContainer = styled.div`
    display: flex;
    background: linear-gradient(to top, rgba(255, 255, 255, 0), rgba(135,206,250, 1));
    border-radius: 50%;
    height: 36rem;
    width: 35rem;
    justify-content: center;
    border: solid 0.7rem rgba(130, 87, 230, 0.9);
    overflow: hidden;
    box-shadow: 5px 5px 50px rgba(173, 216, 230, 0.2);
`

const Img = styled.img`
    padding-left: 5rem;
    border-radius: 50%;
`