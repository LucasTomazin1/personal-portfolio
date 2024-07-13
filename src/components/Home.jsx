import styled from "styled-components"
import foto from "../assets/images/foto.png"
import { SocialLinks } from "./social-links/SocialLinks";

export const Home = () => {
    return(
        <Container>
            <Content>
                <span>Olá, eu sou o</span>
                <h1>Lucas Tomazini</h1>
                <p>Desenvolvedor Front-End</p>
                <SocialLinks />
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