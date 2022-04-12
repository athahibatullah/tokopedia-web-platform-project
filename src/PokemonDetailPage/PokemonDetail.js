import React from "react";
import { gql, useQuery} from '@apollo/client';
import { useLocation } from 'react-router-dom';

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

export const PokemonDetail = () => {
    const location = useLocation();
    // const data = location.state
    let getPokemonDetail = {
        name: location.state
      };
    // const image = data['image'];
    const { loading: loadingPokemonDetail, error: errorPokemonDetail, data: pokemonDetail} = useQuery(GET_POKEMON_DETAIL, {
        variables: getPokemonDetail
    });
    if (loadingPokemonDetail) return 'Loading...';
    if (errorPokemonDetail) return `Error! ${errorPokemonDetail.message}`;
    console.log(pokemonDetail.pokemon.moves)
    console.log(pokemonDetail.pokemon.name)
    return (
        <div>
            <h1>Hello Anonim</h1>
            <h2>0 Owned</h2>
        </div>
    )
}