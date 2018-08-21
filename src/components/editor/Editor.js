import React, { Component } from "react";

import {
  Editor,
  EditorState,
  RichUtils,
  convertToRaw,
  stateToHTML
} from "draft-js";
import { database } from "../../firebase";
import {
  BlockStyleControls,
  InlineStyleControls,
  getBlockStyle,
  styleMap
} from "./EditorUtils";
import "./Editor.css";

class RichEditorExample extends Component {
  state = { editorState: EditorState.createEmpty() };

  focus = () => this.refs.editor.focus();
  onChange = editorState => {
    const contentState = editorState.getCurrentContent();
    console.log("content state", convertToRaw(contentState));
    this.setState({ editorState });
  };
  handleKeyCommand = command => this._handleKeyCommand(command);
  onTab = e => this._onTab(e);
  toggleBlockType = type => this._toggleBlockType(type);
  toggleInlineStyle = style => this._toggleInlineStyle(style);

  _handleKeyCommand(command) {
    const { editorState } = this.state;
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  }

  _onTab(e) {
    const maxDepth = 4;
    this.onChange(RichUtils.onTab(e, this.state.editorState, maxDepth));
  }

  _toggleBlockType(blockType) {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, blockType));
  }

  _toggleInlineStyle(inlineStyle) {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle)
    );
  }

  render() {
    const { editorState } = this.state;
    let className = "RichEditor-editor";
    var contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
      if (
        contentState
          .getBlockMap()
          .first()
          .getType() !== "unstyled"
      ) {
        className += " RichEditor-hidePlaceholder";
      }
    }

    const handleSubmit = () => {
      const body = convertToRaw(contentState);
      database
        .ref()
        .child("inversionistas")
        .child("inversionista")
        .push(body);
    };

    return (
      <div className="RichEditor-root">
        <BlockStyleControls
          editorState={editorState}
          onToggle={this.toggleBlockType}
        />
        <InlineStyleControls
          editorState={editorState}
          onToggle={this.toggleInlineStyle}
        />
        <div className={className} onClick={this.focus}>
          <Editor
            blockStyleFn={getBlockStyle}
            customStyleMap={styleMap}
            editorState={editorState}
            handleKeyCommand={this.handleKeyCommand}
            onChange={this.onChange}
            onTab={this.onTab}
            ref="editor"
            spellCheck={true}
          />
        </div>
        <button onClick={handleSubmit}>hola</button>
      </div>
    );
  }
}

export default RichEditorExample;
