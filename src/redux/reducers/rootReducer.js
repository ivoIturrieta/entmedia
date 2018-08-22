import { combineReducers } from "redux";
import entitiesReducer from "./entities";
import editorReducer from "./editor";
import articleReducer from "./articles";

export default combineReducers({
  entities: entitiesReducer,
  editor: editorReducer,
  articles: articleReducer
});
