import { takeLatest, put, call, all } from "redux-saga/effects";
import { firestore, createCollectionsMap } from "../../firebase/firebase.utils";
import {
  fetchCollectionsFailure,
  fetchCollectionsSuccess,
} from "./shop.actions";

import shopActionTypes from "./shop.actionTypes";

export function* fetchCollectionsStartAsync() {
  yield console.log("Fetch Collections Started.");
  try {
    const collectionsRef = firestore.collection("collections");
    const collectionsSnapshot = yield collectionsRef.get();
    const collectionsMap = yield call(
      createCollectionsMap,
      collectionsSnapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    shopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsStartAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)])
}