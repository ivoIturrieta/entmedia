import React, { Component } from "react";

import { Editor, EditorState, convertFromRaw } from "draft-js";
import "./Editor.css";

class EditorRead extends Component {
  state = {
    editorState: EditorState.createEmpty()
  };

  setEditorContent = () => {
    const article = Object.values(this.props.article)[0].editorState;
    article.entityMap = {};
    const editorState = EditorState.push(
      this.state.editorState,
      convertFromRaw(article)
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
