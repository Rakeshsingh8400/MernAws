import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Sandbox from './components/Sandbox';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/sandbox" component={Sandbox} />
          <Route path="/home" component={Home} />
          {/* Add a default route or a 404 component */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
