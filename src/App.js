
import React from "react";
/** @jsx jsx */
import { Global, jsx } from '@emotion/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import PokemonList from 'pages/pokemons/PokemonList';
import PokemonDetails from "pages/pokemons/PokemonDetails";
import Layout from "components/Layout";

import { globalStyles } from './App.styled';

const App = () => {
  return(
    <>
      <Router>
        <Layout> 
          <Switch>
            <Route
              exact
              path="/pokemons"
              component={PokemonList}
            />
            <Route
              exact
              path="/pokemons/:id"
              render={({ match }) => <PokemonDetails id={match.params.id} />}
            />
            <Route
              path="*"
              render={() => <Redirect to={{ pathname: "/pokemons" }} />}
            />
          </Switch>
        </Layout>
      </Router>
      <Global styles={globalStyles} />
    </>
  );
}


export default App;