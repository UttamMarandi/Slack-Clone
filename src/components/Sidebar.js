import React from 'react'
import styled from 'styled-components'

//Icons
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';

const Sidebar = () => {
    return (
        <SidebarConatainer>
                <SidebarHeader>
                    <SidebarInfo>
                        <h2>SLACK CLONE</h2>
                        <h3>
                            <FiberManualRecordIcon/>
                            Uttam Marandi
                        </h3>
                    </SidebarInfo>
                    <CreateIcon/>
                </SidebarHeader>
        </SidebarConatainer>
    )
}

export default Sidebar

const SidebarConatainer = styled.div`
    background-color: var(--slack-color);
    color: white;
    flex: 0.3;
    border-top: 1px solid #49274b;
    max-width: 260px;
    margin-top: 60px;
`
const SidebarHeader = styled.div `
    display: flex;
    border-bottom: 1px solid #49274b;
    padding: 13px;
    > .MuiSvgIcon-root {
        padding: 8px;
        color : #49274b;
        font-size: 18px;
        background-color: white;
        border-radius: 999px;
    }
`
const SidebarInfo = styled.div `
    flex : 1;
    > h2 {
        font-size: 15px;
        font-weight : 900;
        margin-bottom: 5px;
    }
    >h3 {
        display: flex;
        font-size: 13px;
        font-weight: 400;
        align-items: center;
        > .MuiSvgIcon-root {
            font-size: 14px;
            margin-top: 1px;
            margin-right: 2px;
            color: green;
            border: none;
            outline: none;
        }
    }
`