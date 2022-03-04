import React, { Component } from 'react'
import axios from 'axios';

export default class Login extends Component {

    handleSubmit = (event) => {
        event.preventDefault();

        axios
            .post('https://investlikethebest.herokuapp.com/users/login', {
                email: event.target.email.value,
                password: event.target.password.value
            })
            .then((response) => {
                sessionStorage.setItem("token", response.data.token);
                this.setState({ success: true });
            })
            .catch((error) => {
                this.setState({ error: error.response.data });
            });
    };

  render() {
    return (
    <form className='user-auth__form' onSubmit={this.handleSubmit}>
        <h3>Sign In</h3>
        <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" placeholder="Enter email" />
        </div>
        <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter password" />
        </div>
        <div className="form-group">
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
            </div>
        </div>
        <button type="submit" className="btn btn-primary btn-block btn--submit">Submit</button>
        <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
        </p>
    </form>
    )
  }
}
