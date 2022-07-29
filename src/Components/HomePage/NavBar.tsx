import React from 'react';
import {Theme} from '../../theme';
import { JCTheme } from '../../theme';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import { NavBarConfig } from '../../config/HomeConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLocationPin } from "@fortawesome/free-solid-svg-icons";


const NavBar: React.FC = ()=>{
    if(NavBarConfig.length > 0)
    {
        return <Wrapper>
            <LeftWrapper>
                <Link href="#footer"><span>Sign up for exclusive updates</span></Link>
            </LeftWrapper>
            <RightWrapper>
            <StoreLink href="/en/store-locator" className="header-store-locator-link relative" title="Store Locator">
                <FontAwesomeIcon icon={faLocationPin} style={{background: JCTheme.rightWrapperBackground, paddingRight: '10px'}}/>
                &nbsp;
                <span className="menu-utility-label">Store Locator</span>
            </StoreLink>
            </RightWrapper>
    </Wrapper>
    }
    else{
        return null
    }

    
};

const Wrapper = styled.nav`
    display: flex;
    flex-direction: row;
    text-align: center;
`

const LeftWrapper = styled.ul`
    width: 175%;
    background-color: ${JCTheme.leftWrapperBackground};
`

const RightWrapper = styled.ul`
    background-color: ${JCTheme.rightWrapperBackground};
    width: 25%;
`

const Link = styled.a`
color: ${JCTheme.leftWrapperColor};
margin-left: 200px;
font-size: 0.82rem;
text-decoration: none;
transition: 0.2s ease-in-out all;
&:hover{
    opacity: 1;
    cursor: pointer;
}
`

const StoreLink = styled.a`
color: ${JCTheme.leftWrapperBackground};
font-size: 0.85rem;
text-decoration: none;
line-height: 30px;
letter-spacing: .3px;
transition: 0.2s ease-in-out all;
&:hover{
    opacity: 1;
    color: ${JCTheme.rightWrapperColor}
}
&.active{
    opacity: 1;
}
`

export default NavBar;
