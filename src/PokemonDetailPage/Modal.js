import React, { useState } from 'react';
import './Modal.css';
import { v4 as uuidv4 } from 'uuid';

export const Modal = ({ handleClose, show, children}) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const [pokemonName, setPokemonName] = useState('');
  function handle(){
    let pokeData = JSON.parse(localStorage.getItem('CurrentPoke'))
    let id = uuidv4();
    let newPokemon = {id: id, Uname: pokemonName, species: pokeData.name, image: pokeData.image}
    localStorage.setItem('Name', pokemonName);
    localStorage.setItem(id, JSON.stringify(newPokemon))
    localStorage.removeItem('CurrentPoke');
    alert("Congratulations! " + localStorage.getItem('Name') + " is now in your inventory");
  }

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
};