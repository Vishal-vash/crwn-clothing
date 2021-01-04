import { all, call, put, takeLatest } from "redux-saga/effects";
import UserActionTypes from "./user.actions.types";

import {
  auth,
  googleSignInProvider,
  createUserDocument,
  getCurrentUser,
} from "../../firebase/firebase.utils";
import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  signUpSuccess,
  signUpFailure,
} from "./user.actions";

export function* getSnapShotFromUserAuth(user) {
  try {
    const userRef = yield call(createUserDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* googleSignIn() {
  try {
    const { user } = yield auth.signInWithPopup(googleSignInProvider);
    yield getSnapShotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGNIN_START, googleSignIn);
}

export function* emailSignIn({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapShotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGNIN_START, emailSignIn);
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapShotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

export function* signUpUser({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    const userRef = yield call(createUserDocument, user, { displayName });
    const userSnapshot = yield userRef.get();
    yield put(signUpSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUpUser);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
  ]);
}
