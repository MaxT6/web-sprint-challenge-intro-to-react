// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const CharacterBox = styled.h2`
    font-family: Trattatello;
    color: black;
    border-style: solid black;
    background-color: blue;
`
const CharactersDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 60%;
    alight-content: center;
`




const Character = props => {
    return (
        <CharactersDiv>
            <div>
                <CharacterBox>{props.character.name}</CharacterBox>
            {/* <button onClick={() => action(props) }></button> */}
            </div>
        </CharactersDiv>
    )
}



export default Character