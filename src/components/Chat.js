import React from 'react'
import styled from 'styled-components'
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectRoomId } from '../features/appSlice';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { useEffect } from 'react';

//Icons
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

//Components
import Message from '../Message';
import { db } from '../firebase';
import ChatInput from './ChatInput';





const Chat = () => {
    const chatRef = useRef("")
    const roomId = useSelector(selectRoomId)
    const [roomDetails] = useDocument(roomId && db.collection("rooms").doc(roomId))
    //if there is a roomId then access rooms collection and the access roomId doc
    const [roomMessages, loading] = useCollection(
        roomId &&
        db
        .collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
    )
    //if there is a roomId then accesss rooms collection , then document with given roomId , then messages collection. order them by provided timestamp
    console.log(roomDetails?.data());
    console.log(roomMessages);
    
    //onloading or changing room , scroll to bottom
    useEffect(()=>{
        chatRef?.current?.scrollIntoView({
            behavior : "smooth"
        })
    },[roomId,loading])


    return (
        <ChatContainer>
            <Header>
                <HeaderLeft>
                    <h4><strong>#{roomDetails?.data().name}</strong></h4>
                    <StarBorderIcon/>
                </HeaderLeft>
                <HeaderRight>
                    <p>
                        <InfoOutlinedIcon/> Details
                    </p>
                </HeaderRight>
            </Header>
            <ChatMessages>
                {roomMessages?.docs.map((doc)=>{
                    const {message, timestamp, user, userImage} = doc.data()
                    return(
                        <Message
                            message= {message}
                            // key = {doc.id}
                            timestamp = {timestamp}
                            user = {user}
                            userImage = {userImage}
                        />
                    )
                })}
                <ChatBottom ref={chatRef}> 

                </ChatBottom>
            </ChatMessages>

            <ChatInput 
                chatRef={chatRef}
                channelName= {roomDetails?.data().name}
                channelId = {roomId}
            />
        </ChatContainer>
    )
}

export default Chat



const ChatBottom = styled.div `
    padding-bottom: 200px;

`

const ChatMessages = styled.div `

`

const ChatContainer = styled.div `
    flex: 0.7;
    flex-grow: 1;
    overflow-y: scroll;
    margin-top: 60px;
`
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid gray;
`
const HeaderLeft = styled.div`
    display: flex;
    align-items: center;

    >h4 {
        display: flex;
        text-transform: lowercase;
        margin-right: 10px;
        > .MuiSvgIcon-root {
            margin-left: 10px;
            font-size: 18px;
        }
    }
`
const HeaderRight = styled.div`
    display: flex;
    align-items: center;
    > p >.MuiSvgIcon-root {
        margin-right: 5px !important;
        font-size: 16px;
    }

`