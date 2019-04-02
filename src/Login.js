import React, { Component } from 'react';

class Login extends React.Component {
  render() {
    return (
      <div className="Login">
        <h1>Login</h1>
        <form>  
          <a href="./Register">Create an Account</a>
          <input type="text" placeholder="Username" required/>
          <a href="./ForgotPassword">Forgot Password?</a>
          <input type="password" placeholder="Password" required/>
          <button type="submit">Login</button>
        </form>
      </div>       
    );
  }
}

export default Login;