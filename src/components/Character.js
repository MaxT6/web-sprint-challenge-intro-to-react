// Write your Character component here
import React from 'react';


const Character = props => {
    return (
        <div>
            {props.character.name}
        </div>
    )
}



export default Character