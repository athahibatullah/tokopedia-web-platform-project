import React from "react";
import { PokemonListCatalog } from "./Content";
import { Header } from "./Content";
import { Hello } from "./Content";
import { Content } from "./Content";

export const PokemonList = () => {
    localStorage.removeItem('CurrentPoke');
    return (
        <>
        <Header/>
        <Hello/>
        <Content/>
        <PokemonListCatalog />
        </>
    )
}