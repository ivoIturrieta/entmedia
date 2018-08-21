import { EditorState } from "draft-js";

const defaultState = {
  inversionistas: EditorState.createEmpty()
};
export default function editor(state = defaultState, action) {
  switch (action.type) {
    case "UPDATE_EDITOR_STATE": {
      //eslint-disable-next-line
      //debugger;
      return {
        ...state,
        inversionistas: action.payload.data.inversionista
      };
    }

    default:
      return state;
  }
}
