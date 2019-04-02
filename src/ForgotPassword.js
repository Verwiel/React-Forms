import React from 'react';
import RouterPage from './RouterPage'

class ForgotPassword extends React.Component {
  render() {
    return (
      <div class="vertical-center text-center">
        <form>
          <h1>Forgot Password</h1>
          <p>email blah blah</p>
          <input type="email" placeholder="Enter Email Address" required/>
          <button type="submit">Submit</button>
          <p>Remember?
          <a href="./Login"> Login!</a>
          </p>
          <p> Need an Account?
          <a href="./Register"> Create One Here!</a>
          </p>
        </form>
      </div>
    );
  }
};

  export default ForgotPassword