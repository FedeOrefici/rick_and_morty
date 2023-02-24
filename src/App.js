import styled from 'styled-components'
import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav'
import { useState } from 'react'



const MainDivApp = styled.div`
  background-color: #CAD6E0;
`;



function App () {

  const [characters, setCharacters] = useState([]);
  

  const onSearch = (character) => {
    
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
 }

 const onClose = (id) => {
  setCharacters(characters.filter((char) => char.id !== id));
 }


  return (

    
    <MainDivApp>
      <Nav
      onSearch={onSearch} />

      <Cards 
      onClose={onClose}
      characters={characters} />

    </MainDivApp>
    
  )
}

export default App
