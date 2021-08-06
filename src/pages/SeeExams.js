import styled from 'styled-components'
import Button from '../components/Button'
import {Link} from 'react-router-dom'
export default function SeeExams() {
    return(
        <SeeExamsBox>
            <Title>
                Você deseja ver as provas organizadas por professor ou por matéria?
            </Title>
            <Button text="Por professor" route='/exams-by-lecturer'/>
            <Button text="Por matéria" route='/exams-by-course'/>
            <Link to='/'>
                Voltar a página inicial
            </Link>
        </SeeExamsBox>
    )
}

const SeeExamsBox = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Title = styled.div`
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 50px;
    width: 400px;
    text-align: center;
`