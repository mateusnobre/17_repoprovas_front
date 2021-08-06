import styled from 'styled-components'
import { Link } from 'react-router-dom'
import colors from  './Colors'
export default function Button(props){
    return(
        <ButtonBox>
            <Link onClick={props.onClick} to={props.route}>
                {props.text}
            </Link>
        </ButtonBox>
    )
}

const ButtonBox = styled.div`
    width: 326px;
    height: 46px;
    margin-bottom: 50px;
    background: white;
    border-radius: 5px;
    color: ${colors.orangeLight};
    text-align: center;
    line-height: 46px;
    font-weight: 700;
    user-select: none;
    border: none;
    :hover{
        opacity: 0.8;
    }
`