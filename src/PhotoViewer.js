import React, { Component } from 'react';
import './App.css';
import './PhotoViewer.css';

class PhotoViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageURL: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1950&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'
    }
  }a

  render() {
    let imagePreview = null;

    if (this.state.imageURL) {
      imagePreview = (<img src={this.state.imageURL} className="image-viewer" alt="" />);
    }

    return (
      <div className="image-container">
        {imagePreview}
      </div>
    );
  }
}

export default PhotoViewer;
