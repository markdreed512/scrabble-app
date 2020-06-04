import React from 'react'
import styled from 'styled-components'

function Button(props) {
    const Btn = styled.button`
    font-size:40px;
    background-color: teal;
    color: white;
    font-family: arial; 
`
    return (
        <div>
            <Btn>{props.text}</Btn>
        </div>
    )
}

export default Button
