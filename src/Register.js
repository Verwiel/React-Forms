import React, { Component } from 'react';

class Register extends React.Component {
    render() {
      return (
        <div className="Register">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="First Name"/>
            <input type="text" placeholder="Last Name"/>
            <input type="email" placeholder="Email Address"/>
            <input type="tel" placeholder="Phone Number"/>
            <input type="text" placeholder="Choose a Username"/>
            <input type="password" placeholder="Choose a Password"/>
            <input type="password" placeholder="Confirm Password"/>
            <label>
              Agree to terms and conditions
              <input type="checkbox" value="" />
            </label>
            <button type="submit">Create Account</button>
          </form>
        </div>
      );
    }
  };

  export default Register