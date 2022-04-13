import React from "react";
import { gql, useQuery} from '@apollo/client';
import { useLocation } from 'react-router-dom';
import './Detail.css'

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

export const Detail = () => {
    const location = useLocation();
    const data = location.state
    let getPokemonDetail = {
        name: data.name
      };
    let pokemonImage = data.image;
    const { loading: loadingPokemonDetail, error: errorPokemonDetail, data: pokemonDetail} = useQuery(GET_POKEMON_DETAIL, {
        variables: getPokemonDetail
    });
    if (loadingPokemonDetail) return 'Loading...';
    if (errorPokemonDetail) return `Error! ${errorPokemonDetail.message}`;
    let pokemonType = pokemonDetail.pokemon.types[0].type.name;
    let pokemonMoves = pokemonDetail.pokemon.moves;
    return (
        <div className="containerDetail">
            <h1>{getPokemonDetail.name}</h1>
            <img src={pokemonImage}></img>
            <h2>Type: {pokemonType}</h2>
            <h2>Move: </h2>
            <ul>
              {/* {pokemonMoves.map(moves => (
                  <li key={moves.move.name}> {moves.move.name}</li>  
                ))} */}
            </ul>
        </div>
    )
}