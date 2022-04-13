import React, { useState } from 'react'
import './Modal.css';

export const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const [pokemonName, setPokemonName] = useState('');
  function handle(){
    localStorage.setItem('Name', pokemonName);
    alert(localStorage.getItem('Name'))
  }

  return (
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
  );
};