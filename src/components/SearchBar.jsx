import { useState } from "react";
import styled from "styled-components";
import mainLogo from '../images/rick-and-morty-logo.png';


const BarSearch = styled.div`
   width: 100%;
   height: 100px;
   display: flex;
   align-items: center;
   justify-content: space-between;
`;


const DivInputButton = styled.div`
   display: flex;
   width: 30%;
   justify-content: center;
   align-items: stretch;
   gap: 5px;
   margin-right: 20px;
   margin-top: 20px;
`;


const ButtonSearch = styled.button`
   width: 150px;
   height: 35px;
   border-radius: 6px;
   background-image: linear-gradient(45deg, #32CD32, #7CFC00);
   color: white;
   border: none;
   margin-bottom: 5px;
   cursor: pointer;
`;

const InputSearch = styled.input`
   width: 200px;
   height: 35px;
   border-radius: 3px;
   border: none;
`;


const SearchBar = ({onSearch}) => {

   const [character, setCharacter] = useState('');


   const handleChange = (event) => {
      setCharacter(event.target.value)
   }
   

   return (

      <BarSearch>
         <img src={mainLogo} alt='logo' className="logo"/>

         <DivInputButton>

            <InputSearch
            type='search'
            onChange={handleChange}
            />

            <ButtonSearch onClick={() =>onSearch(character)}>Search</ButtonSearch>

         </DivInputButton>
      </BarSearch>
   );
}

export default SearchBar;
