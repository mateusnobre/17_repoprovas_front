import styled from 'styled-components'
import Button from '../components/Button'
import { useEffect, useState } from 'react'
import axios from 'axios';
import BaseURL from '../components/BaseURL'
import {Link, useParams} from 'react-router-dom'

export default function ExamsFeedByLecturer() {
    const [exams, setExams] = useState([]);
    const { lecturerId } = useParams();

    function loadExams () {
        const response = axios.get(BaseURL+'/exams');
        response.then( (res) => {
            const courseList = axios.get(BaseURL+'/courses');
            const exams = res.data
            courseList.then( (c) => {
                const courses = c.data;
                for (let i = 0; i < exams.length; i++){
                    exams[i].lecturer = courses.filter(co => co.id === exams[i].course.id)[0].lecturer
                }
                const filteredLecturers = exams.filter(e => e.lecturer.id === parseInt(lecturerId))
                setExams([...filteredLecturers])
            })
        })
    }
    const openInNewTab = (url) => {
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
      if (newWindow) newWindow.opener = null
    }
    useEffect(loadExams, [lecturerId]);

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