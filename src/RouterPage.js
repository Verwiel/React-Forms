import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Register from './Register';
import ForgotPassword from './ForgotPassword';
import Login from './Login';

class RouterPage extends React.Component {
  render() {
    return (
      <Router>
        <div className="Home">       
        <a href="./Login">Welcome!</a>
          <Route path="/Register" component={Register} />
          <Route path="/Login" component={Login} />
          <Route path="/ForgotPassword" component={ForgotPassword} />  
        </div>
      </Router> 
    );
  }
}

export default RouterPage;