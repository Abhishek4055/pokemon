import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import  pokemonListReducer  from "./reducer";
import rootSaga from "./rootSga";



const saga = createSagaMiddleware()

const store =configureStore({
    reducer:{
        pokemonList : pokemonListReducer,
    },
    middleware:[saga]
})
saga.run(rootSaga)

export default store;