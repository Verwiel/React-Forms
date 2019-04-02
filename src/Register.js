import React from 'react';
import RouterPage from './RouterPage'

class Register extends React.Component {
  render() {
    return (
      <div class="vertical-center text-center">
        <form>
          <h1>Register</h1>
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
            <input type="checkbox" value="" required/>
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