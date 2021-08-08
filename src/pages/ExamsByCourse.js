import styled from 'styled-components'
import Button from '../components/Button'
import { useEffect, useState } from 'react'
import axios from 'axios';
import BaseURL from '../components/BaseURL'
import {Link} from 'react-router-dom'

export default function ExamsByCourse() {
    const [courses, setCourses] = useState([]);
    function loadCourses () {
        const response = axios.get(BaseURL+'/courses');
        response.then( (res) => {
            setCourses([...res.data])
        })
    }
    
    useEffect(loadCourses, [courses]);

    return(
        <ExamsByCourseBox>
            <Title>
                Escolha a Matéria
            </Title>

            {courses.map((c) => (
              <Button
                text={c.name}
                route={`/exams-feed-by-course/${c.id}`}
              />
            ))}
            <Link to='/'>
                Voltar a página inicial
            </Link>
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
    margin-top: 50px;
    margin-bottom: 30px;
`