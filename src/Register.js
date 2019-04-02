import React, { Component } from 'react';

class Register extends React.Component {
  render() {
    return (
      <div className="Register">
        <h1>Register</h1>
        <form>
          <input type="text" placeholder="First Name" required/>
          <input type="text" placeholder="Last Name" required/>
          <input type="email" placeholder="Email Address" required/>
          <input type="tel" placeholder="Phone Number"/>
          <input type="number" placeholder="Age" required/>
          <input type="text" placeholder="Choose a Username" required/>
          <input type="password" placeholder="Choose a Password" required/>
          <input type="password" placeholder="Confirm Password" required/>
          <label>
            Agree to terms and conditions
            <input type="checkbox" value="" />
          </label>
          <button type="submit">Create Account</button>
          <p> Already Have an Account?
          <a href="./Login"> Login Here!</a>
          </p>
        </form>
      </div>
    );
  }
};

  export default Register