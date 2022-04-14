import React from 'react';
import { Header } from './Detail'
import { Detail } from './Detail';
import { ButtonPokemonList } from './Detail';
import Catch from './Detail';

export const  PokemonDetail = () => {
  return (
      <>
        <Header/>
        <ButtonPokemonList/>
        <Detail/>
        <Catch/>
      </>
  )
}
