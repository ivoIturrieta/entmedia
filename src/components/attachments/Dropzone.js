import React, { Component, Fragment } from "react";
import Dropzone from "react-dropzone";

const dropzoneStyle = {
  width: "100%",
  height: "auto",
  borderWidth: 2,
  borderColor: "rgb(102, 102, 102)",
  borderStyle: "dashed",
  borderRadius: 5
};

class Attachments extends Component {
  state = {
    files: []
  };
  onDrop = files => {
    const fileArray = [];
    files.forEach(file => {
      fileArray.push(file);
    });

    this.setState({
      files: fileArray
    });

    this.props.onChange("attachments", fileArray);
  };

  render() {
    const previewStyle = {
      display: "inline",
      width: "30%",
      height: "30%"
    };

    return (
      <Fragment>
        <Dropzone onDrop={this.onDrop}>
          <p>
            Try dropping some files here, or click to select files to upload.
          </p>
        </Dropzone>
        {this.props.values.length > 0 && (
          <div style={{ padding: "3%" }}>
            {this.props.values.map(file => (
              <img
                alt="Preview"
                key={file.preview}
                src={file.preview}
                style={previewStyle}
              />
            ))}
          </div>
        )}
      </Fragment>
    );
  }
}

export default Attachments;
