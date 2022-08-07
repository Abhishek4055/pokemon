import { createSlice } from "@reduxjs/toolkit";

export const pokemonList =createSlice({
    name:'pokemonList',
    initialState: {
        pokemonList : [],
        isLoading : false
    },

reducers : {
    getList:(state)=>{
        // console.log(state)
        state.isLoading=true;
    },
    getListSucess:(state,action)=>{
        state.pokemonList = action.payload;
        state.isLoading = false
    },
    getListFalure:(state)=>{
        state.isLoading = false
    }

    }
}

)
export const {getList,getListSucess,getListFalure}= pokemonList.actions

export default pokemonList.reducer