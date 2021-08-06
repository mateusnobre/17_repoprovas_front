import styled from 'styled-components'
import SendExamForm from '../components/SendExamForm'

export default function SendExams() {
    return(
        <SendExamsBox>
            <Title>
                Envie Sua Prova Aqui
            </Title>
            <SendExamForm/>
        </SendExamsBox>
    )
}

const SendExamsBox = styled.div`
    display: flex;
    width: 100vw;
    flex-direction: column;
    align-items: center;
`

const Title = styled.div`
    margin-top: 50px;
    font-size: 50px;
    font-weight: 700;
`