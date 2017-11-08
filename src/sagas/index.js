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
    const embedlyReqs = yield all(
      topTenItems.map(item => {
        if (!item.url) item.url = "https://news.ycombinator.com/";
        const url = encodeURIComponent(item.url);
        return call(
          fetch,
          `https://api.embed.ly/1/oembed?url=${url}&key=15d8c8a419c14f3e8f1f1424822dd394`
        );
      })
    );
    const embedlyJsons = yield all(embedlyReqs.map(r => call([r, r.json])));
    console.log("LOADED EMBEDLY:", embedlyJsons);
    const items = topTenItems.map((item, i) => ({
      hn: item,
      embedly: embedlyJsons[i]
    }));
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
