import axios from 'axios';

import config from 'config';

const initialState = {
  totalCount: 0,
  pagination: {
    offset: 0,
    limit: 20,
  },
  filter: {
    type: '',
  },
  types: [],
  isFetching: false,
  pokemon: {},
  pokemons: [],
};

export const SET_FILTER = 'SET_FILTER';
export const FETCH_TYPE = 'FETCH_TYPE';
export const FETCH_TYPES = 'FETCH_TYPES';
export const FETCH_POKEMON = 'FETCH_POKEMON';
export const FETCH_POKEMONS = 'FETCH_POKEMONS';
export const SET_FETCH_STATUS = 'SET_FETCH_STATUS';

export const TYPE_URL = `https://cors-anywhere.herokuapp.com/${config.apiUrl}/type`;

export const POKEMON_URL = `https://cors-anywhere.herokuapp.com/${config.apiUrl}/pokemon`;

export const POKEMON_IMAGE_URL = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full';

const leftPad = value => '0'.repeat(3 - `${value}`.length) + value;

const getPokemonImageUrl = id => `${POKEMON_IMAGE_URL}/${(id.length < 3) ? leftPad(id) : id}.png`;

export const fetchType = id => async dispatch => {
  try {
    await dispatch({	
      type: SET_FETCH_STATUS,	
      payload: true,
    });
  
    let { data } = await axios.get(`${TYPE_URL}/${id}`);

    // console.log(data);

    let pokemons = [...data.pokemon.map(item => item.pokemon)];
  
    pokemons.forEach((item, index) => {
      const splitArray = item.url.split('/');
      const id = `${splitArray[splitArray.length - 2]}`;
      pokemons[index].id = id;
      if (id.length <= 3) {
        pokemons[index].image = getPokemonImageUrl(id);
      } else {
        pokemons[index].isHidden = true;
      }
    });

    pokemons = pokemons.filter(({ isHidden }) => !isHidden);
  
    const payload = {
      totalCount: pokemons.length,
      pokemons,
    };
  
    await dispatch({	
      type: FETCH_TYPE,	
      payload,
    });

    await dispatch({	
      type: SET_FETCH_STATUS,	
      payload: false,
    });
  } catch(e) {
    console.log(e);
  }
};

export const setFilter = filter => async dispatch => {
  try {
    await dispatch({	
      type: SET_FILTER,	
      payload: filter,
    });

    if (filter.type) {
      await dispatch(fetchType(filter.type));
    } else if (filter.type === '') {
      await dispatch(fetchPokemons({ offset: 0, limit: 20 }, true));
    }
  } catch(e) {
    console.log(e);
  }
};

export const fetchTypes = () => async dispatch => {
  try {
    let { data } = await axios.get(`${TYPE_URL}`);

    const types = [...data.results];
  
    types.forEach((item, index) => {
      const splitArray = item.url.split('/');
      const id = splitArray[splitArray.length - 2];
      types[index].id = id;
    });

    dispatch({	
      type: FETCH_TYPES,	
      payload: types,
    });
  } catch(e) {
    console.log(e);
  }
};

// const getEvolutionArray = (finishArr, chain) => {
//   if (chain.evolves_to) {
//     const infoArr = chain.evolves_to.map((item) => ({
//       // item.evolution_details:
//       level: item.evolution_details.min_level
//     }));
//     finishArr.push(infoArr);
//     chain.evolves_to.forEach((item) => {
//       // if (item.evo)
//     });
//   }
// };

