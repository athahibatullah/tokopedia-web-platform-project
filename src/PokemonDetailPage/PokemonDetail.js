import React from 'react';
import { Header } from './Header'
import { Detail } from './Detail';
import { ButtonPokemonList } from './Button';
import Catch  from './Catch';

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
