import { useEffect, useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { Pokemon } from "../types/Pokemon";
import SearchBar from "@/components/SearchBar";
import Pokedex from "@/components/Pokedex";
import wave from "@/assets/wave.svg";
import { fetchPokemonList } from "@/api/fetchPokemonList";

const Homepage = () => {
  const [pokemonData, setPokemonData] = useState<Pokemon>();
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [pokemonAmount, setPokemonAmount] = useState(9);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      setPokemonList(await fetchPokemonList(1));
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    setError(false);
  }, [pokemonList]);

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
      <div className="relative -mt-[105px] pb-[105px] px-7">
        <div className="h-24 w-full mx-auto absolute left-0 hidden md:block">
          <img src={wave} alt="Wave" />
        </div>
        <Pokedex
          setPokemonData={setPokemonData}
          pokemonList={pokemonList}
          setPokemonList={setPokemonList}
          pokemonAmount={pokemonAmount}
          setPokemonAmount={setPokemonAmount}
          error={error}
          loading={loading}
          setLoading={setLoading}
        />
      </div>
    </div>
  );
};

export default Homepage;
