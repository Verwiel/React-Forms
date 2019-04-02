import React, { Component } from 'react';

const loginReturn = <a href="#">Return to Login</a>

class Register extends Component {
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
            
            <input type="checkbox" value="" />
            <label>
              Agree to terms and conditions
            </label>

            <button type="submit">Register</button>
            {loginReturn}
          </form>
        </div>
      );
    }
  };

  export default Register