import { Pokemon } from "@/types/Pokemon";
import { SearchInput } from "./inputs/SearchInput";
import { TypeSelect } from "./inputs/TypeSelect";
// import { Button } from "./ui/button";
// import { fetchPokemonList } from "@/api/fetchPokemonList";
import { useState } from "react";
import ResetButton from "./ResetButton";

type SearchBarProps = {
  setPokemonList: (data: Pokemon[]) => void;
  pokemonAmount: number;
  setError: (value: boolean) => void;
  setLoading: (value: boolean) => void;
};

const SearchBar = (props: SearchBarProps) => {
  const [selectValue, setSelectValue] = useState("");
  return (
    <div className="relative z-20">
      <div className="max-w-4xl mx-auto bg-white rounded-lg p-5 shadow-lg">
        <div className="flex md:flex-row flex-col w-full justify-center gap-3 items-center">
          <div className="w-[350px] flex justify-center">
            <TypeSelect
              selectValue={selectValue}
              setSelectValue={setSelectValue}
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
          <ResetButton
            setPokemonList={props.setPokemonList}
            setSelectValue={setSelectValue}
            selectValue={selectValue}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
