import styled from 'styled-components';
import backgroundImage from './assets/images/web.jpg';
import { Home } from './components/Home'
import { NavBar } from './components/NavBar'
import { GlobalStyle } from './GlobalStyle'
import { AboutMe } from './components/About';
import { Abilities } from './components/abilities/Abilities';
import { Projects } from './components/projects/Projects';


function App() {

  return (
    <>
      <GlobalStyle />
      <NavBar />
      <BackgroundContainer>
        <Home />
        <AboutMe />
        <Abilities />
        <Projects />
      </BackgroundContainer>
    </>
  )
}

export default App

const BackgroundContainer = styled.div`
    width: 100vw;

    background-image: linear-gradient(
        to right,
        rgba(19, 19, 31, 0.9) 0%,
        rgba(19, 19, 31, 0.5) 50%,
        rgba(19, 19, 31, 1) 100%
    ), url(${backgroundImage});
    background-size: contain;
    background-repeat: repeat-y;
    background-position: center top;
    opacity: 1;
`
