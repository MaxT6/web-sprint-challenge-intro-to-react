import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Character from './components/Character';
import styled from 'styled-components';



const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  
  const [data, setData] = useState([]);

  /*
  ** Code below will be used with ID key once I figure that out.

  const [currentDataId, setCurrentDataId] = useState('1');

  const openDetails = mass => {
    setCurrentDataId(mass)
  }

  const closeDetails = () => {
    setCurrentDataId(null)
  }
  */

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.


useEffect(() => {
  axios
    .get('https://swapi.dev/api/people/')
    .then(res => {
      //console.log(res.data);
      setData(res.data);
    })
    .catch(err => console.error(err))

}, [])

// styling for the div appending to root.
const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Bungee Shade', cursive;
 



`



  return (
    <MainDiv className="App">
      <h1 className="Header">Characters</h1>
      {data.map(name => {
        console.log(name);
        return <Character character={name} key={name.mass} />
      })}
    </MainDiv>
  );
}

export default App;
