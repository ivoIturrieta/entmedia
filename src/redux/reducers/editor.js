import { EditorState } from "draft-js";

const defaultState = {};
export default function editor(state = defaultState, action) {
  switch (action.type) {
    case "none": {
      return {
        ...state,
        inversionistas: action.payload.data.inversionista
      };
    }

    default:
      return state;
  }
}
