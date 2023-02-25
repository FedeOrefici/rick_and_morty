import { Fragment, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Nav from './components/Nav'
import Cards from './components/Cards'
import Detail from './components/Detail'
import About from './components/About'

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
 };
 const onClose = (id) => {
  setCharacters(characters.filter((char) => char.id !== id));
 }; 
 
  return (
    <Fragment>
      <Nav onSearch={onSearch} />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cards' element={<Cards onClose={onClose} characters={characters}/>} />
                <Route path='/detail/:detailId' element={<Detail />} /> 
                <Route path='/about' element={<About />} />
              </Routes>
    </Fragment>

        

  );
};

export default App
