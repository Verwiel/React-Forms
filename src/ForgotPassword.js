import React, { Component } from 'react';

const loginReturn = <a href="#">Return to Login</a>
const createAccount = <a href="#">Create New Account</a>

class ForgotPassword extends Component {
    render() {
      return (
        <div className="ForgotPassword">
          <h1>Forgot Password</h1>
          <form>
            <p>email blah blah</p>
            <input type="text" placeholder=""/>
            <button type="submit">Submit</button>
            {loginReturn}
            {createAccount}
          </form>
        </div>
      );
    }
  };

  export default ForgotPassword