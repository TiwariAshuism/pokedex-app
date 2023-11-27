"use client";

import * as React from "react";

import { cn, customReplace } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CheckCheckIcon, SortAscIcon } from "lucide-react";
import { pokemonTypes } from "@/constant/pokemonTypes";
import { Pokemon } from "@/types/Pokemon";
import { fetchPokemonByType } from "@/api/fetchPokemonByType";

type SearchFilterProps = {
  setPokemonList: (data: Pokemon[]) => void;
  pokemonAmount: number;
  setLoading: (value: boolean) => void;
  selectValue: string;
  setSelectValue: (value: string) => void;
};

export function TypeSelect(props: SearchFilterProps) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (props.selectValue) {
      (async () => {
        props.setLoading(true);
        props.setPokemonList(
          await fetchPokemonByType(props.selectValue, props.pokemonAmount)
        );
        props.setLoading(false);
      })();
    }
  }, [props.pokemonAmount, props.selectValue]);

  const iconPokemon = customReplace(
    pokemonTypes.find((type) => type.name === props.selectValue)?.icon || "",
    "white",
    pokemonTypes.find((type) => type.name === props.selectValue)?.color || ""
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[350px] justify-between capitalize font-semibold focus-visible:ring-offset-0 focus-visible:ring-0 border-rose-600/30"
        >
          {props.selectValue ? (
            <div className="flex items-center">
              <div
                dangerouslySetInnerHTML={{
                  __html: iconPokemon,
                }}
                className="mr-2"
              />
              <div>
                {
                  pokemonTypes.find((type) => type.name === props.selectValue)
                    ?.name
                }
              </div>
            </div>
          ) : (
            "Select Type"
          )}
          <SortAscIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[350px] p-0">
        <Command>
          <CommandInput placeholder="Search type..." className="h-9" />
          <CommandEmpty>No type found.</CommandEmpty>
          <CommandGroup className="max-h-[300px] overflow-auto">
            {pokemonTypes.map((type) => {
              const colorIconPokemon = customReplace(
                type.icon || "",
                "white",
                type.color
              );
              return (
                <CommandItem
                  key={type.name}
                  value={type.name}
                  onSelect={(currentValue: any) => {
                    props.setSelectValue(
                      currentValue === props.selectValue ? "" : currentValue
                    );
                    setOpen(false);
                  }}
                  className="capitalize font-semibold"
                >
                  <div
                    dangerouslySetInnerHTML={{ __html: colorIconPokemon }}
                    className="mr-2"
                  />
                  {type.name}
                  <CheckCheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      props.selectValue === type.name
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                </CommandItem>
              );
            })}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
