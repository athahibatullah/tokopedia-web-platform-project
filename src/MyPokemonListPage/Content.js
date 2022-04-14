import React from "react"
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

export const Owned = () => {
  let Owned = Object.keys({...localStorage}).length;
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
        <input type="text" placeholder="Search"></input>
        <button onClick={routeToHome}>Pokemon List</button>
    </div>
  )
}

export const MyCatalog = () => {
  let showPokemon = {...localStorage}
  let key = Object.keys(showPokemon)
  let keyLength = key.length;
  let pokeData = [];
  function deletePokemon(id){
    console.log(id)
    localStorage.removeItem(id)
  }
  for(let i=0;i<keyLength;i++){
    pokeData.push(JSON.parse(localStorage.getItem([key[i]])))
  }
  return(
    <div className="containerMyCatalog">
      {pokeData.map(pokemon => (
        <div className="myCatalog" key={pokemon.id}>
          <div className="PokemonName">{pokemon.species}</div>
          <img  width="140" height="105" src={pokemon.image}></img>
          <div className="PokemonName">{pokemon.Uname}</div>
          {/* <button onClick={deletePokemon(pokemon.id)}>Delete</button> */}
        </div> 
      ))}
    </div>
  )
}
