import styled from 'styled-components'
export default function SendExams() {
    return(
        <SendExamsBox>
            <Title>
                SendExams
            </Title>
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
    font-size: 50px;
    font-weight: 700;
`