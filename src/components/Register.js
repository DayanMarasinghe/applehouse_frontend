import { Button, FormControl, TextField } from "@mui/material";
import axios from "axios";
import React, { Component } from "react";

class Register extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          username: "",
          password: "",
          role: "User",
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
          .post("http://localhost:4000/users/create", this.state, {})
          .then((response) => {
            console.log(response);
            alert("User created successfully");
            window.location.reload(false);
        });
    };
    
    render(){
        return(
            <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <div>
            <h3>Create User</h3>
            <form id="regForm" onSubmit={this.handleSubmit}>
              <FormControl sx={{ width: "40ch" }} variant="outlined">
                <TextField
                  name="username"
                  id="username"
                  label="Username"
                  variant="outlined"
                  value={username}
                  onChange={this.handleChange}
                  required
                />{" "}
                <br />
                <TextField
                  name="password"
                  id="password"
                  label="Password"
                  variant="outlined"
                  value={password}
                  onChange={this.handleChange}
                  required
                />{" "}
                <br />
                <Button type="submit" variant="contained">
                  Submit
                </Button>
              </FormControl>
            </form>
            <br />
            </div>
            </div>
        );
    }

}

export default Register;