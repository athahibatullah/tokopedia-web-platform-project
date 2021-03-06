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
  let time = new Date();
  let hours = time.getHours();
  let Owned = Object.keys({...localStorage}).length;
  let greet = null;
    if(hours >= 5 && hours < 12){
      greet = "Good Morning!";
    }
    else if(hours >= 12 && hours <= 17){
      greet = "Good Afternoon!";
    }
    else if(hours >= 18 && hours <= 23 || hours >= 0 && hours <= 4){
      greet = "Good Evening!";
    }
  return (
      <div className="containerHello">
          <h1>{greet}</h1>
          <h2>{Owned} Pokemon Owned</h2>
      </div>
  )
}


export const Content = () =>  {
  let navigate = useNavigate();
  const routeToMyPokemon = () => {
      let path = "mypokemon"
      navigate(path)
  }
  return (
      <div className="containerContent">
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
              <img width="96" height="96" src={pokemon.image} alt={pokemon.name}></img>
              <div className="PokemonName">{pokemon.name}</div>
          </Link>
        </div>
        
      ))}
      
    </div>
  );
};