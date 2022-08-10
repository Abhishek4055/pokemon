import { createSlice } from "@reduxjs/toolkit";


export const pokemonList =createSlice({
    name:'pokemonList',
    initialState: {
        pokemonList : {},
        pokemon:{},       
    },
reducers : {
    // action

    getList:(name)=>{
       return  name
    },
    setListSucess(state,action){
       state.pokemonList = action.payload; 
    },
    getPokemon:(name)=>{    
       return name
     },
    setPokemon(state,action){
      state.pokemon = action.payload;
     },
    }
}
 
)
export const {getList,setListSucess,getPokemon,setPokemon}= pokemonList.actions
export const getAllPokemonList =state=>state.pokemonList.pokemonList
export const getPokemonItem =state=>state.pokemonList.pokemon
export default pokemonList.reducer