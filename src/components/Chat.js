import React from 'react'
import styled from 'styled-components'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

const Chat = () => {
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
        </ChatContainer>
    )
}

export default Chat

const ChatContainer = styled.div `
    flex: 0.7;
    flex-grow: 1;
    overflow-y: scroll;
    margin-top: 60px;
`
const Header = styled.div`
    display: flex;
    justify-content: space-between;
`
const HeaderLeft = styled.div`

`
const HeaderRight = styled.div`
    display: flex;
    align-items: center;

`