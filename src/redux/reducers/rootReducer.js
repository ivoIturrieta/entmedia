import { combineReducers } from "redux";
import coworksReducer from "./coworks";
import editorReducer from "./editor";
import articleReducer from "./articles";

export default combineReducers({
  coworks: coworksReducer,
  editor: editorReducer,
  articles: articleReducer
});
