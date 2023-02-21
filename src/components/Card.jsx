import React from "react";
import styled from "styled-components";


const ContainerCard = styled.div`
   background-color: rgb(73, 80, 91);
   width: 400px;
   height: 500px;
   border-radius: 10px;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
`;

const Button = styled.button`
   border: 1px solid black;
   width: 50px;
   height: 100px;
`;


export default function Card(props) {
   return (
      
         <ContainerCard>
            <img className="img" src={props.image} alt="img" />
            <p className="species">{props.species}</p>
            <h1 className="name">{props.name}</h1>
            <p className="gender">{props.gender}</p>
            <Button className="btn" onClick={props.onClose}>x</Button>
         </ContainerCard>
      
   );
}