export const fetchPokemon = id => async dispatch => {
  try {
    await dispatch({	
      type: SET_FETCH_STATUS,	
      payload: true,
    });

    const { data: pokemonData } = await axios.get(`${POKEMON_URL}/${id}`);

    const { data: speciesData } = await axios.get(pokemonData.species.url);
  
    const { data: evolutionData } = await axios.get(speciesData.evolution_chain.url);

    let evolution = [];
    let evolutionChain = { ...evolutionData.chain };


    const rec = function rec(evolutionChain) {
      if (!evolutionChain) return;

      let details = evolutionChain['evolution_details'][0];

      const splitArray = evolutionChain.species.url.split('/');
      const id = splitArray[splitArray.length - 2];

      evolution.push({
        name: evolutionChain.species.name,
        minLevel: !details ? 1 : details.min_level,
        minHappiness: !details ? null : details.min_happiness,
        minBeauty: !details ? null : details.min_beauty,
        minAffection: !details ? null : details.min_affection,
        item: !(details && details.item) ? null : details.item.name.split('-').join(' '),
        heldItem: !(details && details.held_item) ? null : details.held_item.name.split('-').join(' '),
        location: !(details && details.location) ? null : details.location.name.split('-').join(' '),
        timeOfDay: !details? '' : details.time_of_day,
        id,
        image: getPokemonImageUrl(id),
      });

      // console.log('QQ', evolutionChain['evolves_to']);
  
      if (evolutionChain.hasOwnProperty('evolves_to')) {
        evolutionChain.evolves_to.forEach((item) => {
          rec(item);
        });
      }
    };
  
    rec(evolutionChain);

    const pokemon = {
      ...pokemonData,
      id,
      image: getPokemonImageUrl(id),
      evolutionChain,
      evolution,
    };

    dispatch({	
      type: FETCH_POKEMON,	
      payload: pokemon,
    });

    await dispatch({	
      type: SET_FETCH_STATUS,	
      payload: false,
    });
  } catch(e) {
    console.log(e);
  }
};

export const fetchPokemons = ({ offset = 0, limit = 20 } = {}, isRewrite = false) => async dispatch => {
  try {
    await dispatch({	
      type: SET_FETCH_STATUS,	
      payload: true,
    });

    let { data } = await axios.get(`${POKEMON_URL}?offset=${offset}&limit=${limit}`);
  
    // console.log(data);

    const pokemons = [...data.results];
  
    pokemons.forEach((item, index) => {
      const splitArray = item.url.split('/');
      const id = splitArray[splitArray.length - 2];
      pokemons[index].id = id;
      pokemons[index].image = getPokemonImageUrl(id);
    });
  
    const payload = {
      totalCount: data.count,
      pagination: {
        offset: offset + limit,
      },
      pokemons,
      isRewrite,
    };

    // for (let i = 0; i < limit; i++) {
    //   const res = await axios.get(data.results[i].url);
    //   payload.pokemons.push({
    //     name: data.results[i].name,
    //     image: getPokemonImageUrl(res.data.id),
    //   })
    //   // console.log(res.data.id, getPokemonImageUrl(res.data.id));
    // }

    await dispatch({	
      type: FETCH_POKEMONS,	
      payload,
    });

    await dispatch({	
      type: SET_FETCH_STATUS,	
      payload: false,
    });
  } catch(e) {
    console.log(e);
  }
};

export const getFilter = ({ pokemon }) => pokemon.filter;

export const getTypes = ({ pokemon }, id) => pokemon.types;

export const getPokemon = ({ pokemon }, id) => pokemon.pokemon;

export const getPokemons = ({ pokemon }) => pokemon.pokemons;

export const getPagination = ({ pokemon }) => pokemon.pagination;

export const getFetchStatus = ({ pokemon }) => pokemon.isFetching;

export default (state = initialState, action) => {
  // console.log(state);
  switch (action.type) {
    case SET_FILTER:
      return ({
        ...state,	
        // totalCount: action.payload.count,
        filter: {
          ...state.filter,
          ...action.payload,
        },
        pagination: {
          ...state.pagination,
          offset: 0,
        },
      });

    case SET_FETCH_STATUS:
      return ({
        ...state,	
        isFetching: !!action.payload,
      });

    case FETCH_TYPE: 
      return ({
        ...state,
        totalCount: action.payload.totalCount,
        pagination: {
          ...state.pagination,
          offset: 0,
        },
        pokemons: [
          ...action.payload.pokemons,
        ],
      });

    case FETCH_TYPES:
      return ({
        ...state,	
        types: [
          ...action.payload,
        ],	
      });

    case FETCH_POKEMON:
      return ({
        ...state,	
        pokemon: {
          ...action.payload,
        },	
      });

    case FETCH_POKEMONS: {
      const pokemons = action.payload.isRewrite
        ? []
        : [...state.pokemons];
      return ({
        ...state,
        totalCount: action.payload.totalCount,
        pagination: {
          ...state.pagination,
          ...action.payload.pagination,
        },
        pokemons: [
          ...pokemons,
          ...action.payload.pokemons,
        ],
      });
    }

     default:	
      return state;	
  }	
};
