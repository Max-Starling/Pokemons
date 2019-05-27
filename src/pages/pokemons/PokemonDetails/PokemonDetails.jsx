import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import {
  getPokemon,
  fetchPokemon,
  getFetchStatus,
} from 'resources/pokemon';
import Loading from 'components/Loading';

import {
  Containter,
  Pokemon,
  PokemonImg,
  EvolutionItem,
  // EvolutionItemImg,
  // EvolutionItemTitle,
  Title,
  BlockTitle,
  Stats,
  Stat,
  StatName,
  StatValue,
  Info,
  ProgressBar,
  Progress,
  ProgressContainer,
  EvolutionRow,
} from './PokemonDetails.styled';

const PokemonDetails = ({
  pokemon,
  id,
  fetchPokemon,
  isFetching,
}) => {
  // console.log("pok", pokemon);
  const [isPokemonsLoaded, setIsPokemonsLoaded] = useState(false);
  const fakeLoading = () => {
    PokemonDetails.loadingTimeout = setTimeout(() => setIsPokemonsLoaded(true), 1000);
  }

  useEffect(() => {
    fakeLoading();
    fetchPokemon(id);

    return () => {
      clearTimeout(PokemonDetails.loadingTimeout);
    };
  }, []);

  if (!isPokemonsLoaded || isFetching) return (
    <Loading />
  );

  const stats = pokemon.stats.map(item => [item.stat.name.replace('-', ' '), item.base_stat]);
  const types = pokemon.types.map(item => item.type.name);
  const abilities = pokemon.abilities.map(item => item.ability.name);

  const defineRequirement = (pokemon) => {
    let requirement = '';

    if (pokemon.minLevel) {
      requirement = `Level ${pokemon.minLevel}`;
    } else if (pokemon.minAffection) {
      requirement = `Affection ${pokemon.minAffection}`;
    } else if (pokemon.minHappiness) {
      requirement = `Happiness ${pokemon.minHappiness}`;
    } else if (pokemon.item) {
      requirement = `Item ${pokemon.item}`
    } else if (pokemon.heldItem) {
      requirement = `Held Item ${pokemon.heldItem}`
    } else if (pokemon.minBeauty) {
      requirement = `Beauty ${pokemon.minBeauty}`;
    } else if (pokemon.location) {
      requirement = `Location ${pokemon.location}`;
    }

    return `(${requirement}${pokemon.timeOfDay ? `, ${pokemon.timeOfDay}` : ''})`
  }

  const renderEvolutionItem = (item, index) => {
    if (Array.isArray(item)) {
      return (
        <EvolutionRow key={index}>
          {item.map((it, ind) => renderEvolutionItem(it, `${index}_${ind}`))}
        </EvolutionRow>
      );
    } else {
      return (
        <EvolutionItem key={index}>
          <PokemonImg
            src={item.image}
            isSmall
          />
          <Title isSmall>{item.name}</Title>
          <Title isSmall>{defineRequirement(item)}</Title>
        </EvolutionItem>
      );
    }
  }

  const renderStat = ([name, value], index) => (
    <Stat key={index}>
      <StatName>{name}</StatName>
      <ProgressContainer>
        <ProgressBar><Progress value={value}></Progress></ProgressBar>
        <StatValue>{value}</StatValue>
      </ProgressContainer>
    </Stat>
  );

  return (
    <Containter>
      <Pokemon>
        <PokemonImg
          src={pokemon.image}
        />
        <Title>{pokemon.name}</Title>
        <BlockTitle>Info</BlockTitle>
        <Stats>
          <Stat>
            <StatName>National number</StatName>
            <StatValue>{id}</StatValue>
          </Stat>
          <Stat>
            <StatName>Types</StatName>
            <StatValue>{types.join(', ')}</StatValue>
          </Stat>
          <Stat>
            <StatName>Height</StatName>
            <StatValue>{pokemon.height}</StatValue>
          </Stat>
          <Stat>
            <StatName>Abilities</StatName>
            <StatValue>{abilities.join(', ')}</StatValue>
          </Stat>
        </Stats>
        <BlockTitle>Base Stats</BlockTitle>
        <Stats>
          {stats.map(renderStat)}
        </Stats>
        <BlockTitle>Evolution</BlockTitle>
        {pokemon.evolution.map(renderEvolutionItem)}
      </Pokemon>
    </Containter>
  );
};

const mapStateToProps = state => ({
  pokemon: getPokemon(state),
  isFetching: getFetchStatus(state),
});

const mapDispatchToProps = {
  fetchPokemon,
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetails);
