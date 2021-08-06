import Input from './Input'
import FormsButton from './FormsButton'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import baseUrl from './BaseURL';
import DropdownInput from './DropdownInput';

export default function SendExamForm(){    
    const [name, setName] = useState("");
    const [url, setURL] = useState("");
    const history = useHistory();
    const [categories, setCategories] = useState([])
    const [courses, setCourses] = useState([])
    const [lecturers, setLecturers] = useState([])

    function loadCategories () {
        const response = axios.get(baseUrl+'/categories');
        response.then( (res) => {
            setCategories([...res.data])
        })
    }
    function loadCourses () {
        const response = axios.get(baseUrl+'/courses');
        response.then( (res) => {
            setCourses([...res.data])
        })
    }
    function loadLecturers () {
        const response = axios.get(baseUrl+'/lecturers');
        response.then( (res) => {
            setLecturers([...res.data])
        })
    }
    function loadData (){
        loadCategories();
        loadCourses();
        loadLecturers();
    }

    useEffect(loadData, []);
    function trySendExam(event){
        event.preventDefault();        
        if (!name || !url) {
          alert("Prencha os campos");
        }
        else {
            axios.post(baseUrl+'/exams', {
                name: name,
                url: url
            })
            .then((res) => {
                if (res.status === 201){
                    history.push('/');
                }})
            .catch (() => {
                alert("Não foi possível concluir sua solicitação")
            })
        }
    }
    return(
        <SendExamFormBox>
            <form onSubmit={trySendExam}>
                <Input type='text' placeholder='Descrição' input={name} setInput={setName}/>
                <Input type='url' placeholder='URL do PDF' input={url} setInput={setURL}/>
                <DropdownBox>
                    <DropdownInput title='Tipo de Prova' items={categories}/>
                </DropdownBox>
                <DropdownBox>
                    <DropdownInput title='Matéria' items={courses}/>
                </DropdownBox>
                <DropdownBox>
                    <DropdownInput title='Professor' items={lecturers}/>
                </DropdownBox>
                <FormsButton text='Enviar prova'/>
            </form>
        </SendExamFormBox>
    )
}

const SendExamFormBox = styled.div`
    display: flex;
    height: 188px;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`
const DropdownBox = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    width: 326px;
    height: 39px;
    button {
        width: 100%;
    }
`