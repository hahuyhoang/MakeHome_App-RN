import { clearUserData } from "../../Async";
import store from "../store";
import types from "../types";

const { dispatch } = store;

export const saveUserData = (data) => {
  dispatch({
    type: types.LOGIN,
    payload: data,
  });
};
export const saveUserVeri = (data) => {
  dispatch({
    type: types.SIGNUP,
    payload: data,
  });
};
export const saveUserAddress = (userAddress) => (dispatch) => {
  dispatch({
    type: types.USER_ADDRESS,
    payload: userAddress,
  });
};
export const saveUserAddressId = (addressId) => (dispatch) => {
  dispatch({
    type: types.ADDRESS_ID,
    payload: addressId,
  });
};
export const saveCheckboxId = (checkboxId) => {
  dispatch({
    type: types.CHECKBOX_ID,
    payload: checkboxId,
  });
};
export const saveDataOder = (data) => {
  dispatch({
    type: types.USER_ORDER,
    payload: data,
  });
};
export const saveProduct = (data) => {
  dispatch({
    type: types.PRODUCT,
    payload: data,
  });
};
export const saveReview = (data) => {
  dispatch({
    type: types.REVIEW,
    payload: data,
  });
};
export function logout() {
  dispatch({ type: types.CLEAR_REDUX_STATE });
  clearUserData();
}
