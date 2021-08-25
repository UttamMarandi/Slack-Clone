import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
//Components
import Header from './Header';

function App() {
  return (
    <div className="app">
      <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact>
            <Header/>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
