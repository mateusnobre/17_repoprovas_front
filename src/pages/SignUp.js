import styled from 'styled-components'
import SignUpForm from '../components/SignUpForm'
import { Link } from 'react-router-dom'
import Title from '../components/Title'

export default function SignUp() {
    return(
        <LoginBox>
            <Title/>
            <SignUpForm/>
            <Link to='/sign-in' style={{ textDecoration: 'none'}}>
                <LoginShortcut>
                    Já tem uma conta? Entre agora!
                </LoginShortcut>
            </Link>
            <Link to='/' style={{ textDecoration: 'none'}}>
                <LoginShortcut>
                    Volte para o Menu Principal
                </LoginShortcut>
            </Link>
        </LoginBox>
    )
}

const LoginBox = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const LoginShortcut = styled.div`
    font-weight: 700;
    margin-top: 36px;
    color: white;
`