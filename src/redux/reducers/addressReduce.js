import types from "../types";

const initialState = {
  stateAddress: [],
  addressId: 1,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case types.USER_ADDRESS:
      return { ...state, stateAddress: action.payload };
    case types.ADDRESS_ID:
      return { ...state, addressId: action.payload };
    default:
      return { ...state };
  }
}
