//importer  la react library
import React, { Component } from "react";
import { Button } from "antd";
//creation de la classe du composant qu'on va afficher
class Login extends Component {
  constructor(props) {
    //standard
    super(props); //standard
    this.user = "hello";
    this.pass = "world";
    console.log(props);

    this.state = {
      login: "",
      password: "",
      tentatives: 0,
    };
  }
  render() {
    console.log(this.state);
    return (
      <div
        style={{
          padding: 20,
          background: "grey",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <input
          placeholder="login"
          onChange={(evt) => this.setState({ login: evt.target.value })}
          value={this.state.login}
        ></input>
        <input
          placeholder="password"
          onChange={(evt) => this.setState({ password: evt.target.value })}
          type="password"
          value={this.state.password}
        ></input>
        <div>
          {this.state.tentatives > 3 ? (
            <p>{this.props.errorMessage}</p>
          ) : (
            <Button
              onClick={(evt) => {
                this.setState({ tentatives: this.state.tentatives + 1 });
                if (
                  this.state.login === this.user &&
                  this.state.password === this.pass
                )
                  alert("correct user and password");
                else alert("user or password incorrect");
              }}
            >
              login
            </Button>
          )}
        </div>
      </div>
    );
  }
}
export default Login; //pour rendre le composant utilisable par les autres composants
