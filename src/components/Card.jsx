import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { addCard, deleteCard } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";



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

const Button = styled.button`
   width: 120px;
   height: 30px;
   border-radius: 6px;
   background-color: #383838;
   color: black;
   border: none;
   background-image: linear-gradient(45deg, #32CD32, #7CFC00);
   margin-bottom: 5px;
   
   cursor: pointer;
   :hover {
      transform: scale(1.1);
      transition: .2s;
   }
`;

const DivSpeciesGender = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-around;
   border-bottom: .5px solid gray;
   width: 100%;
   margin-bottom: 20px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`;

const Card = ({name, image, species, gender, id, onClose}) =>  {

   const dispatch = useDispatch();
   const myfavorites = useSelector(state => state.myFavorites);
   const [isFav, setIsFav] = useState(false);

   //aplico propiedad dinámica de un objeto para que los iconos y color cambien
   //en base a si el personaje es masculino o femenino.

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

   const handleFavorite = () => {
      if (isFav){
         setIsFav(false)
         dispatch(deleteCard(id))
      } else {
         setIsFav(true)
         dispatch(addCard({name, image, species, gender, id}))
      }
   }
   
   useEffect(() => {
      myfavorites.forEach((fav) => {
         if (fav.id === id) {
         setIsFav(true);
         }
      });
   }, [myfavorites]);

   const onCloseCard = () => {
      onClose(id);
      dispatch(deleteCard(id))
   }

   return (
      
         <ContainerCard>
         
               { (isFav) 
               ? <button onClick={handleFavorite} className='heartIcon'>
                  ❤️
                  </button>
               : <button onClick={handleFavorite} className='heartIcon'>
                  🤍
                  </button>
               }

                  <img className="img" src={image} alt="img" />
  
               <StyledLink to={`/detail/${id}`}>
                  <h1 className="name" style={{textDecoration: 'none'}}>{name}</h1>  
               </StyledLink>
                  <DivSpeciesGender>
                     <p className="species">{species}</p>
                     <span className="material-symbols-outlined">account_circle</span>
                     <p className="gender">{gender}</p> 
                     <span className="material-symbols-outlined" 
                           style={{color: characters[gender].color}}>
                           {characters[gender].label}
                     </span>
                  </DivSpeciesGender>
                     <Button onClick={onCloseCard}>Close</Button>
         </ContainerCard>
 
   )};






export default Card;
 