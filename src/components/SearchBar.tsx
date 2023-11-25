import { Pokemon } from "@/types/Pokemon";
import { SearchInput } from "./inputs/SearchInput";
import { TypeSelect } from "./inputs/TypeSelect";

type SearchBarProps = {
  setPokemonList: (data: Pokemon[]) => void;
  pokemonAmount: number;
  setError: (value: boolean) => void;
  setLoading: (value: boolean) => void;
};

const SearchBar = (props: SearchBarProps) => {
  return (
    <div className="relative z-20">
      <div className="max-w-4xl mx-auto bg-white rounded-lg p-5 shadow-lg">
        <div className="flex w-full justify-center space-x-4">
          <div className="flex-1">
            <TypeSelect
              setPokemonList={props.setPokemonList}
              pokemonAmount={props.pokemonAmount}
              setLoading={props.setLoading}
            />
          </div>
          <div className="flex-1">
            <SearchInput
              setPokemonList={props.setPokemonList}
              setError={props.setError}
              setLoading={props.setLoading}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
