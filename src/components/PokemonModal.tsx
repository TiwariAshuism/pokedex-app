import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { Pokemon } from "@/types/Pokemon";
import { customReplace, formatPokemonId } from "@/lib/utils";
import { pokemonTypes } from "@/constant/pokemonTypes";
import PokemonType from "./PokemonType";
import { RulerIcon, WeightIcon } from "lucide-react";

type PokemonModalProps = {
  pokemonData?: Pokemon;
  imgUrl: string | undefined;
  descriptionPokemon: string;
};

const PokemonModal = ({
  pokemonData,
  imgUrl,
  descriptionPokemon,
}: PokemonModalProps) => {
  const [open, setOpen] = useState(false);

  const [{ color: colorPokemon, icon: iconPokemon }] = pokemonTypes.filter(
    (type) => pokemonData?.types[0].type.name.indexOf(type.name) !== -1
  );

  const customIconPokemon = customReplace(iconPokemon, "white", colorPokemon);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="secondary"
          className="w-full py-6 font-semibold text-base rounded-lg"
        >
          <div
            dangerouslySetInnerHTML={{ __html: customIconPokemon }}
            className="mr-2"
          />
          Read more
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-xl md:max-w-2xl lg:max-w-4xl bg-rose-600/80 border-none !rounded-tl-[20rem] !rounded-br-3xl !rounded-tr-3xl">
        <div className="flex">
          <div className="w-full grid grid-cols-2">
            <div className="w-full flex flex-col items-center">
              <img
                src={imgUrl}
                alt={pokemonData?.name}
                className="w-[300px] animate-bounce"
              />
              <div className="flex space-x-8 text-white">
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <WeightIcon className="mr-2" />
                    <span className="text-xl font-semibold">
                      {`${pokemonData && pokemonData?.weight / 10}`} kg
                    </span>
                  </div>
                  <span className="text-lg">Weight</span>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <RulerIcon className="mr-2" />
                    <span className="text-xl font-semibold">
                      {`${pokemonData && pokemonData?.height / 10}`} m
                    </span>
                  </div>
                  <span className="text-lg">Height</span>
                </div>
              </div>
            </div>
            <div className="flex-col ml-12 flex-1">
              <h6 className="text-3xl mt-12n font-bold italic text-white">
                {pokemonData && formatPokemonId(pokemonData?.id)}
              </h6>
              <h1
                className="font-bold md:text-5xl my-3 text-3xl tracking-wide drop-shadow-[5px_4px_2px_rgba(77,70,70,0.65)] mb-8 capitalize"
                style={{ fontFamily: "PokemonSolid", color: colorPokemon }}
              >
                {pokemonData?.name}
              </h1>
              <p className="md:w-96 md:text-base text-sm font-normal text-white">
                {descriptionPokemon}
              </p>
              <div className="flex space-x-2 items-center mt-3">
                <div className="mr-2 text-xl font-semibold text-white">
                  Type:
                </div>
                {pokemonData?.types.map(({ type }) => (
                  <PokemonType
                    key={type.name}
                    type={type.name}
                    tabIndex={false}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PokemonModal;
