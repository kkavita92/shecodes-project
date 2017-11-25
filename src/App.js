import React, { Component } from 'react';
import PhotoViewer from './PhotoViewer.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Photo Editor</h1>
        <PhotoViewer/>
      </div>
    );
  }
}

export default App;
