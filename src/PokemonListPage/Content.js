import React from 'react';
import './Content.css';
import { useNavigate } from "react-router-dom";
import { gql, useQuery} from '@apollo/client';
import { Link } from "react-router-dom";

export const Header = () => { 
    
    return (
      <div className="containerHeader">
        <h1>
          Pokemon List
        </h1>   
      </div>
    )
}

export const Hello = () => {
    let Owned = Object.keys({...localStorage}).length;
    return (
        <div className="containerHello">
            <h1>Hello Anonim</h1>
            <h2>{Owned} Pokemon Owned</h2>
        </div>
    )
}


export const Content = () =>  {
  let navigate = useNavigate();
  const routeToDetail = () => {
      let path = "detail"
      navigate(path)
  }
  const routeToMyPokemon = () => {
      let path = "mypokemon"
      navigate(path)
  }
  return (
      <div className="containerContent">
          <input type="text" placeholder="Search"></input>
          <button onClick={routeToMyPokemon}>My Pokemon List</button>
      </div>
  )
}

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
  limit: 898,
  offset: 1,
};

export const PokemonListCatalog = () => {
  const { loading: loadingPokemons, error: errorPokemons, data: pokemonsList } = useQuery(GET_POKEMONS, {
        variables: getPokemonList
    });

  if (loadingPokemons) return 'Loading...';
  if (errorPokemons) return `Error! ${errorPokemons.message}`;

  let getPokemonData = pokemonsList.pokemons.results
  return (
    <div className="container">
      {getPokemonData.map(pokemon => (
        <div className="catalog" key={pokemon.url}>
          <Link to="/detail" state={{name: pokemon.name, image: pokemon.image}} style={ {textDecoration: 'none'}}>
              <img src={pokemon.image}></img>
              <div className="PokemonName">{pokemon.name}</div>
          </Link>
        </div>
        
      ))}
      
    </div>
  );
};