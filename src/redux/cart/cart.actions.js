import cartActionTypes from "./cart.actions.types";

export const toggleDropdown = () => ({
    type: cartActionTypes.TOGGLE_DROPDOWN
})

export const addItem = item => ({
    type: cartActionTypes.ADD_ITEM,
    payload: item
})

export const removeItem = item => ({
    type: cartActionTypes.REMOVE_ITEM,
    payload: item
})

export const clearCartItem = itemId => ({
    type: cartActionTypes.CLEAR_CART_ITEM,
    payload: itemId
})