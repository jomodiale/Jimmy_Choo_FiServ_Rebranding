import React, { useContext, useEffect, useState } from "react";
import { JCTheme, Theme } from "../../theme";
import styled from "styled-components";
import HeaderLogo from "../../assets/HeaderLogo.svg";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { search } from "react-icons-kit/feather/search";
import HomeSearchBox from "./HomeSearchBox";
import { x } from "react-icons-kit/feather/x";
import Fade from "@mui/material/Fade";
import { useLocation, useNavigate } from "react-router-dom";
import { HeaderConfig } from "../../config/HomeConfig";
import Popover from "@mui/material/Popover";
import ContextForm from "../CustomContext/ContextForm";
import { CustomContextContext } from "../CustomContext/CustomContextContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBasketShopping, faHeart } from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () => {
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();
  const {getProfile} = useContext(CustomContextContext)

  //color change
  const [myColor, setmyColor] = useState(JCTheme.menuColor);

  const NavigationLink = styled(Link)`
  margin-right: 30px;
  margin-top: 20px;
  color: ${myColor};
  text-decoration: none;
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  transition: 0.2s ease-in-out all;
  &:hover {
    opacity: 0.7;
    color: ${JCTheme.menuHover};
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;

  const onSearchPage = location.pathname.includes("search");
  const toggleSearchBox = () => {
    if (onSearchPage) {
      const input = document.querySelector(".search-box input");
      if (input instanceof HTMLElement) {
        input.focus();
      }
      return;
    }
    setOpenSearch(!openSearch);
  };

  useEffect(() => {
    if (openSearch) {
      const input = document.querySelector(".home-search-box input");
      if (input instanceof HTMLElement) {
        input.focus();
      }
    }
  }, [openSearch]);

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <Wrapper>
      <Logo src={HeaderLogo} onClick={() => navigate("/home")} />
        <LeftWrapper>
        &nbsp;
        {HeaderConfig.map((item) => {
              return (
                <NavigationLink key={item.title} to={item.redirectTo}>
                  { item.title ==='Sale' ? <p style={{color: JCTheme.sale}}>Sale</p> : <p>{item.title}</p>}
                </NavigationLink>
              );
            })}
        </LeftWrapper>
        <RightWrapper>
          <LinkWrapper>
            {/* <Divider/> */}
            <IconsWrapper>
              <IconContainer
                style={{ color: Theme.headerIconColor, cursor: "pointer" }}
                onClick={() => toggleSearchBox()}
              >
                {openSearch && !onSearchPage ? (
                  <Icon icon={x} size={20} />
                ) : (
                  <Icon icon={search} size={20} />
                )}
              </IconContainer>
              <FontAwesomeIcon icon={faHeart} style={{ color: Theme.headerIconColor, cursor: "pointer", fontSize: '20px'  }}/>
              <ProfileIconContainer
                style={{ color: Theme.headerIconColor, cursor: "pointer" }}
                aria-describedby={id}
                onClick={(event)=>handleClick(event)}
              >
                <ProfileAvatar src = {getProfile().profile} alt = {'profile pic'}/>
                <ProfileName>{getProfile().name.split(' ').slice(0, -1).join(' ')}</ProfileName>
              </ProfileIconContainer>
              <FontAwesomeIcon icon={faBasketShopping} style={{ color: Theme.headerIconColor, cursor: "pointer", fontSize: '20px' }} />
              <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                >
                  <ContextForm/>
                </Popover>
            </IconsWrapper>
          </LinkWrapper>
        </RightWrapper>
      </Wrapper>
      <Fade in={openSearch && !onSearchPage}>
        <SearchContainer>
          <SearchBoxContainer>
            <HomeSearchBox toggleSearchBox={toggleSearchBox} />
          </SearchBoxContainer>
        </SearchContainer>
      </Fade>
    </>
  );
};

const Wrapper = styled.header`
  font-family: 'Jost', sans-serif;
  height: 70px;
  background-color: ${Theme.secondaryText};
  display: flex;
  padding: 0px 40px;
  align-items: center;
  box-shadow: 0px 6px 16px rgba(229, 232, 232, 0.75);
  font-family: inherit;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 0.01em;
`;

const Logo = styled.img`
  height: 50px;
  width: 250px;
  margin-left: -20px;
  object-fit: contain;
`;

const LeftWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 50px;
`;

const RightWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  @media only screen and (min-width: 1500px) {
    margin-left: 250px;
  }
`;

const LinkWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 800px;
  @media (max-width: 1000px) {
    width: auto;
  }
`;

const Divider = styled.div`
  height: 50px;
  border-right-width: 2px;
  width: 1px;
  height: 48px;
  background: #e5e8e8;
  @media (max-width:1000px) {
    display: none;
  }
`;

const SearchContainer = styled.div`
  width: 100%;
  height: 150px;
  box-shadow: 0px 6px 16px rgba(229, 232, 232, 0.75);
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 100px;
  position: absolute;
  background-color: white;
  justify-content: center;
`;

const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (min-width: 400px) {
    font-size: 20px
  }
`;

const IconContainer = styled.button`
background: none;
border: 0px;
width: 55px;
transition: 0.2s ease-in-out all;
&:hover{
  transform: scale(0.95);
}
&:active{
  transform: scale(0.85);
}
`

const ProfileName = styled.span`
font-size  : 16px;
font-weight: 400;
font-family: inherit;
margin-left: 15px;
color : ${Theme.headerIconColor};
text-overflow: ellipsis;
`


const ProfileIconContainer = styled.button`
  background: none;
  border: 0px;
  margin-left: 20px;
  display: flex;
  align-items: center;
  transition: 0.2s ease-in-out all;
  &:hover{
  transform: scale(0.95);
}
&:active{
  transform: scale(0.85);
}

`

const SearchBoxContainer = styled.div`
  width: 50%;
  max-width: 800px;
  min-width: 500px;
  @media (max-width: 480px) {
    min-width: 80vw;
  }
`;


const ProfileAvatar = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 24px;
  object-fit: cover;
`

export default Header;