import React from "react";
import { gql, useQuery } from '@apollo/client';

const GET_POKEMONS = gql`
query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
        url
        name
        image
      }
    }
  }
`;

const GET_POKEMON_DETAIL = gql`
query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      sprites {
        front_default
      }
      moves {
        move {
          name
        }
      }
      types {
        type {
          name
        }
      }
    }
  }
`;

let getPokemonList = {
  limit: 100,
  offset: 1,
};
let getPokemonDetail = "charmander";

export const Todos = () => {
  const { loading: loadingPokemons, error: errorPokemons, data: listPokemons } = useQuery(GET_POKEMONS, {
        variables: getPokemonList
    });
  const { loading: loadingPokemonDetail, error: errorPokemonDetail, data: pokemonDetail} = useQuery(GET_POKEMON_DETAIL, {
        variables: getPokemonDetail
    });

  if (loadingPokemons) return 'Loading...';
  if (errorPokemons) return `Error! ${errorPokemons.message}`;

  console.log('Response from server', listPokemons);
  getPokemonDetail = listPokemons.pokemons.results.map(pokemon => (pokemon.name))
  console.log(getPokemonDetail)
  
  return (
    <div>
      {listPokemons?.pokemons.results.map(pokemon => (
        <img src={pokemon.image}></img>
      ))}
    </div>
  );
};