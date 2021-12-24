import React, { Component } from "react";
import Logo from "./logo.svg";
import "./App.css";
import Login from "./components/login";
import "antd/dist/antd.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>hello world</h1>
        <p></p>
        <Login errorMessage="Too much tentative" buttonDisabled={false}></Login>
      </div>
    );
  }
}

export default App;
