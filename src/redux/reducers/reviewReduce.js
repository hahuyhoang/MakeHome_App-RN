import types from "../types";

const initial_state = {
  review: [],
};
export default function (state = initial_state, action) {
  switch (action.type) {
    case types.REVIEW:
      const data = action.payload;
      return { review: data };
    default:
      return { ...state };
  }
}
