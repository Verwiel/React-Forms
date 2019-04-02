import React, { Component } from 'react';

class ForgotPassword extends React.Component {
  render() {
    return (
      <div className="ForgotPassword">
        <h1>Forgot Password</h1>
        <form>
          <p>email blah blah</p>
          <input type="text" placeholder="" required/>
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