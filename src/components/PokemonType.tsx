import { SyntheticEvent } from "react";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";
import { pokemonTypes } from "@/constant/pokemonTypes";

type PokemonTypeProps = {
  type: string;
  tabIndex: boolean;
  handleClick?: (e: SyntheticEvent) => void;
};

export const PokemonType = (props: PokemonTypeProps) => {
  const [{ name, colorName, icon }] = pokemonTypes.filter(
    (item) => item.name === props.type
  );

  return name && colorName && icon ? (
    <Badge
      className={cn(
        `py-2 px-3 border-2 border-white/60 text-base font-normal capitalize`,
        colorName
      )}
    >
      <div dangerouslySetInnerHTML={{ __html: icon }} className="mr-2" />
      {name}
    </Badge>
  ) : (
    <div>Error</div>
  );
};

export default PokemonType;
