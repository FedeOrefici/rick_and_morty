import Card from './Card';

export default function Cards(props) {
   
   const { characters } = props;

   return (
   
      <div className='container-main-cards'>
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
         
      </div>
      
   
      );
}
