import React from "react";
import { PokemonList } from "./Catalog/PokemonList";
import { Header } from "./PokemonListPage/Header";
import { Hello } from "./PokemonListPage/Hello"
import { Content } from "./PokemonListPage/Content"

function App() {
  return (
    <>
      <Header/>
      <Hello/>
      <Content/>
      <PokemonList />
    </>
  );
}

export default App;