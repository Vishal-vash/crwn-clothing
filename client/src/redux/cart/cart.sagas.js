import { all, call, takeLatest, put } from "redux-saga/effects";

import UserActionTypes from "../user/user.actions.types";
import { clearCart } from "./cart.actions";

export function* clearCartItems() {
  yield put(clearCart());
}

export function* onClearCart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartItems);
}

export function* cartSagas() {
  yield all([call(onClearCart)]);
}
