import React, { Component } from 'react';
import './App.css';

class PhotoEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: this.props.image
    }
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  }
}

export default PhotoEditor;
