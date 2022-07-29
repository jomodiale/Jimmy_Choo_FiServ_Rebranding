import React from 'react';
import {JCTheme} from '../../theme';
import styled from "styled-components";
import { HeroConfig } from '../../config/HomeConfig';
import { useNavigate } from 'react-router-dom';

const HeroHome: React.FC = ()=>{
    const navigate = useNavigate();
    return <Wrapper>
        <TextWrapper>
        <Title>{HeroConfig.title}</Title>
        <Button onClick = {()=> navigate(HeroConfig.onClickButtonRedirect)}>{HeroConfig.buttonText}</Button>
        </TextWrapper>
    </Wrapper>
};



const Wrapper = styled.div`
height: 750px;
width: 100%;
background-color: aliceblue;
font-family: inherit;
display: flex;
flex-direction: column;
justify-content: center;
padding-left: 120px;
background: url(${HeroConfig.background}) no-repeat;
background-position: right center;
background-size: cover;
@media (max-width: 480px) {
    padding-left: 10px;
   width: 100vw;
   justify-content: flex-start;
   padding-top: 80px;
}
`

const Video = styled.video`
object-fit: cover;
position: absolute;
top: 0;
left: 0;
height: 100%;
width: 100vw; 
`

const TextWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: white;
margin-right: 120px;
`
const Title = styled.h1`
font-weight: 500;
font-size: 1.846rem;
line-height: 66px;
letter-spacing: 3.5px;
color: ${JCTheme.leftWrapperBackground};
@media (max-width: 480px) {
    font-size: 40px;
}
`
const Button = styled.button`
padding: 8px 16px;
height: 45px;
width: 230px;
box-shadow: none;
background-color: transparent;
font-family: inherit;
font-weight: 400;
font-size: 13px;
line-height: 24px;
cursor: pointer;
transition: 0.2s ease-in-out;
&:hover {
    background-color: ${JCTheme.leftWrapperBackground};
    color: ${JCTheme.leftWrapperColor};
    font-weight: 600;
}

`
export default HeroHome;