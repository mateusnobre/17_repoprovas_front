import styled from 'styled-components'
export default function ExamsByLecturer() {
    return(
        <ExamsByLecturerBox>
            <Title>
                Escolha o Professor
            </Title>
        </ExamsByLecturerBox>
    )
}

const ExamsByLecturerBox = styled.div`
    display: flex;
    width: 100vw;
    flex-direction: column;
    align-items: center;
`

const Title = styled.div`
    font-size: 50px;
    font-weight: 700;
`