import { call, put, takeLatest } from "redux-saga/effects";
import { FETCH_SHIPS_REQUEST } from "./constants";
import axios from "axios";
import { fetchShipsSuccess, fetchShipsError } from "./actions";

export function* fetchShips(attributes) {
  try {
    const content = yield call(fetchShipsRequest, attributes.params);
    yield put(fetchShipsSuccess(content));
  } catch (e) {
    yield put(fetchShipsError(e));
  }
}

function fetchShipsRequest(params) {
  return axios
    .get("https://swapi.dev/api/starships", { params })
    .then((response) => {
      return response.data;
    });
}

export default function* saga() {
  yield takeLatest(FETCH_SHIPS_REQUEST, fetchShips);
}
