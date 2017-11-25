import React, { Component } from 'react';
import './App.css';

class PhotoViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageURL: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1950&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'
    }
  }

  render() {
    let imagePreview = null;

    if (this.state.imageURL) {
      imagePreview = (<img src={this.state.imageURL} />);
    }

    return (
      <div className="viewer">
        {imagePreview}
      </div>
    );
  }
}

export default PhotoViewer;
