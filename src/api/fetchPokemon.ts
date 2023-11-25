import { Pokemon } from "../types/Pokemon";

interface FetchPokemonResult {
  data?: Pokemon;
  error?: boolean;
}

export const fetchPokemon = async (
  pokemon: string
): Promise<FetchPokemonResult> => {
  const URL = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

  try {
    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data: Pokemon = await response.json();

    return { data, error: false };
  } catch (error) {
    console.error("Error fetching data:", error);

    return { error: true };
  }
};
