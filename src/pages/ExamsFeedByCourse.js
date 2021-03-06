import styled from 'styled-components'
import Button from '../components/Button'
import { useEffect, useState } from 'react'
import axios from 'axios';
import BaseURL from '../components/BaseURL'
import {Link, useParams} from 'react-router-dom'

export default function ExamsFeedByCourse() {
    const [exams, setExams] = useState([]);
    const { courseId } = useParams();

    function loadExams () {
        const response = axios.get(BaseURL+'/exams');
        response.then( (res) => {
            console.log(parseInt(courseId))
            const filteredCourses = res.data.filter(e => e.course.id === parseInt(courseId))
            console.log(filteredCourses)
            setExams([...filteredCourses])
        })
    }
    const openInNewTab = (url) => {
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
      if (newWindow) newWindow.opener = null
    }
    useEffect(loadExams, [courseId]);

    return(
        <ExamsFeedBox>
            <Title>
                Clique na Prova para abrir o PDF
            </Title>

            {exams.map((e) => (
              <Button
                onClick={() => openInNewTab(e.url)}
                text={e.name}
              />
            ))}
            <Link to='/'>
                Voltar a página inicial
            </Link>
        </ExamsFeedBox>
    )
}

const ExamsFeedBox = styled.div`
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