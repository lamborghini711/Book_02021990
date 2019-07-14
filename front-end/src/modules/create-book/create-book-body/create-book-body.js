import React, { Component } from 'react';
import ReactUploadImage from './upload-image'

class CreateBookBody extends Component {
  render() {
    return (
      <div className="content-wrapper min-height-page ">
        <ReactUploadImage/>
      </div>
    );
  }
}

export default CreateBookBody;