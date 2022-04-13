import React from 'react';
import './Owned.css';

export const Owned = () => {
  let Owned = Object.keys({...localStorage}).length;
  return (
    <div className="containerOwned">
        <h1>You owned {Owned} Pokemons so far</h1>
    </div>
  )
}
