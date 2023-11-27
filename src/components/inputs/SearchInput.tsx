import { fetchPokemon } from "@/api/fetchPokemon";
import { Input } from "@/components/ui/input";
import { Pokemon } from "@/types/Pokemon";
import { debounce } from "lodash";
import { Search } from "lucide-react";
import { useState } from "react";

type SearchInputProps = {
  setPokemonList: (data: Pokemon[]) => void;
  setError: (value: boolean) => void;
  setLoading: (value: boolean) => void;
};

export function SearchInput(props: SearchInputProps) {
  const [inputValue, setInputValue] = useState("");

  const fetchData = debounce(async () => {
    if (inputValue) {
      (async () => {
        props.setLoading(true);
        const requestPokemon = await fetchPokemon(inputValue.toLowerCase());

        requestPokemon.data
          ? props.setPokemonList([requestPokemon.data])
          : props.setError(true);

        props.setLoading(false);
        setInputValue("");
      })();
    }
  }, 500);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    fetchData();
  };

  return (
    <div className="flex-1 w-full relative">
      <form onSubmit={handleSubmit}>
        <div className="flex">
          <Search className="h-4 w-4 absolute top-3 left-3 text-slate-600 hidden md:block" />
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Search Pokemon"
            required
            className="w-full md:pl-9 focus-visible:ring-offset-0 focus-visible:ring-0 border-rose-600/30"
          />
          <button
            type="submit"
            className="absolute p-3 top-0 right-0 rounded-tr-md rounded-br-md bg-cyan-600 text-slate-600 block md:hidden"
          >
            <Search className="h-4 w-4 text-white" />
          </button>
        </div>
      </form>
    </div>
  );
}
