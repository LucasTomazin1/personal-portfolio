import styled from "styled-components"

export const NavBar = () => {
    return(
        <Header>
            <Nav>
                <Ul>
                    <li><A href="#">Sobre mim</A></li>
                    <li><A href="#">Habilidades</A></li>
                    <li><A href="#">Projetos</A></li>
                    <li><A href="#" target="_blanc">Curriculo</A></li>
                </Ul>
                <Span>&lt;LucasTomaziniDev /&gt;</Span>
            </Nav>
        </Header>
    )
}

const Header = styled.header`
    width: 100vw;    
    background-color: #13131b;
    border-bottom: solid 2px #8257E6;
    position: fixed;
`

const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 2rem;
    font-size: 2rem;
`

const A = styled.a`
    padding: 1rem;
`

const Span = styled.span`
    font-size: 3rem;
    font-weight: 700;
`

const Ul = styled.ul`
    display: flex;
    gap: 2rem;
`