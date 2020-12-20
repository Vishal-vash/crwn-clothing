import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accItemQuantity, cartItem) => accItemQuantity + cartItem.quantity,
      0
    )
);

export const selectHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)