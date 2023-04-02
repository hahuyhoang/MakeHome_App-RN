const { createSelector } = require("@reduxjs/toolkit");

const cartSelector = (state) => state.cartReducer;

export const cartTotalSelector = createSelector([cartSelector], (cartReducer) =>
  cartReducer.reduce((total, current) => (total += current.quantity ), 0)
);

export const cartTotalPriceSelector = createSelector(
  [cartSelector],
  (cartReducer) =>
    cartReducer.reduce(
      (total, current) => (total += current.price.substring(1) * current.quantity),
      0
    ),
    
);