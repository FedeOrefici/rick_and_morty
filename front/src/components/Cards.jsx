import Card from './Card';
import styled from 'styled-components';

const ContainerMainCards = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 90%;
   flex-wrap: wrap;
   margin: auto;
   margin-top: 80px;
   margin-bottom: 80px;
   background-color: #383838;
   border-radius: 6px;
   height: auto;
`;

const Cards = ({characters, onClose}) => {

   return (
      <ContainerMainCards>
         {characters.map((character, idx) => {
            return (
                  <Card
                  key={idx}
                  name={character.name}
                  species={character.species}
                  gender={character.gender}
                  image={character.image}
                  id={character.id}
                  onClose={() => onClose(character.id)}
                  /> 
            )
         })}
      </ContainerMainCards>
      );
}


export default Cards;