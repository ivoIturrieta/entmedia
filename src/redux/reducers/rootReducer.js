import { combineReducers } from "redux";
import coworksReducer from "./coworks";

export default combineReducers({
  coworks: coworksReducer
});
