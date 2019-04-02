import React, { Component } from 'react';

class ForgotPassword extends React.Component {
    render() {
      return (
        <div className="ForgotPassword">
          <h1>Forgot Password</h1>
          <form>
            <p>email blah blah</p>
            <input type="text" placeholder=""/>
            <button type="submit">Submit</button>
          </form>
        </div>
      );
    }
  };

  export default ForgotPassword