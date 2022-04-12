import React from "react";
import { gql, useQuery} from '@apollo/client';
import './PokemonListCatalog.css'
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
  limit: 120,
  offset: 1,
};
let getPokemonDetail = {
  name: "charmander"
};

export const PokemonListCatalog = () => {
  const { loading: loadingPokemons, error: errorPokemons, data: pokemonsList } = useQuery(GET_POKEMONS, {
        variables: getPokemonList
    });
  const { loading: loadingPokemonDetail, error: errorPokemonDetail, data: pokemonDetail} = useQuery(GET_POKEMON_DETAIL, {
        variables: getPokemonDetail
    });

  if (loadingPokemons) return 'Loading...';
  if (errorPokemons) return `Error! ${errorPokemons.message}`;

  let getPokemonData = pokemonsList.pokemons.results
  return (
    <div className="container">
    {getPokemonData.map(pokemon => (
      <a key={pokemon.url} href={pokemon.url}><img src={pokemon.image}></img><div>{pokemon.name}</div></a>
    ))}
    </div>
  );
};