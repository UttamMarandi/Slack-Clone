import React from 'react'
import styled from 'styled-components'
import {Button} from "@material-ui/core"
import { useRef } from 'react'
import { auth, db } from '../firebase'
import firebase from 'firebase'
import { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'


const ChatInput = ({channelName, channelId, chatRef, roomDetails}) => {
    const[user] = useAuthState(auth)
    const [input , setInput] = useState("")
    console.log("channelId",channelId);
    const sendMessage = (e) => {
        e.preventDefault()
         if(!channelId) {
            return false;
        }
        db.collection("rooms").doc(channelId).collection("messages").add({
            message: input,
            timestamp : firebase.firestore.FieldValue.serverTimestamp(),
            user: user.displayName,
            userImage:user.photoURL,            
        })
        //on typing new message scroll into view
        chatRef.current.scrollIntoView({
            behavior:"smooth"
        })

        setInput("")
        
        
    }
    return (
        <ChatInputContainer>
            <form>
                <input type="text" value={input} onChange = {e => setInput(e.target.value)} placeholder = { roomDetails ?`Message ${channelName}`:`Select/Create Channel to start messaging`} />
                <Button hidden type="submit" onClick= {sendMessage}> SEND
                </Button>
            </form>
        </ChatInputContainer>
    )
}

export default ChatInput

const ChatInputContainer = styled.div `
    border-radius: 20px;
    >form {
        position: relative;
        display: flex;
        justify-content: center;
        >input {
            position: fixed;
            bottom: 30px;
            width: 60%;
            border-radius: 3px;
            padding: 2px;
            outline: none;
            border: 1px solid gray;
            height: 10px;
            padding: 20px;

        }
        >button {
            display: none !important;
        }

    }

`

