import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { enterRoom } from '../features/appSlice'
import {db} from "../firebase"



const SidebarOption = ({Icon , title, addChannelOption, id}) => {
    const dispatch = useDispatch()
    
    const addChannel = () => {
            const channelName = prompt("Please enter the channel name")
            // get channelName from user and push to db
            if(channelName) {
                db.collection("rooms").add({
                    name : channelName
                })
            }
    }
    const selectChannel = () => {
        if(id) {
            dispatch(enterRoom({
                roomId : id
                //the 
            }))
        }
    }

    return (
        
        <SidebarOptionContainer
            onClick = {addChannelOption ? addChannel : selectChannel}
            // onclick of sidebar options , if addChannel option prop is proveided then run addChannel otherwise run selectChannel
        >
            {Icon && <Icon fontSize = "small" style = {{padding : "10px"}}/>}
            {/* Here fontSize is not css propery it's specific prop to icon */}
            {Icon ? (
                <h3>{title}</h3>
            ): (
                <SidebarOptionChannel>
                    <span>#</span> {title}
                </SidebarOptionChannel>
            )}
        </SidebarOptionContainer>
    )
}

export default SidebarOption

const SidebarOptionContainer = styled.div `
    display: flex;
    align-items: center;
    font-size: 12px;
    padding-left: 2px;
    cursor: pointer;
    :hover {
        opacity: 0.9;
        background-color: #340e36;
    }
    > h3 {
        font-weight: 500;
        span {
            padding : 15px
        }
    }

`
const SidebarOptionChannel = styled.h3`
    padding: 10px 0;
    font-weight: 300;
`