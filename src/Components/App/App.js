import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Register from '../Forms/Register';
import ForgotPassword from '../Forms/ForgotPassword';
import Login from '../Forms/Login';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>   
          <Route exact path="/" component={Login} />
          <Route path="/Register" component={Register} />
          <Route path="/ForgotPassword" component={ForgotPassword} />  
        </Switch>
      </Router> 
    );
  }
}

export default App