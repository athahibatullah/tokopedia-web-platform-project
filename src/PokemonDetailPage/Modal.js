import React, { useState } from 'react';
import './Modal.css';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

let probability = null;

export const Modal = ({ handleClose, show, children}) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const [pokemonName, setPokemonName] = useState('');
  let navigate = useNavigate();
  const routeToMyPokemon = () => {
      let path = "/mypokemon"
      navigate(path)
  }
  if(pokemonName == '' || !show){
    probability = Math.floor(Math.random() * 2);
  }
  function handle(){
    let pokeData = JSON.parse(localStorage.getItem('CurrentPoke'))
    let id = uuidv4();
    let newPokemon = {id: id, Uname: pokemonName, species: pokeData.name, image: pokeData.image};
    localStorage.setItem(id, JSON.stringify(newPokemon));
    localStorage.removeItem('CurrentPoke');
    alert("Congratulations! " + pokemonName + " is now in your inventory");
    routeToMyPokemon();
  }
  
  if(probability){
    return (
      <>
        <div className={showHideClassName}>
        <section className="modal-main">
          {children}
          <div className="containerModal">
              <h1>Successfully Catch a Pokemon!</h1>
              <p><b>Give the pokemon a name</b></p>
              <input type="text" placeholder="Pokemon's name" value={pokemonName} onChange={(e) => setPokemonName(e.target.value)}></input><br></br>
              <button type="button" onClick={handle}>Catch</button><br></br>
              <button type="button" onClick={handleClose}>
                  Cancel
              </button><br></br>
          </div>
        </section>
      </div>
      </>
    );
  }
  else{
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
          <div className="containerModal">
            <h1>OOPS! The pokemon run away...</h1>
            <p>You failed to catch the pokemon :( <br></br> Don't worry, you can try again</p>
            <button type="button" onClick={handleClose}>
                  Close
            </button><br></br>
          </div>
        </section>
      </div> 
    )
  }
};