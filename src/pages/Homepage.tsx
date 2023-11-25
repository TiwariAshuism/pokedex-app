import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { Pokemon } from "../types/Pokemon";
import SearchBar from "@/components/SearchBar";

const Homepage = () => {
  const [pokemonData, setPokemonData] = useState<Pokemon>();
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [pokemonAmount, setPokemonAmount] = useState(9);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <div className="bg-slate-900">
      <Header />
      <Hero
        pokemonData={pokemonData}
        setPokemonData={setPokemonData}
        pokemonName={"charizard"}
      />
      <SearchBar
        setPokemonList={setPokemonList}
        pokemonAmount={pokemonAmount}
        setError={setError}
        setLoading={setLoading}
      />
    </div>
  );
};

export default Homepage;
