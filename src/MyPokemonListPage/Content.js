import React from "react"
import { Link, useNavigate } from "react-router-dom";
import "./Content.css";

export const Content = () => {
    // let navigate = useNavigate();
    // const routeToHome = () => {
    //     let path = "/"
    //     navigate(path)
    // }
  return (
    <div className="containerContentMyPokemon">
        <input type="text" placeholder="Search"></input>
        <Link to="/">
          <button>Pokemon List</button>
        </Link>
    </div>
  )
}

export const MyCatalog = () => {
  let showPokemon = {...localStorage}
  let key = Object.keys(showPokemon)
  let keyLength = key.length;
  let pokeId = [];
  let pokeUname = [];
  let pokeImage = [];
  let pokeData = [];
  for(let i=0;i<keyLength;i++){
    // pokeId.push(JSON.parse(localStorage.getItem([key[i]])).id)
    // pokeImage.push(JSON.parse(localStorage.getItem([key[i]])).image)
    pokeData.push(JSON.parse(localStorage.getItem([key[i]])))
  }
  console.log(pokeData)
  return(
    <div className="containerMyCatalog">
      {pokeData.map(pokemon => (
        <div className="myCatalog" key={pokemon.id}>
          <div className="PokemonName">{pokemon.species}</div>
          <img src={pokemon.image}></img>
          <div className="PokemonName">{pokemon.Uname}</div>
        </div> 
      ))}
    </div>
  )
}
