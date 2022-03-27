// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const CharacterBox = styled.h2`
    font-family: 'Bungee Inline', cursive;
    color: black;
    border-style: solid black;
    width: 100%
    text-align: left;
    margin: 0 0 0 4%;
`
const CharactersDiv = styled.div`
    display: flex;
    // flex-wrap: wrap;
    height: 10%;
    width: 40%;
    boder-style: solid 1px;
    background-color: lightgrey;
    border: solid;
    margin: 1%;

`



//component below that feeds into App.js. 
const Character = props => {
    return (
        <CharactersDiv>
           
            <CharacterBox>{props.character.name}</CharacterBox>
            {/* <button onClick={() => action(props) }></button> */}
           
        </CharactersDiv>
    )
}



export default Character