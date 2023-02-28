import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  background: linear-gradient(45deg, #383838 0%, #383838 50%, #32CD32 50%, #7CFC00 100%);
  width: 70%;
  margin: auto;
  display: flex;
  justify-content: space-around;
  height: 500px;
  border-radius: 5px;
  box-shadow: 1px 1px 10px 1px #212124;
  color: white;
  margin-top: 80px;
  margin-bottom: 40px;
`;

const ContainerIconText = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 15px;
`;

const ContainerData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  line-height: 50px;
  margin: auto;
`;


const Detail = () => {
  
  const { detailId } = useParams(); 
  const [character, setCharacter] = useState({});
  
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert('no encuentra elid');
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  

  return (
    <Container>
      <ContainerData>
        {/* aplico conditional chaining para que no rompa el código 
        y busque dentro de la propiedad del objeto, cuando tarda la respuesta*/}
        <ContainerIconText>
          <h2>{character?.name}</h2>
        </ContainerIconText>
          <ContainerData>Status: {character?.status}</ContainerData>
          <ContainerData>Species: {character?.species}</ContainerData>
          <ContainerData>Gender: {character?.gender}</ContainerData>
          <ContainerData>Origin: {character?.origin?.name}</ContainerData>
      </ContainerData>
        <img src={character?.image} alt={character?.name} className='img-data' />

    </Container>
  )
};

export default Detail;



                          
                   