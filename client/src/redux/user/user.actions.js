import UserActionTypes from "./user.actions.types";

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGNIN_START,
});

export const emailSignInStart = emailAndPassword => ({
  type: UserActionTypes.EMAIL_SIGNIN_START,
  payload: emailAndPassword
});

export const signInSuccess = user => ({
  type: UserActionTypes.SIGNIN_SUCCESS,
  payload: user,
});

export const signInFailure = error => ({
  type: UserActionTypes.SIGNIN_FAILURE,
  payload: error,
});

export const checkUserSession = () => ({
    type: UserActionTypes.CHECK_USER_SESSION
})

export const signOutStart = () => ({
    type: UserActionTypes.SIGN_OUT_START
})

export const signOutSuccess = () => ({
    type: UserActionTypes.SIGN_OUT_SUCCESS
})

export const signOutFailure = error => ({
    type: UserActionTypes.SIGN_OUT_FAILURE,
    payload: error
})

export const signUpStart = emailAndPassword => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: emailAndPassword
})

export const signUpSuccess = user => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: user
})

export const signUpFailure = error => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: error
})