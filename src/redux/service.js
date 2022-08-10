import axios from "axios";

const listApi = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
const pokemonApi = "https://pokeapi.co/api/v2/pokemon";

export const fetchPokemonList = async (name) => {
  return axios.get(listApi);
};
export const fetchPokemon = async (name) => {
  return axios.get(`${pokemonApi}/${name.payload}`);
};
