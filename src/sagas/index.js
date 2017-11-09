import { takeEvery } from "redux-saga";
import { put, call, all, fork } from "redux-saga/effects";

const API = {
  top: "https://hacker-news.firebaseio.com/v0/topstories.json"
};

export function* init() {
  try {
    const topReq = yield call(fetch, API.top);
    const top = yield call([topReq, topReq.json]);
    const topTenReqs = yield all(
      top.slice(0, 10).map(id => {
        console.log(id);
        return call(
          fetch,
          `https://hacker-news.firebaseio.com/v0/item/${id}.json`
        );
      })
    );
    const topTenItems = yield all(topTenReqs.map(r => call([r, r.json])));
    console.log("LOADED TOP TEN:", topTenItems);
    yield put({
      type: "LOAD",
      items: topTenItems
    });
  } catch (e) {
    console.error(e, e.stack);
  }
}

export default function* rootSaga() {
  yield takeEvery("INIT", init);
}
