
import {call,put,takeEvery} from 'redux-saga/effects'
import { getListSucess } from './reducer'

function* getListItem(){
    const list = yield call(()=> fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'))
    const pokemonList= yield list.json()
    yield put(getListSucess (pokemonList))
}


function* fetchDataSaga(){
    yield takeEvery('pokemonList/getList', getListItem)

}
export default fetchDataSaga;
