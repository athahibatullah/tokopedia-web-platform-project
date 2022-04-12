import React from 'react';
import './Content.css';
import { useNavigate } from "react-router-dom";

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