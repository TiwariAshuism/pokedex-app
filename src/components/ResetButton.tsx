import { fetchPokemonList } from "@/api/fetchPokemonList";
import { Button } from "./ui/button";
import { Pokemon } from "@/types/Pokemon";

type ResetButtonProps = {
  setPokemonList: (data: Pokemon[]) => void;
  selectValue: string;
  setSelectValue: (value: string) => void;
};

const ResetButton = (props: ResetButtonProps) => {
  const handleClick = async () => {
    props.setPokemonList(await fetchPokemonList(1));
    props.setSelectValue(props.selectValue && "");
  };
  return (
    <Button className="bg-red-800/80 w-full md:w-auto" onClick={handleClick}>
      Reset
    </Button>
  );
};

export default ResetButton;
