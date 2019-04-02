import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Register from './Register';
import ForgotPassword from './ForgotPassword';

// const loginReturn = <Link to="/Login">Return to Login</Link>
const createAccount = <a href="Register.js">Create New Account</a>
const forgotPassword = <a href="ForgotPassword.js">Forgot Password?</a>

class Login extends Component {
    render() {
      return (
        <div className="Login">1
          <h1>Login</h1>
          <form>
            <router>
              {createAccount}
            </router>
            <input type="text" placeholder="Username"/>
            <router>
              {forgotPassword}
            </router>
            <input type="password" placeholder="Password"/>
            <button type="submit">Login</button>
          </form>
        </div>
      );
    }
  }

export default Login;