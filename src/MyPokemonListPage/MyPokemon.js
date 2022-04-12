import React from 'react';
import { Header } from "./Header";
import { Content } from "./Content";
import { Owned } from "./Owned"

export const MyPokemon = () => {
  return (
    <>
      <Header/>
      <Owned/>
      <Content/>
    </>
  )
}
