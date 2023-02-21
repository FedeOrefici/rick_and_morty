import Card from './Card';
import styled from 'styled-components';

const ContainerMainCards = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
`;




export default function Cards(props) {
   
   const { characters } = props;

   return (
   
      <ContainerMainCards>
      
         {characters.map(pj => {
            return (
                  <Card 
                  name = {pj.name}
                  species = {pj.species}
                  gender = {pj.gender}
                  image = {pj.image}
                  onClose = {pj.onClose}
                  /> 
         )
      })}
         
      </ContainerMainCards>
      
   
      );
}
