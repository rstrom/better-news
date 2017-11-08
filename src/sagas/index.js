import { takeEvery } from "redux-saga";
import { put, call, all, fork } from "redux-saga/effects";

export function* init() {
  try {
    // TODO hit HN api
    const items = [
      {
        name: "Qux"
      }
    ];
    yield put({
      type: "LOAD",
      items
    });
  } catch (e) {
    console.error(e, e.stack);
  }
}

export default function* rootSaga() {
  yield takeEvery("INIT", init);
}
