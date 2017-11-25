import React, { Component } from 'react';
import './PhotoViewer.css';

class PhotoViewer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      previewURL: '',
      imageURL: '',
      grayscale: false,
      blur: false,
      sepia: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.applyGrayScale = this.applyGrayScale.bind(this);
    this.applyBlurring = this.applyBlurring.bind(this);
    this.applySepia = this.applySepia.bind(this);

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

  applyBlurring(event) {
    this.setState({blur: true});
    event.preventDefault();
  }

  applySepia(event) {
    this.setState({sepia: true});
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

        <div className="filter-list">
          <form className="filter-button" onSubmit={this.applyGrayScale}>
            <input type="submit" value="Grayscale"/>
          </form>

          <form className="filter-button" onSubmit={this.applyBlurring}>
            <input type="submit" value="Blur"/>
          </form>

          <form className="filter-button" onSubmit={this.applySepia}>
            <input type="submit" value="Sepia"/>
          </form>
        </div>

        <div className="image-container">
          <img src={this.state.imageURL} className={"image-viewer" + (this.state.grayscale ? ' grayscale' : ' normal') + (this.state.blur ? ' blur' : ' normal') + (this.state.sepia ? ' sepia' : ' normal')} alt="" />
        </div>
      </div>
    );
  }
}

export default PhotoViewer;
