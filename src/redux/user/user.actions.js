import UserActionTypes from './user.actions.types';

export const setCurrentUser = (user) => {
    return {
        type: UserActionTypes.SET_CURRENT_USER,
        payload: user
    }
}