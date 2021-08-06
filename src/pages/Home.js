import styled from 'styled-components'
import Button from '../components/Button'

export default function Home() {
    return(
        <HomeBox>
            <Title>
                RepoProvas
            </Title>
            <Button text="Quero ver provas antigas" route='/exams'/>
            <Button text="Quero enviar uma prova antiga" route='/new-exam'/>
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

const Title = styled.div`
    font-size: 50px;
    font-weight: 700;
    margin-bottom: 100px;
`