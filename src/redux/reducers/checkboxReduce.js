import types from "../types";

const initialState = {
  addressId: [1],
};
export default function (state = initialState, action) {
  switch (action.type) {
    case types.CHECKBOX_ID:
      return { ...state, addressId: action.payload };
    default:
      return { ...state };
  }
}
