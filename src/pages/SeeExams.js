import styled from 'styled-components'
export default function SeeExams() {
    return(
        <SeeExamsBox>
            <Title>
                Você deseja ver as provas organizadas por professor ou por matéria?
            </Title>
        </SeeExamsBox>
    )
}

const SeeExamsBox = styled.div`
    display: flex;
    width: 100vw;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Title = styled.div`
    font-size: 30px;
    font-weight: 700;
`