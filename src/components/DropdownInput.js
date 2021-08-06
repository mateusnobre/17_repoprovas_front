import styled from "styled-components"
import { DropdownButton, Dropdown} from "react-bootstrap";
import React from "react";

export default function DropdownInput(props){
    return(
        <DropdownButton drop="down" id="dropdown-basic-button" title={props.title}>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
    )
}

const DropdownBox = styled.div`
    margin-bottom: 13px;
    Dropdown {
        width: 326px;
        height: 58px;
        background-color: white;
        color: #000000;
        font-size: 20px;
        padding-left: 15px;
        border: none;
        border-radius: 5px;
    }
`