import React from 'react';
import { Header } from "./Content";
import { Content } from "./Content";
import { Owned } from "./Content";
import { MyCatalog } from './Content';
import Confirm from './Content'

export const MyPokemon = () => {
  return (
    <>
      <Header/>
      <Owned/>
      <Content/>
      <MyCatalog/>
      <Confirm/>
    </>
  )
}
