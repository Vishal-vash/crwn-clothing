export const addToCart = (cartItems, addedItem) => {
  const existing = cartItems.find((item) => item.id === addedItem.id);
  if (existing) {
    return cartItems.map((item) =>
      item.id === existing.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }

  return [...cartItems, { ...addedItem, quantity: 1 }];
};
