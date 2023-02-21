import styled from 'styled-components'
import './App.css'
import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx'
import SearchBar from './components/SearchBar.jsx'
import characters, { Rick } from './data.js'


const MainDivApp = styled.div`
  background-color: #343A4F;
`;

const ContainerFirst = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App () {
  
  return (
    <MainDivApp>
      <ContainerFirst>
        <Card
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        />
      </ContainerFirst>

      <hr />


        <Cards
          characters={characters}
        />


      <hr />

        <SearchBar
          onSearch={(characterID) => window.alert(characterID)}
        />
 
    </MainDivApp>
  )
}

export default App
