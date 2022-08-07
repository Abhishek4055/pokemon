import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import  pokemonListReducer  from "./reducer";
import fetchDataSaga from "./saga";



const saga = createSagaMiddleware()

const store =configureStore({
    reducer:{
        pokemonList : pokemonListReducer,
    },
    middleware:[saga]
})
saga.run(fetchDataSaga)

export default store;