import React, { Component } from 'react';
import NavLeft from './components/Navbar/NavLeft'
import Home from './components/Home'
import "overlayscrollbars/css/OverlayScrollbars.css";
import "overlayscrollbars/js/OverlayScrollbars.js";

class App extends Component {
  componentDidMount(){
    document.addEventListener("DOMContentLoaded", function() {
      OverlayScrollbars(document.querySelectorAll("body"), {className : "os-theme-dark" });
      OverlayScrollbars(document.querySelectorAll(".right-navbar"), {className : "os-theme-light" });
    });
  }
  render() {
    return (
      <div className="App ">
        <NavLeft />
        <Home />
      </div>
    );
  }
}

export default App;
