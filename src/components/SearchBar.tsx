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
        <div className="flex md:flex-row flex-col w-full justify-center gap-3 items-center">
          <div className="w-[350px] flex justify-center">
            <TypeSelect
              setPokemonList={props.setPokemonList}
              pokemonAmount={props.pokemonAmount}
              setLoading={props.setLoading}
            />
          </div>
          <SearchInput
            setPokemonList={props.setPokemonList}
            setError={props.setError}
            setLoading={props.setLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
