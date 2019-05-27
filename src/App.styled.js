import { css } from '@emotion/core';

import PokemonSolid from 'assets/fonts/PokemonSolid.ttf';
import PokemonHollow from 'assets/fonts/PokemonHollow.ttf';

export const globalStyles = css`
   * {
    box-sizing: border-box;
  }
  @font-face {
    font-family: "Pokemon Solid";
    src: url(${PokemonSolid}) format("truetype");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "Pokemon Hollow";
    src: url(${PokemonHollow}) format("truetype");
    font-weight: normal;
    font-style: normal;
  }
  body {
    margin: 0;
    font-family: "Pokemon Solid";
    color: #5d2626;
    letter-spacing: 1.5px;
    color: #679fd5;
  }

  a {
    text-decoration: none;
    color: #ffcb05;
  }

  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }
  
  ::-webkit-scrollbar-thumb {
    border-radius: 3.5px;
    background: linear-gradient(240deg,rgba(103,159,213,1) 36%,rgba(255,203,5,0.9) 85%);
  }
`;
