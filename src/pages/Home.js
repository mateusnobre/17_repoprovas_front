import styled from 'styled-components'
import Button from '../components/Button'
import Bottom from '../components/Bottom'
import Title from '../components/Title'
export default function Home() {
    return(
        <HomeBox>
            <Title/>
            <Button text="Quero ver provas antigas" route='/exams'/>
            <Button text="Quero enviar uma prova antiga" route='/new-exam'/>
            <Bottom left_route='/sign-in' right_route='/sign-up'/>
        </HomeBox>
    )
}

const HomeBox = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`