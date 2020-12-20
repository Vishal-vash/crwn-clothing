import cartActionTypes from "./cart.actions.types";

const INITIAL_STATE = {
    hidden: false
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionTypes.TOGGLE_DROPDOWN:
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            return state;
    }
} 

export default cartReducer;