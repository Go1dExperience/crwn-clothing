export const addItemToCart = (cartItems, newItem) => {
  debugger;
  const existingItem = cartItems.filter((item) => item.id === newItem.id)[0];
  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === newItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...newItem, quantity: 1 }];
};
export const removeItemFromCart = (cartItems, itemRemoved) => {
  const existingItem = cartItems.filter(
    (item) => item.id === itemRemoved.id
  )[0];
  if (existingItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== existingItem.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === existingItem.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
