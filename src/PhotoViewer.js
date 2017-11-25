import React, { Component } from 'react';
import PhotoEditor from './PhotoEditor.js'
import './PhotoViewer.css';

class PhotoViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previewURL: '',
      imageURL: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({previewURL: event.target.value});
  }

  handleSubmit(event) {
    this.setState({imageURL: this.state.previewURL});
    event.preventDefault();
  }

  render() {

    let imagePreview = null;

    if (this.state.imageURL) {
      imagePreview = (<img src={this.state.imageURL} className="image-viewer" alt="" />);
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter image url:
            <input type="text" value={this.state.previewURL} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>

        <div className="image-container">
          {imagePreview}
        </div>

        <PhotoEditor />
        
      </div>
    );
  }
}

export default PhotoViewer;
