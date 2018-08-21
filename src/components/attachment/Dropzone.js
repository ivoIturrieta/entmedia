import React, { Component } from "react";
import Dropzone from "react-dropzone";

class Attachments extends Component {
  state = { files: [] };

  onDrop(files) {
    this.setState({
      files
    });
  }

  render() {
    return (
      <section>
        <div className="dropzone">
          <Dropzone onDrop={this.onDrop.bind(this)}>
            <p>
              Try dropping some files here, or click to select files to upload.
            </p>
          </Dropzone>
        </div>
      </section>
    );
  }
}

export default Attachments;
