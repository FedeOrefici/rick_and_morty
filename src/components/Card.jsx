import React from "react";
import styled from "styled-components";


const ContainerCard = styled.div`
   background: linear-gradient(to bottom, #61c7ef 0%, #4833fb 50%, #383838 50%, #383838 100%);
   width: 300px;
   height: 450px;
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
   width: 150px;
   height: 35px;
   border-radius: 6px;
   background-color: #383838;
   color: white;
   border: none;
   background-image: linear-gradient(85deg, #61c7ef, #4833fb);
   margin-bottom: 5px;
   
   cursor: pointer;
   :hover {
      transform: scale(1.1);
      transition: .2s;
   }
`;

const DivSpeciasGender = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-around;
   border-bottom: .5px solid gray;
   width: 100%;
   margin-bottom: 20px;
`;


const Card = (props) =>  {

   //propiedad dinámica de un objeto
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
      
         <ContainerCard>
            <img className="img" src={props.image} alt="img" />
            <h1 className="name">{props.name}</h1>
               <DivSpeciasGender>
                  <p className="species">{props.species}</p>
                  <span className="material-symbols-outlined">account_circle</span>
                  <p className="gender">{props.gender}</p>

                  
                  <span 
                  className="material-symbols-outlined" 
                  style={{color: characters[props.gender].color}}>
                  {characters[props.gender].label}
                  </span>
                  
                  

               </DivSpeciasGender>
                  <Button className="btn" onClick={props.onClose}>Cerrar</Button>
         </ContainerCard>
      
   );
}


export default Card;
