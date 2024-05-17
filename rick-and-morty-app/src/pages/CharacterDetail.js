import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCharacterById } from '../services/api';
import './CharacterDetail.css';  

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetchCharacterById(id).then(setCharacter);
  }, [id]);

  if (!character) return <div>Loading...</div>;

  return (
    <div className="character-detail">
      <img src={character.image} alt={character.name} />
      <h1>{character.name}</h1>
      <p>Status: {character.status}</p>
      <p>Gender: {character.gender}</p>
    </div>
  );
};

export default CharacterDetail;

