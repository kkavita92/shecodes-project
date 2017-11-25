import React, { Component } from 'react';
import './PhotoViewer.css';

class PhotoViewer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      previewURL: '',
      imageURL: '',
      grayscale: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.applyGrayScale = this.applyGrayScale.bind(this);

  }

  handleChange(event) {
    this.setState({previewURL: event.target.value});
  }

  handleSubmit(event) {
    this.setState({imageURL: this.state.previewURL});
    event.preventDefault();
  }

  applyGrayScale(event) {
    this.setState({grayscale: true});
    event.preventDefault();
  }

  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter image url:
            <input type="text" value={this.state.previewURL} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>

        <form onSubmit={this.applyGrayScale}>
          <input type="submit" value="Grayscale"/>
        </form>

        <div className="image-container">
          <img src={this.state.imageURL} className={"image-viewer " + (this.state.grayscale ? 'grayscale' : 'normal')} alt="" />
        </div>
      </div>
    );
  }
}

export default PhotoViewer;
