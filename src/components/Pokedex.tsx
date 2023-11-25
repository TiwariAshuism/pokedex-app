import { Pokemon } from "@/types/Pokemon";
import PokemonCard from "./PokemonCard";
import { ErrorMessage } from "./helper/ErrorMessage";
import LoadingSpinner from "./helper/LoadingSpinner";

type PokedexProps = {
  setPokemonData: (data: Pokemon) => void;
  pokemonList: Pokemon[];
  setPokemonList: (data: Pokemon[]) => void;
  pokemonAmount: number;
  setPokemonAmount: (value: number) => void;
  error: boolean;
  loading: boolean;
  setLoading: (value: boolean) => void;
};

const Pokedex = (props: PokedexProps) => {
  if (props.error) return <ErrorMessage />;
  return (
    <div className="">
      <div className="w-full max-w-7xl mx-auto pt-48">
        {props.loading ? (
          <div className="flex justify-center">
            <LoadingSpinner />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {props.pokemonList.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Pokedex;
