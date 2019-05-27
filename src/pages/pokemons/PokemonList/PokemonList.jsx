import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import {
  getPokemons,
  fetchPokemons,
  fetchTypes,
  getPagination,
  getTypes,
  getFilter,
  setFilter,
  getFetchStatus,
  EvolutionRow,
} from 'resources/pokemon';
import Select from 'components/Select';
import PokemonItem from '../PokemonItem';
import {
  List,
  FilterContainer,
} from './PokemonList.styled.js';
import Loading from 'components/Loading';

const PokemonList = ({
  pokemons,
  types,
  fetchPokemons,
  fetchTypes,
  pagination,
  filter,
  setFilter,
  isFetching,
}) => {
  const [isPokemonsLoaded, setIsPokemonsLoaded] = useState(false);

  const fakeLoading = (delay) => {
    PokemonList.loadingTimeout = setTimeout(() => setIsPokemonsLoaded(true), delay);
  }

  useEffect(() => {
    fakeLoading(1000);
    fetchTypes();
    fetchPokemons({}, true);

    return () => {
      clearTimeout(PokemonList.loadingTimeout);
    };
  }, []);

  
  const handleScroll = () => {
    const doc = document.documentElement;
    if (window.innerHeight + window.pageYOffset === doc.scrollHeight) {
      if (!filter.type) {
        fetchPokemons(pagination);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const renderPokemon = (item, index) => {
    return (
      <PokemonItem
        key={index}
        index={index}
        {...item}
      >
      </PokemonItem>
    );
  };
  
  const allTypes = [{ name: 'all', id: '' }, ...types];

  const onSelectChange = ({ id }) => {
    setFilter({ type: id });
    setIsPokemonsLoaded(false);
    PokemonList.loadingTimeout = setTimeout(() => setIsPokemonsLoaded(true), 200);
  }

  // console.log('reload', offset);

  // console.log(!isPokemonsLoaded, isFetching, !pagination.offset, (!isPokemonsLoaded || isFetching) && !pagination.offset);

  if ((isFetching || !isPokemonsLoaded) && !pagination.offset) return (
    <Loading />
  );

  return (
    <>
      <FilterContainer>
        <Select
          options={allTypes}
          value={filter.type}
          onChange={onSelectChange}
        />
      </FilterContainer>
      <List>
        {pokemons.map(renderPokemon)}
      </List>
    </>
  );
};

const mapStateToProps = state => ({
  pokemons: getPokemons(state),
  pagination: getPagination(state),
  types: getTypes(state),
  filter: getFilter(state),
  isFetching: getFetchStatus(state),
});

const mapDispatchToProps = {
  fetchPokemons,
  fetchTypes,
  setFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
