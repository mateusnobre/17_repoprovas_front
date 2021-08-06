import styled from 'styled-components'
import colors from './Colors'

export default function FormsButton(props){
    return(
        <FormsButtonBox>
            <button type="submit">
                {props.text}
            </button>
        </FormsButtonBox>
    )
}

const FormsButtonBox = styled.div`
    button{
        width: 326px;
        height: 46px;
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
    }
`