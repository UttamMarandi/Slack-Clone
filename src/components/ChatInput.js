import React from 'react'
import styled from 'styled-components'
import {Button} from "@material-ui/core"
import { useRef } from 'react'
import { db } from '../firebase'
import firebase from 'firebase'
import { useState } from 'react'


const ChatInput = ({channelName, channelId, chatRef}) => {
    const [input , setInput] = useState("")
    console.log(channelId);
    const sendMessage = (e) => {
        e.preventDefault()
         if(!channelId) {
            return false;
        }
        db.collection("rooms").doc(channelId).collection("messages").add({
            message: input,
            timestamp : firebase.firestore.FieldValue.serverTimestamp(),
            user: "Uttam Marandi",
            userImage:"https://scontent.fhyd16-1.fna.fbcdn.net/v/t1.6435-9/46492181_531692437299035_2509064819957563392_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=EtS5wvkmEuoAX8c8uRb&_nc_ht=scontent.fhyd16-1.fna&oh=afe8fd2401f0201dea82428646c60276&oe=614FB393"            
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
                <input type="text" value={input} onChange = {e => setInput(e.target.value)} placeholder = {`Message ${channelName}`} />
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