import { takeEvery } from "redux-saga";
import { put, call, all, fork } from "redux-saga/effects";

const API = {
  top: "https://hacker-news.firebaseio.com/v0/topstories.json",
  item: id => `https://hacker-news.firebaseio.com/v0/item/${id}.json`
};

export function* init() {
  try {
    const top = yield loadTop();
  } catch (e) {
    console.error(e, e.stack);
  }
}

export function* loadTop() {
  try {
    const fetchTop500 = yield call(fetch, API.top);
    const top500 = yield call([fetchTop500, fetchTop500.json]);
    const top = top500.slice(0, 10);
    yield put({
      type: "LOADED_TOP",
      top
    });
    return top;
  } catch (e) {
    console.error(e, e.stack);
  }
}

export function* loadItem({ id }) {
  try {
    const fetchItem = yield call(fetch, API.item(id));
    const item = yield call([fetchItem, fetchItem.json]);
    yield put({
      type: "LOADED_ITEM",
      id,
      item
    });
    return item;
  } catch (e) {
    console.error(e, e.stack);
  }
}

export default function* rootSaga() {
  yield takeEvery("INIT", init);
  yield takeEvery("LOAD_ITEM", loadItem);
}
