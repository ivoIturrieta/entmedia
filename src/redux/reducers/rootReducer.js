import { combineReducers } from "redux";
import coworksReducer from "./coworks";
import editorReducer from "./editor";

export default combineReducers({
  coworks: coworksReducer,
  editor: editorReducer
});
