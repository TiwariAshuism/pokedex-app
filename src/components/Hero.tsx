"use client";

import pokeball from "@/assets/pokeball.gif";
import lightning from "@/assets/lightning.png";
import { Pokemon } from "@/types/Pokemon";
import { fetchPokemon } from "@/api/fetchPokemon";
import PokemonType from "./PokemonType";
import PokemonModal from "./PokemonModal";
import { useEffect, useState } from "react";
import { PokemonSpecies } from "@/types/PokemonSpecies";
import { fetchPokemonSpecies } from "@/api/fetchPokemonSpecies";
import { customReplace, formatPokemonId } from "@/lib/utils";

type HeroProps = {
  pokemonData?: Pokemon;
  setPokemonData: (data: Pokemon | undefined) => void;
  pokemonName: string;
};

const Hero = ({ pokemonData, setPokemonData, pokemonName }: HeroProps) => {
  const [pokemonSpeciesData, setPokemonSpeciesData] =
    useState<PokemonSpecies>();
  // Taking an array from index 2 to index 5
  const slicedEntries = pokemonSpeciesData?.flavor_text_entries.slice(1, 4);

  // Combining the text from the sliced array
  // Because the flavor_text in the pokemon-species array at index 1 and 2 is the same value, I've adjusted it like this:
  const descriptionData: string | undefined =
    slicedEntries?.length === 1
      ? pokemonSpeciesData?.flavor_text_entries[0].flavor_text
      : slicedEntries?.map((entry) => entry.flavor_text || "").join(" ");

  const descriptionPokemon = customReplace(
    descriptionData || "",
    /[\n\f]/g,
    " "
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [pokemonResult, speciesResult] = await Promise.all([
          fetchPokemon(pokemonName),
          fetchPokemonSpecies(pokemonName),
        ]);

        const { data: pokemonData } = pokemonResult;
        const { data: speciesData } = speciesResult;

        setPokemonData(pokemonData);
        setPokemonSpeciesData(speciesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [pokemonName]);

  const imgUrl =
    pokemonData &&
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonData?.id}.png`;

  return (
    <div
      className="flex items-center md:mt-[-4rem] mt-[-2rem] md:px-10 px-7 md:pb-0 pb-10 md:h-screen bg-gradient-to-t from-red-500 from-10% to-yellow-500 to-60% relative"
      id="hero"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div
          className="absolute hidden md:block md:w-[80px] xl:w-[120px] z-10 -rotate-[40deg] opacity-[0.15] top-[4rem] left-[40vw] transform-gpu overflow-hidden"
          aria-hidden="true"
        >
          <img src={lightning} alt="Image Lightning" />
        </div>
        {/* content */}
        <div className="text-white">
          <h6 className="text-3xl mt-12n font-bold italic">
            {pokemonData && formatPokemonId(pokemonData?.id)}
          </h6>
          <div className="flex space-x-2 mt-3">
            {pokemonData?.types.map(({ type }) => (
              <PokemonType key={type.name} type={type.name} tabIndex={false} />
            ))}
          </div>
          <h1
            className="font-bold md:text-7xl my-4 text-3xl tracking-wider text-rose-600 drop-shadow-[5px_4px_2px_rgba(255,255,255,0.75)] mb-8 capitalize"
            style={{ fontFamily: "PokemonSolid" }}
          >
            {pokemonName}
          </h1>
          <p className="md:w-96 md:text-base text-sm font-normal">
            {descriptionPokemon}
          </p>
          <div className="mt-5">
            <PokemonModal
              pokemonData={pokemonData}
              imgUrl={imgUrl}
              descriptionPokemon={descriptionPokemon}
            />
          </div>
        </div>
        {/* image */}
        <div className="order-first md:order-none relative">
          <div
            className="absolute w-[300px] z-10 opacity-80 bottom-[-1rem] left-[-5rem] transform-gpu overflow-hidden"
            aria-hidden="true"
          >
            <img
              src={pokeball}
              alt="Image Pokeball"
              className="drop-shadow-xl"
            />
          </div>
          <img
            src={imgUrl}
            alt={pokemonData?.name}
            className="animate-pulse w-[600px] drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
