import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Register from './Register';
import ForgotPassword from './ForgotPassword';
import Login from './Login';


function goToLogin() {
    return (
      <Login></Login>
    )
  }
  

function goToRegister() {
  return (
    <Register></Register>
  )
}

function goToPassword() {
    return (
      <ForgotPassword></ForgotPassword>
    )
  }
  

class Home extends React.Component {
  render() {
    return (
      <Router>
        <div className="Home">
          <ul>
            <li>
              <Link to={"./Login"}>Login</Link>
            </li>
            <li>
              <Link to={"./Register"}>Create New Account</Link>
            </li>
            <li>
              <Link to="/ForgotPassword">Forgot Password?</Link>
            </li>
          </ul>

          <hr />
          <Route path="/Register" component={goToRegister} />
          <Route path="/Login" component={goToLogin} />
          <Route path="/ForgotPassword" component={goToPassword} />
        </div>
      </Router> 
    );
  }
}

export default Home;