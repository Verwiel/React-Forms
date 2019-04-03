import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div class="vertical-center text-center">
        <form>  
          <h1>Login</h1>
          <a href="/Register">Create an Account</a>
          <input type="text" placeholder="Username" required/>
          <a href="/ForgotPassword">Forgot Password?</a>
          <input type="password" placeholder="Password" required/>
          <button type="submit">Login</button>
        </form>
      </div>       
    );
  }
}

export default Login;