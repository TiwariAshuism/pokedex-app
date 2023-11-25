import { fetchPokemon } from "@/api/fetchPokemon";
import { Input } from "@/components/ui/input";
import { Pokemon } from "@/types/Pokemon";
import { useEffect, useState } from "react";

type SearchInputProps = {
  setPokemonList: (data: Pokemon[]) => void;
  setError: (value: boolean) => void;
  setLoading: (value: boolean) => void;
};

export function SearchInput(props: SearchInputProps) {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (inputValue) {
      (async () => {
        props.setLoading(true);
        const requestPokemon = await fetchPokemon(inputValue.toLowerCase());

        requestPokemon.data
          ? props.setPokemonList([requestPokemon.data])
          : props.setError(true);

        props.setLoading(false);
        // setInputValue("");
      })();
    }
  }, [inputValue]);

  return (
    <Input
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Search Pokemon"
      required
    />
  );
}
