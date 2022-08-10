import {all } from 'redux-saga/effects'
import { fetchPokemonSaga } from './saga'



export default  function* rootSaga (){
    yield all([...fetchPokemonSaga])
}