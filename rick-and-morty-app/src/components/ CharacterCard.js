import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

// src/components/CharacterCard.js
import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import './CharacterCard.css';  // Import CharacterCard specific styles

const CharacterCard = ({ character }) => (
  <Card className="character-card">
    <img src={character.image} alt={character.name} />
    <div className="card-body">
      <h3>{character.name}</h3>
      <p>Status: {character.status}</p>
      <p>Gender: {character.gender}</p>
      <Link to={`/character/${character.id}`}>View Details</Link>
    </div>
  </Card>
);

export default CharacterCard;

