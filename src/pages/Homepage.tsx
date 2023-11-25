import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { Pokemon } from "../types/Pokemon";

const Homepage = () => {
  const [pokemonData, setPokemonData] = useState<Pokemon>();

  return (
    <div className="bg-slate-900">
      <Header />
      <Hero
        pokemonData={pokemonData}
        setPokemonData={setPokemonData}
        pokemonName={"charizard"}
      />
    </div>
  );
};

export default Homepage;
