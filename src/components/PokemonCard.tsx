import { pokemonTypes } from "@/constant/pokemonTypes";
import { Pokemon } from "@/types/Pokemon";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import PokemonModal from "./PokemonModal";
import { PokemonSpecies } from "@/types/PokemonSpecies";
import { useEffect, useState } from "react";
import { cn, customReplace } from "@/lib/utils";
import { fetchPokemonSpecies } from "@/api/fetchPokemonSpecies";
import PokemonType from "./PokemonType";
import { Skeleton } from "./ui/skeleton";

type PokemonCardProps = {
  pokemon: Pokemon;
};

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const [pokemonSpeciesData, setPokemonSpeciesData] =
    useState<PokemonSpecies>();
  const [skeleton, setSkeleton] = useState(true);

  const imgUrl =
    pokemon &&
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon?.id}.png`;

  const [{ colorName: colorPokemon }] = pokemonTypes.filter(
    (type) => pokemon.types[0].type.name.indexOf(type.name) !== -1
  );

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
        const { data: speciesData } = await fetchPokemonSpecies(pokemon.name);

        setPokemonSpeciesData(speciesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [pokemon.name]);

  return (
    <Card
      className={cn(
        `mt-28 ${colorPokemon} bg-gradient-to-t from-red-500 from-10% border-none rounded-tl-full rounded-tr-full rounded-bl-[100rem] rounded-br-[100rem]`
      )}
    >
      <div className="flex justify-center -mt-32">
        {skeleton && (
          <div className="flex p-5 items-center">
            <Skeleton className="h-[300px] w-[300px] !rounded-full bg-rose-900" />
          </div>
        )}
        <img
          onLoad={() => setSkeleton(false)}
          src={imgUrl}
          width={300}
          height={300}
          alt={pokemon.name}
          className="w-[300px] drop-shadow-2xl"
        />
      </div>
      <CardHeader>
        <CardTitle className="font-semibold text-4xl capitalize text-center text-white">
          {pokemon.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex space-x-2 justify-center">
          {pokemon.types.map(({ type }) => (
            <PokemonType key={type.name} type={type.name} tabIndex={false} />
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <PokemonModal
          pokemonData={pokemon}
          imgUrl={imgUrl}
          descriptionPokemon={descriptionPokemon}
        />
      </CardFooter>
    </Card>
  );
};

export default PokemonCard;
