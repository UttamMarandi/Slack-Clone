
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
//Components
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';

//utils
import styled from 'styled-components'


function App() {
  return (
    <div className="app">
      <Router>
      <div>
        <Header/>
        <AppBody>
          <Sidebar/>
          <Switch>
            <Route path="/" exact>
              <Chat/>
            </Route>
        </Switch>
        </AppBody>
        
      </div>
    </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div `
    display: flex;
    height: 100vh;
`