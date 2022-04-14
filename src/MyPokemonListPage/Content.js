import React, {Component, useState} from "react"
import { useNavigate } from "react-router-dom";
import "./Content.css";
import { Modal} from './Modal.js';
import './Modal.css'

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
  const [Owned, setOwned] = useState(Object.keys({...localStorage}).length);
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

class Confirm extends Component{
  constructor(){
      super();
      this.state = {
          show: false
      };
      this.showModal = this.showModal.bind(this);
      this.hideModal = this.hideModal.bind(this);
  }
  showModal = () => {
      this.setState({ show: true });
    };
  
  hideModal = () => {
      this.setState({ show: false });
  };
  render() {
      return (
        <main>
          <Modal show={this.state.show} handleClose={this.hideModal}>
          </Modal>
          <div className="containerConfirm">
              <button type="button" onClick={this.showModal}>Release All</button>
          </div>
        </main>
      );
  }
}

export default Confirm;

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
  }
  return(
    <div className="containerMyCatalog">
      {pokeData.map(pokemon => (
        <div className="myCatalog" key={pokemon.id}>
          <div className="PokemonName">{pokemon.species}</div>
          <img  width="140" height="105" src={pokemon.image}></img>
          <div className="PokemonName">{pokemon.Uname}</div>
          <button type="button" onClick={e => releasePoke(e, pokemon.id)}>Release</button>
        </div> 
      ))}
    </div>
  )
}
