import React, { Component }  from "react";
import { gql, useQuery} from '@apollo/client';
import { useLocation,useNavigate } from 'react-router-dom';
import { Modal} from './Modal.js';
import './Detail.css'

export const Header = () => { 
    
  return (
    <div className="containerHeader">
      <h1>
        Pokemon Detail
      </h1>   
    </div>
  )
}
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

const GET_POKEMON_DETAIL = gql`
query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      sprites {
        front_default
      }
      moves {
        move {
          name
        }
      }
      types {
        type {
          name
        }
      }
    }
  }
`;

export const Detail = () => {
    const location = useLocation();
    const data = location.state
    let getPokemonDetail = {
        name: data.name
      };
    let pokemonImage = data.image;
    const { loading: loadingPokemonDetail, error: errorPokemonDetail, data: pokemonDetail} = useQuery(GET_POKEMON_DETAIL, {
        variables: getPokemonDetail
    });
    if (loadingPokemonDetail) return 'Loading...';
    if (errorPokemonDetail) return `Error! ${errorPokemonDetail.message}`;
    let pokemonType = pokemonDetail.pokemon.types[0].type.name;
    let pokemonMoves = pokemonDetail.pokemon.moves;
    localStorage.setItem('CurrentPoke', JSON.stringify({name: data.name, image: pokemonImage}));
    return (
        <div className="containerDetail">
            <h1>{getPokemonDetail.name}</h1>
            <img  width="200" height="150" src={pokemonImage}></img>
            <h2>Type: {pokemonType}</h2>
            <h2>Move: </h2>
            <ul>
              {/* {pokemonMoves.map(moves => (
                  <li key={moves.move.name}> {moves.move.name}</li>  
                ))} */}
            </ul>
        </div>
    )
}

class Catch extends Component{
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
            <div className="containerCatch">
                <button type="button" onClick={this.showModal}>CATCH</button>
            </div>
          </main>
        );
    }
}

export default Catch;