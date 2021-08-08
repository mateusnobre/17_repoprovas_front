import styled from 'styled-components'
import SendExamForm from '../components/SendExamForm'
import  {Link} from 'react-router-dom'

export default function SendExams() {
    return(
        <SendExamsBox>
            <Title>
                Envie Sua Prova Aqui
            </Title>
            <SendExamForm/>
            <GoBack>
                <Link to='/'>
                    Voltar a página inicial
                </Link>
            </GoBack>
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

const GoBack = styled.div`
    margin-top: 160px;
    font-size: 20px;
    font-weight: 400;
`