import React from 'react';
import './Button.css';
import { useNavigate } from "react-router-dom";

export const ButtonPokemonList = () => {
    let navigate = useNavigate();
    const routeToHome = () => {
        let path = "/"
        navigate(path)
    }
  return (
    <div className="containerButton">
        <button onClick={routeToHome}>Pokemon List</button>
    </div>
  )
}
