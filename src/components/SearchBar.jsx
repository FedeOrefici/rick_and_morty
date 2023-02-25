import { useState } from "react";
import styled from "styled-components";


//----------Estilos del SearchBar----------//

const DivInputButton = styled.div`
   display: flex;
   width: 30%;
   justify-content: center;
   align-items: center;
   gap: 10px;
   width: 400px;
`;

const InputSearch = styled.input`
   width: 200px;
   height: 25px;
   border-radius: 3px;
   border: none;
`;

//----------Componente del SearchBar----------//

const SearchBar = ({onSearch}) => {
   const [character, setCharacter] = useState('');
   const handleChange = (event) => {
      setCharacter(event.target.value)
   }
   return (
      <div>
         <DivInputButton>
            <InputSearch type='search' onChange={handleChange} />
               <div onClick={() =>onSearch(character)}>
                  <span 
                  className="material-symbols-outlined" 
                  style={{color: 'white', marginTop: '5px', cursor: 'pointer'}}
                  >search</span>
               </div>
         </DivInputButton>
      </div>   
   );
}

export default SearchBar;
