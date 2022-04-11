import React from "react";
import { gql, useQuery} from '@apollo/client';
import './Todo.css'

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
let getPokemonDetail = {
  name: "charmander"
};

export const Todos = () => {
  const { loading: loadingPokemons, error: errorPokemons, data: pokemonsList } = useQuery(GET_POKEMONS, {
        variables: getPokemonList
    });
  const { loading: loadingPokemonDetail, error: errorPokemonDetail, data: pokemonDetail} = useQuery(GET_POKEMON_DETAIL, {
        variables: getPokemonDetail
    });

  if (loadingPokemons) return 'Loading...';
  if (errorPokemons) return `Error! ${errorPokemons.message}`;

//   console.log('Response from server', pokemonDetail.pokemon.moves);
//   getPokemonDetail = pokemonsList.pokemons.results.map(pokemon => (pokemon.name))
//   console.log(getPokemonDetail)

  let getPokemonData = pokemonsList.pokemons.results

  const pokemonData = getPokemonData.map(pokemon => {
    const container = {};

    container["name"] = pokemon.name;
    container["image"] = pokemon.image;

    return container;
  });

  console.log(pokemonData)
  return (
    <div className="container">
    {getPokemonData.map(pokemon => (
        //   <li key={pokemon.image}>{pokemon.image}</li>
      <a key={pokemon.url} href={pokemon.url}><img src={pokemon.image}></img><div>{pokemon.name}</div></a>
    ))}
    </div>
  );
};