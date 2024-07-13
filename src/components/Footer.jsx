import styled from "styled-components"
import { SocialLinks } from "./social-links/SocialLinks"

export const Footer = () => {
    return(
        <Container>
            <SocialLinks />
            <span>Feito com 🤍 por Lucas Tomazini</span>
        </Container>
    )
}

const Container = styled.section`
    background-color: #13131b;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5rem;

    span{
        font-weight: 400;
        font-size: 2rem;
        color: #A9A9A9;
        opacity: 0.5
    }
`
