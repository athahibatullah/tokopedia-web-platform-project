import React from "react";
import { PokemonListCatalog } from "../Catalog/PokemonListCatalog";
import { Header } from "./Header";
import { Hello } from "./Hello";
import { Content } from "./Content";

export const PokemonList = () => {
    return (
        <>
        <Header/>
        <Hello/>
        <Content/>
        <PokemonListCatalog />
        </>
    )
}