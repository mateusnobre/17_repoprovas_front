import React from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export default function DropdownInput(props){
    const options = props.items.map((i) => (i.name + " - ID " + i.id))
    function setInputDict(value){
        props.setInput({name: value.split(' - ID ')[0], id: parseInt(value.split(' - ID ')[1])})
    }
    return(
        <Dropdown options={options} onChange={(e) => setInputDict(e.value)} placeholder={`Selecione ${props.title}`} />
    )
}