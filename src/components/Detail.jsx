import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
          window.alert('no encuentra el fucking id');
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  console.log(character.origin)

  return (
    <div>
    {/* aplico conditional chaining para que no rompa el código 
    y busque dentro de la propiedad del objeto, por si tarda la respuesta*/}
      <h2>{character?.name}</h2>
      <p>{character?.status}</p>
      <p>{character?.species}</p>
      <p>{character?.gender}</p>
      <p>{character?.origin?.name}</p>
      <img src={character?.image} alt={character.name} />
    </div>
  )
};

export default Detail;
