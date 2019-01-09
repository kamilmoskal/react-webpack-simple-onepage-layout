import React, { Component } from 'react';
import Card from './Card'

class App extends Component {
 
  render() {
    return (
      <main>
          <div className="container">
          {/* <iframe src="//vshare.io/v/fae7ec7/width-470/height-305/" width="470" height="305" frameborder="0" scrolling="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe> */}
            <div className="body-title">
                <h1>Most popular</h1>
            </div>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />


          </div>
      </main>
    );
  }
}

export default App;
