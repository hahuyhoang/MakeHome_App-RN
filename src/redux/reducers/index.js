import { combineReducers } from "redux";
import types from "../types";
import auth from "./auth";
import cartReducer from "./cardReducers";
import cartFavorite from "./cardFavorite";
import addressReduce from "./addressReduce";
import checkboxReduce from "./checkboxReduce";
import orderReduce from "./orderReduce";
import productReduce from "./productReduce";
import reviewReduce from "./reviewReduce";
const appReducer = combineReducers({
  auth,
  cartReducer,
  cartFavorite,
  addressReduce,
  checkboxReduce,
  orderReduce,
  productReduce,
  reviewReduce,
});

const rootReducer = (state, action) => {
  if (action.type == types.CLEAR_REDUX_STATE) {
    state = undefined;
  }
  return appReducer(state, action);
};
export default rootReducer;
