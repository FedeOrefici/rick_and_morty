import { Fragment, useState, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacters } from './redux/actions';
import Nav from './components/Nav';
import Cards from './components/Cards';
import Detail from './components/Detail';
import About from './components/About';
import Form from './components/Form';
import Favorites from './components/Favorites';

function App () {
  const dispatch = useDispatch();
  const allCharacters = useSelector(state => state.allCharacters);

  const location = useLocation();
  const navigate = useNavigate();


  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const username = 'federico@correo.com';
  const password = '123456';

  const login = (userData) => {
    if(userData.username === username && userData.password === password){
      setAccess(true);
      navigate('/home');
    }
  }

  useEffect(() => {
    //si esta en false siempre me redirige a '/'.
    !access && navigate('/')
    // si no se cumple queda en false y se niega el acceso a la pagina
  }, [access]) //queda escuchando los estados de access.


  const onSearch = (character) => {
    fetch(`http://localhost:3001/rickandmorty/onsearch/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
            dispatch(getCharacters(data));
         } else {
            window.alert('No hay personajes con ese ID');
         }
      })
  };

  const onClose = (id) => {
      setCharacters(characters.filter((char) => char.id !== id));
  };

  return (
    <Fragment>
              {(location.pathname === '/') ? <Form login={login} /> : <Nav onSearch={onSearch} />}           
              <Routes>
                <Route path='/home' element={<Cards onClose={onClose}  characters={characters}/>} />
                <Route path='/detail/:detailId' element={<Detail />} /> 
                <Route path='/about' element={<About />} />
                <Route path='/favorites' element={<Favorites />} />
              </Routes>
    </Fragment>
    );
  };

export default App
