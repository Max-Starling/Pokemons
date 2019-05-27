import React from 'react';
import { Link } from 'react-router-dom';

import {
  Containter,
  Pokemon,
  PokemonImg,
  Title,
} from './PokemonItem.styled';

const PokemonItem = ({
  name = "",
  image = "",
  id,
  index,
}) => {
  return (
    <Containter>
      <Link
        to={`/pokemons/${id}`}
        style={{ height: '100%' }}
      > 
        <Pokemon>
          <PokemonImg
            src={image}
            index={index}
          />
          <Title index={index}>{name}</Title>
        </Pokemon>
      </Link>
    </Containter>
  );
};

export default PokemonItem;
