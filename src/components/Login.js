import { Button, FormControl, TextField } from "@mui/material";
import axios from "axios";
import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/users/login", this.state)
      .then((res) => {
        alert(this.state.username + " logged in successfully");
      })
      .catch((error) => {
        alert("Login failed, please try again");
      });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div>
          <h3>Login</h3>
          <form onSubmit={this.handleSubmit}>
            <FormControl sx={{ width: "40ch" }} variant="outlined">
              <TextField
                name="username"
                value={username}
                id="username"
                label="Username"
                variant="outlined"
                onChange={this.handleChange}
                required
              />{" "}
              <br />
              <TextField
                type="password"
                name="password"
                value={password}
                id="password"
                label="Password"
                variant="outlined"
                onChange={this.handleChange}
                required
              />{" "}
              <br />
              <Button type="submit" variant="contained">
                Login
              </Button>
              <br />
              <p>New User? Register</p>
            </FormControl>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;