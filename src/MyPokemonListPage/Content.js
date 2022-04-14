import React, {Component, useState} from "react"
import { useNavigate } from "react-router-dom";
import "./Content.css";

export const Header = () => { 
    
  return (
    <div className="containerHeader">
      <h1>
        My Pokemon List
      </h1>   
    </div>
  )
}

export const Owned = (count) => {
  const Owned = Object.keys({...localStorage}).length;
  return (
    <div className="containerOwned">
        <h1>You owned {Owned} Pokemons so far</h1>
    </div>
  )
}

export const Content = () => {
    let navigate = useNavigate();
    const routeToHome = () => {
        let path = "/"
        navigate(path)
    }
  return (
    <div className="containerContentMyPokemon">
        <button onClick={routeToHome}>Pokemon List</button>
    </div>
  )
}

export const MyCatalog = () => {
  let showPokemon = {...localStorage}
  let key = Object.keys(showPokemon)
  let keyLength = key.length;
  let dataLocal = [];
  
  for(let i=0;i<keyLength;i++){
    dataLocal.push(JSON.parse(localStorage.getItem([key[i]])))
  }
  const [pokeData, setpokeData] = useState(dataLocal);
  function releasePoke(e, id){
    e.preventDefault();
    const newPokeData = pokeData.filter((item) => item.id !== id);
    setpokeData(newPokeData)
    localStorage.removeItem(id)
    window.location.reload();
  }
  return(
    <div className="containerMyCatalog">
      {pokeData.map(pokemon => (
        <div className="myCatalog" key={pokemon.id}>
          <div className="PokemonName">{pokemon.species}</div>
          <img  width="96" height="96" src={pokemon.image} alt={pokemon.species}></img>
          <div className="PokemonName">{pokemon.Uname}</div>
          <button type="button" onClick={e => releasePoke(e, pokemon.id)}>Release</button>
        </div> 
      ))}
    </div>
  )
}
