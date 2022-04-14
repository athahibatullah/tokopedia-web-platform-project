import React from 'react';
import { Header } from './Detail'
import { Detail } from './Detail';
import { ButtonPokemonList } from './Detail';
import Catch from './Detail';
import './Detail.css'

export const  PokemonDetail = () => {
  return (
      <>
        <Header/>
        <div className="containerContent">
          <ButtonPokemonList/>
          <Catch/>
        </div>
        <Detail/>
        <br></br>
      </>
  )
}
