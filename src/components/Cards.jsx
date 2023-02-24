import Card from './Card';
import styled from 'styled-components';

const ContainerMainCards = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 100%;
   flex-wrap: wrap;
   
`;


const Cards = (props) => {
   
   const { characters, onClose } = props;
   


   
   return (
      <ContainerMainCards>
         {characters.map((character) => {
            return (
                  <Card
                  key={character.id}
                  name = {character.name}
                  species = {character.species}
                  gender = {character.gender}
                  image = {character.image}
                  onClose={() => onClose(character.id)}
                  /> 
            )
         })}
      </ContainerMainCards>
      );
}


export default Cards;