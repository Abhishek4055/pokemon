import { call, put, takeLatest, fork } from "redux-saga/effects";
import { getList, getPokemon, setListSuccess, setPokemon } from "./reducer";
import { fetchPokemonList, fetchPokemon } from "./service";

function* getListItem() {
  try {
    //  const list = payload;
    const response = yield call(fetchPokemonList);

    if (response.status === 200) {
      yield put(setListSuccess({ ...response.data }));
    }
  } catch (error) {
    console.log(error);
  }
}

function* getItem(payload) {
  try {
    const name = payload;
    const response = yield call(fetchPokemon, name);

    if (response.status === 200) {
      yield put(setPokemon({ ...response.data }));
    }
  } catch (error) {
    console.log(error);
  }
}

function* fetchDataSaga() {
  yield takeLatest(getList.type, getListItem);
}
function* pokemonItem() {
  yield takeLatest(getPokemon.type, getItem);
}
export const fetchPokemonSaga = [fork(fetchDataSaga), fork(pokemonItem)];
