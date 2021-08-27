import React from 'react'
import styled from 'styled-components'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { useSelector } from 'react-redux';
import ChatInput from './ChatInput';
import { selectRoomId } from '../features/appSlice';

const Chat = () => {
    const roomId = useSelector(selectRoomId)
    return (
        <ChatContainer>
            <Header>
                <HeaderLeft>
                    <h4><strong>#Room-Name</strong></h4>
                    <StarBorderIcon/>
                </HeaderLeft>
                <HeaderRight>
                    <p>
                        <InfoOutlinedIcon/> Details
                    </p>
                </HeaderRight>
            </Header>
            <ChatMessages>
            {/* List all message */}
            </ChatMessages>

            <ChatInput 
                channelId = {roomId}
            />
        </ChatContainer>
    )
}

export default Chat

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