import styled from "styled-components"
import { Ability } from "./Ability"

export const Abilities = () => {
    return(
        <Section>
            <Ul>
                <Ability technology="HTML 5"      />
                <Ability technology="CSS 3"      />
                <Ability technology="JavaScript"  />
                <Ability technology="React"       />
                <Ability technology="Css-in-JS"   />
                <Ability technology="Git"      />
                <Ability technology="Git Hub"     />
            </Ul>
        </Section>
    )
}

const Section = styled.section`
    display: flex;
    justify-content: center;
    margin-bottom: 10rem;
`

const Ul = styled.ul`
    display: flex;
    justify-content: space-around;
    gap: 2rem;
    flex-wrap: wrap;
    width: 40vw;
`