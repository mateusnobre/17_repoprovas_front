import { DropdownButton, Dropdown} from "react-bootstrap";
import React from "react";

export default function DropdownInput(props){
    return(
        <DropdownButton drop="down" id="dropdown-basic-button" title={props.title}>
            {props.items.map((i) => (
              <Dropdown.Item>{i.name}</Dropdown.Item>
            ))}
        </DropdownButton>
    )
}