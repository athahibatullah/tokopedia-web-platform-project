import React from 'react';
import { Header } from "./Header";
import { Content } from "./Content";
import { Owned } from "./Owned";
import { MyCatalog } from './Content';

export const MyPokemon = () => {
  return (
    <>
      <Header/>
      <Owned/>
      <Content/>
      <MyCatalog/>
    </>
  )
}
