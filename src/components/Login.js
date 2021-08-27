import React from 'react'
import styled from 'styled-components'
import {Button} from "@material-ui/core"
import { auth,provider } from '../firebase'


const Login = () => {

    const signIn = (e) => {

        e.preventDefault()
        //sign in with google
        auth.signInWithPopup(provider)
        .catch(error => error.message)
    }

    return (
        <LoginContainer>
            <LoginInnerContainer>
                <img src="https://cdn.iconscout.com/icon/free/png-256/slack-logo-1481728-1254330.png" alt="" />
                <h1>Sign in to Slack Clone</h1>
                <h3>by Uttam</h3>
                <Button onClick={signIn}>Sign in with google</Button>
            </LoginInnerContainer>
        </LoginContainer>
    )
}

export default Login

const LoginContainer = styled.div `
    background-color: #f8f8f8;
    height: 100vh;
    display: grid;
    place-items: center;
`
const LoginInnerContainer = styled.div `
    padding : 100px;
    text-align: center;
    border-radius: 10px;
    border-radius: 10px;
    box-shadow:  5px 5px 8px #d9d9d9,
             -5px -5px 8px #e7e7e7;

    >img {
        object-fit: contain;
        height: 100px;
        margin-bottom: 40px;
    }

    > button {
        margin-top: 50px;
        text-transform: inherit;
        background-color: #0a8d48;
        color:white;
        padding : 8px 10px;
    }
`