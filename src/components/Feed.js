import styled from 'styled-components'
import { useState, useEffect } from "react";
import axios from 'axios';
import BaseURL from './BaseURL'

export default function ExamFeed(props){
    const [exams, setExams] = useState([]);
    function loadExams () {
        const response = axios.get(BaseURL+'/exams');
        response.then( (res) => {
            setExams([...res.data])
        })
    }
    
    useEffect(loadExams, [exams]);
    
    return(
        <ExamFeedBox>
            {exams.map((e) => (
              <Exam
                name={e.name}
                url={e.url}
              />
            ))}
        </ExamFeedBox>
    )
}

const ExamFeedBox = styled.div`
    position: relative;
    display: flex;
    user-select: none;
    flex-direction: column;
    justify-content: flex-start;
    background-color: white;
    line-height: 24px;
    font-size: 20px;
    color: #868686;
    text-align: center;
    width: 87%;
    height: 63vh;
    border-radius: 5px;
    overflow-y: scroll;
`

const Text = styled.div`
    position: absolute;
    color: black;
    font-size: 17px;
    font-weight: 700;
    line-height: 20px;
    left: 15px;
    bottom: 10px;
`

const Funds = styled.div`
    position: absolute;
    color: ${props => props.value > 0 ? '#03AC00' : '#C70000'};
    font-size: 17px;
    font-weight: 400;
    line-height: 20px;
    right: 12px;
    bottom: 10px;
`