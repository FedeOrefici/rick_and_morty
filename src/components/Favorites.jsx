import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const ContainerCard = styled.div`
   background: linear-gradient(to bottom, #32CD32 0%, #7CFC00 50%, #383838 50%, #383838 100%);
   width: 250px;
   height: 350px;
   border-radius: 5%;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   margin: 20px;
   color: white;
   padding: 20px;
   box-shadow: 1px 1px 10px 1px #212124;
`;


const DivSpeciesGender = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-around;
   border-top: .5px solid gray;
   width: 100%;
   margin-bottom: 20px;
`;



const Favorites = () => {

    const { myFavorites } = useSelector(state => state);

    const characters = {
        Female: {
           label: 'female',
           color: 'pink'
        },
  
        Male: {
           label: 'male',
           color: 'skyblue'
        }
     };

  return (
    <div>
        <ContainerMainCards>
            {
                myFavorites.map((character) => {
                    return (
                    <ContainerCard>
                        <img className="img" src={character.image} alt="img" />
                            <h1 className="name" style={{textDecoration: 'none'}}>{character.name}</h1>  
                            <DivSpeciesGender>
                                <p className="species">{character.species}</p>
                                <span className="material-symbols-outlined">account_circle</span>
                                <p className="gender">{character.gender}</p> 
                                    <span className="material-symbols-outlined" 
                                            style={{color: characters[character.gender].color}}>
                                            {characters[character.gender].label}
                                    </span>
                            </DivSpeciesGender>
            </ContainerCard>
                    )
                })
            }
        </ContainerMainCards>
    </div>
  )
}

export default Favorites;
