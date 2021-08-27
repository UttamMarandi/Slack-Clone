
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
import Login from './components/Login';

//utils
import styled from 'styled-components'
import {useAuthState} from "react-firebase-hooks/auth"
import { auth } from './firebase';
import Spinner from 'react-spinkit';


function App() {
  //firebase authentication
  const [user, loading] = useAuthState(auth)

  if(true) {
    return(
      <AppLoading>
        <AppLoadingContainer>
          <img src="https://cdn.iconscout.com/icon/free/png-256/slack-logo-1481728-1254330.png" alt="" />          
        </AppLoadingContainer>

        <Spinner
          name="ball-spin-fade-loader"
          color="purple"
          fadeIn="none"
        />
      </AppLoading>
    )
  }

  return (
    <div className="app">
      <Router>
        {/* if user object not present then show Login page else show the app */}
        {!user ? 
        <Login/>:(
          <>
          <Header/>
          <AppBody>
            <Sidebar/>
            <Switch>
              <Route path="/" exact>
                <Chat/>
              </Route>
            </Switch>
          </AppBody>
          </>
        )}
    </Router>
    </div>
  );
}

export default App;

const AppLoading = styled.div `
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`
const AppLoadingContainer = styled.div `
  display: flex;
  text-align: center;
  padding-bottom: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  place-items: center;
  position: relative;

  >img {
    height: 100px;
    padding: 20px;
    text-align: center;
    
  }
`

const AppBody = styled.div `
    display: flex;
    height: 100vh;

`
