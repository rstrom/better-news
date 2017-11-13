import { takeEvery } from "redux-saga";
import { put, call, all, fork } from "redux-saga/effects";
import PathMatch from "path-match";

const API = {
  top: "https://hacker-news.firebaseio.com/v0/topstories.json",
  item: id => `https://hacker-news.firebaseio.com/v0/item/${id}.json`
};

export function* route({ hash, silent }) {
  try {
    const { id } = PathMatch()("#/:id?")(hash);
    if (!silent) history.pushState({}, null, hash);
    console.log("r", id);
    yield put({
      type: "ROUTED",
      id: id || "top"
    });
  } catch (e) {
    console.error(e);
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
    // if server error, should cause first item to 500
    yield put({
      type: "LOADED_TOP",
      top: [-1]
    });
    console.error(e, e.stack);
  }
}

export function* loadItem({ id }) {
  try {
    yield put({
      type: "FETCH_ITEM",
      id,
      item: {
        type: "LOADING"
      }
    });
    const fetchItem = yield call(fetch, API.item(id));
    const item = yield call([fetchItem, fetchItem.json]);
    // item exists
    if (item !== null) {
      yield put({
        type: "FETCH_ITEM",
        id,
        item
      });
    } else {
      // item not found
      yield put({
        type: "FETCH_ITEM",
        id,
        item: {
          type: "ERROR",
          code: 404
        }
      });
    }
    return item;
  } catch (e) {
    // server or network error
    yield put({
      type: "FETCH_ITEM",
      id,
      item: {
        type: "ERROR",
        code: 500
      }
    });
    console.error(e, e.stack);
  }
}

export default function* rootSaga() {
  yield takeEvery("ROUTE", route);
  yield takeEvery("LOAD_TOP", loadTop);
  yield takeEvery("LOAD_ITEM", loadItem);
}
