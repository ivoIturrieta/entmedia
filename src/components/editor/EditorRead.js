import React, { Component } from "react";

import {
  Editor,
  EditorState,
  convertToRaw,
  createWithContent,
  convertFromRaw
} from "draft-js";
import { getBlockStyle, styleMap } from "./EditorUtils";
import "./Editor.css";

class EditorRead extends Component {
  state = {
    editorState: EditorState.createEmpty()
  };

  setEditorContent = () => {
    const investor = Object.values(this.props.investor)[0];
    //eslint-disable-next-line
    debugger;
    const editorState = EditorState.push(
      this.state.editorState,
      convertFromRaw(investor)
    );
    this.setState({ editorState });
  };

  render() {
    return (
      <div>
        <Editor readOnly editorState={this.state.editorState} />
        <button onClick={this.setEditorContent}>Click</button>
      </div>
    );
  }
}

export default EditorRead;
