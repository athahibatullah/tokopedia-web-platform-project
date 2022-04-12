import React from "react"
import { useNavigate } from "react-router-dom";
import "./Content.css";

export const Content = () => {
    let navigate = useNavigate();
    const routeToDetail = () => {
        let path = "detail"
        navigate(path)
    }
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
