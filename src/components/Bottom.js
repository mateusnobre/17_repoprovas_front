import styled from 'styled-components'
import { Link } from 'react-router-dom'
import colors from  './Colors'
export default function Bottom(props){
    return(
        <BottomBox>
            <LinkBox>
                <Link to={props.left_route}>
                   Login
                </Link>
            </LinkBox>
            <LinkBox>
                <Link to={props.right_route}>
                   Cadastro
                </Link>
            </LinkBox>
        </BottomBox>
    )
}

const BottomBox = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: ${colors.orange};

    height: 46px;
    margin-bottom: 50px;
    border-radius: 5px;
    text-align: center;
    line-height: 46px;
    font-weight: 700;
    user-select: none;
    border: none;
    :hover{
        opacity: 0.8;
    }
`
const LinkBox = styled.div`
    width: 100px;
    color: white;
    margin-left: 30px;
    margin-right: 30px;
    border-radius: 5px;
    border: 1px solid;
    text-decoration: underline; 
`