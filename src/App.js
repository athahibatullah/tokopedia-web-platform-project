import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PokemonList } from "./PokemonListPage/PokemonList";
import { PokemonDetail } from "./PokemonDetailPage/PokemonDetail";
import { MyPokemon } from "./MyPokemonListPage/MyPokemon";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokemonList/>}/>
        <Route path="detail" element={<PokemonDetail/>}/>
        <Route path="mypokemon" element={<MyPokemon />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;