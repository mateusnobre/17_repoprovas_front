import styled from 'styled-components'
import Button from '../components/Button'
import { useEffect, useState } from 'react'
import axios from 'axios';
import BaseURL from '../components/BaseURL'
import { Link } from 'react-router-dom'

export default function ExamsByLecturer() {
    const [lecturers, setLecturers] = useState([]);
    function loadLecturers () {
        const response = axios.get(BaseURL+'/lecturers');
        response.then( (res) => {
            setLecturers([...res.data])
        })
    }
    
    useEffect(loadLecturers, [lecturers]);

    return(
        <ExamsByLecturerBox>
            <Title>
                Escolha o Professor
            </Title>

            {lecturers.map((l) => (
              <Button
                text={l.name}
                route={`/exams-feed-by-lecturer/${l.id}`}
              />
            ))}

            <Link to='/'>
                Voltar a página inicial
            </Link>
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
    margin-top: 50px;
    margin-bottom: 30px;
`