import { EditorState } from "draft-js";

const defaultState = {
  articles: EditorState.createEmpty()
};
export default function editor(state = defaultState, action) {
  switch (action.type) {
    case "UPDATE_EDITOR_STATE": {
      return [...state, action.payload.data];
    }

    default:
      return state;
  }
}
