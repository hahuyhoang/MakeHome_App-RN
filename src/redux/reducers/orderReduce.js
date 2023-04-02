import types from "../types";

const initial_state = {
  prdOrder: [],
};
export default function (state = initial_state, action) {
  switch (action.type) {
    case types.USER_ORDER:
      const data = action.payload;
      return { prdOrder: data };
    default:
      return { ...state };
  }
  
}