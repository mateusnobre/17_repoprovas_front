import styled from 'styled-components'
import Button from '../components/Button'
import axios from 'axios';
import BaseURL from '../components/BaseURL'

export default function ExamsByCourse() {
    return(
        <ExamsByCourseBox>
            <Title>
                Escolha a Matéria
            </Title>
        </ExamsByCourseBox>
    )
}

const ExamsByCourseBox = styled.div`
    display: flex;
    width: 100vw;
    flex-direction: column;
    align-items: center;
`

const Title = styled.div`
    font-size: 50px;
    font-weight: 700;
`