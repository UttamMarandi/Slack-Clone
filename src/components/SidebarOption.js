import React from 'react'
import styled from 'styled-components'

const SidebarOption = ({Icon , title, addChannelOption}) => {
    const addChannel = () => {
            
    }
    const selectChannel = () => {
        
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
const SidebarOptionChannel = styled.div`

`