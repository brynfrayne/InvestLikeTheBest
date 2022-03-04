import React, { Component } from 'react';
import axios from 'axios';

export default class SignUp extends Component {

    state = {
        error: "",
        success: false,
    };

    handleSubmit = (event) => {
        event.preventDefault();

        axios
            .post("https://investlikethebest.herokuapp.com/users/register", {
                email: event.target.email.value,
                password: event.target.password.value,
                first_name: event.target.first_name.value,
                last_name: event.target.last_name.value
            })
            .then(() => {
                this.setState({ success: true, error: "" });
                event.target.reset();
            })
            .catch((error) => {
                this.setState({ success: false, error: error.response.data });
            });
    };


  render() {
    return (
    <form className='user-auth__form'>
        <h3>Sign Up</h3>
        <div className="form-group" onSubmit={this.handleSubmit}>
            <label>First name</label>
            <input type="text" className="form-control" placeholder="First name" />
        </div>
        <div className="form-group">
            <label>Last name</label>
            <input type="text" className="form-control" placeholder="Last name" />
        </div>
        <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" placeholder="Enter email" />
        </div>
        <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter password" />
        </div>
        <button type="submit" className="btn btn-primary btn-block btn--signup">Sign Up</button>
        <p className="forgot-password text-right">
            Already registered <a href="#">sign in?</a>
        </p>
        {this.state.success && <div className="signup__message">Signed up!</div>}
        {this.state.error && <div className="signup__message">{this.state.error}</div>}
    </form>
    )
  }
}
