import React, { useState, useEffect } from 'react';
import { fetchCharacters } from '../services/api';
import CharacterCard from '../components/CharacterCard';
import Filters from '../components/Filters';

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [filters, setFilters] = useState({ name: '', status: '', gender: '' });

  useEffect(() => {
    fetchCharacters(filters).then(setCharacters);
  }, [filters]);

  return (
    <div>
      <Filters onFilterChange={setFilters} />
      <div>
        {characters.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

export default Home;
