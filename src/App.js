import React from 'react';
import '@patternfly/react-core/dist/styles/base.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import history from './history';
import NewsFeed from './components/NewsFeed';

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/' component={NewsFeed}/>
        <Route path='/newsfeed' component={NewsFeed}/>
      </Switch>
    </Router>
  );
}

export default App;
