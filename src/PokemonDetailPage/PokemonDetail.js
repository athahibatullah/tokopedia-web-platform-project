import React from 'react';
import { Header } from './Header'
import { Detail } from './Detail';
import { ButtonPokemonList } from './Button';

export const  PokemonDetail = () => {
  return (
      <>
        <Header/>
        <ButtonPokemonList/>
        <Detail/>
      </>
  )
}
