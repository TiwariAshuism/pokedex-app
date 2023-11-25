import { PokemonSpecies } from "@/types/PokemonSpecies";

interface FetchPokemonSpeciesResult {
  data?: PokemonSpecies;
  error?: boolean;
}

export const fetchPokemonSpecies = async (
  pokemon: string
): Promise<FetchPokemonSpeciesResult> => {
  const URL = `https://pokeapi.co/api/v2/pokemon-species/${pokemon}`;

  try {
    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data: PokemonSpecies = await response.json();

    return { data, error: false };
  } catch (error) {
    console.error("Error fetching data:", error);

    return { error: true };
  }
};
