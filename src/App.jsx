import React, { Component } from "react";

import "./App.css";
import NavBar from "./components/navbar.jsx";
import Banner from "./components/banner.jsx";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="app">
        <NavBar></NavBar>
        <Banner></Banner>
      </div>
    );
  }
}

export default App;
