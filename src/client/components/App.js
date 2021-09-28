import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import Loading from './Loading';
import NoMatch from './NoMatch';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/loading" component={Loading} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;