import types from "../types";

const initial_state = {
  product: {},
};
export default function (state = initial_state, action) {
  switch (action.type) {
    case types.PRODUCT:
      const data = action.payload;
      return { product: data };
    default:
      return { ...state };
  }
  
}