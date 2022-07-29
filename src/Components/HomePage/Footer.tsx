import React from "react";
import styled from "styled-components";
import { JCTheme } from "../../theme";
import WhiteLogo from "../../assets/jimmy.svg";
import Facebook from '../../assets/facebook.png'
import Instagram from '../../assets/instagram.png'
import Twitter from '../../assets/twitter.png'
import Pinterest from '../../assets/pinterest.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPeopleGroup, faLocationPin, faHeadphonesSimple } from "@fortawesome/free-solid-svg-icons";


const Footer: React.FC = () => {
  return (
    <Wrapper>
      <TopFooter>
        <Title>Sign up for Jimmy Choo Updates</Title>
        <SubTitle>Be first to receive early access to our latest collections, exclusive events and news</SubTitle>
        <form>
          <EmailField>
            <Label>Email address<span style={{color: JCTheme.sale, fontSize: '20px'}}>*</span><br/></Label>
            <Input type='text' placeholder="Enter your email address"/>
          </EmailField>
          <Small>
            <small> By entering your email address you are accepting our <a href='#' style={{color: JCTheme.leftWrapperBackground}}>Terms &amp; Conditions</a> and <a href='#' style={{color: JCTheme.leftWrapperBackground}}>Privacy &amp; Cookie Policy.</a></small>
          </Small>
        </form>
      </TopFooter>
      <NavigationFooter>
          <Row>
            <LogoWrapper>
              <Logo></Logo>
            </LogoWrapper>
            <Column></Column>
            <Column>
              <h2 style={{ fontSize: '0.92rem', fontWeight: '500', marginBottom: '10px'}}><span> <FontAwesomeIcon icon={faLocationPin} /></span> &nbsp;Our Stores</h2>
              <ul style={{ listStyle: 'none', padding: 0}}>
                <li><Link href='#'>Store Locator</Link></li>
              </ul>
            </Column>
            <Column>
              <h2 style={{ fontSize: '0.92rem', fontWeight: '500', marginBottom: '10px'}}><span> <FontAwesomeIcon icon={faHeadphonesSimple} /></span> &nbsp;Customer Service</h2>
              <ul style={{ listStyle: 'none', padding: 0}}>
                <li><Link href='#'>Check My Order Status </Link></li>
                <li><Link href='#'>Size Guide</Link></li>
                <li><Link href='#'>Delivery &amp; Returns</Link></li>
                <li><Link href='#'>Product Care</Link></li>
                <li><Link href='#'>FAQ</Link></li>
                <li><Link href='#'>Contact Us</Link></li>
                <li><Link href='#'>Made-To-Order</Link></li>
                <li><Link href='#'>Exclusive Services</Link></li>
              </ul>
            </Column>
            <Column>
              <h2 style={{ fontSize: '0.92rem', fontWeight: '500', marginBottom: '10px'}}><span> <FontAwesomeIcon icon={faPeopleGroup} /></span> &nbsp;Our Company</h2>
              <ul style={{ listStyle: 'none', padding: 0}}>
                <li><Link href='#'>Terms &amp; Conditions</Link></li>
                <li><Link href='#'>Privacy Policy</Link></li>
                <li><Link href='#'>About Us</Link></li>
                <li><Link href='#'>Careers</Link></li>
                <li><Link href='#'>Investor Relations</Link></li>
                <li><Link href='#'>Corporate Social Responsibility</Link></li>
                <li><Link href='#'>Modern Slavery Act</Link></li>
                <li><Link href='#'>Gender Pay Gap Report</Link></li>
              </ul>
            </Column>
          </Row>
      </NavigationFooter>
      <Socials>
          <Row style={{marginLeft: '-40px'}}> 
            <Col><img src={Instagram}/></Col>
            <Col><img src={Facebook}/></Col>
            <Col><img src={Twitter}/></Col>
            <Col><img src={Pinterest}/></Col>
            <Curr><Link href='#' style={{ border: '1px solid #fff', fontWeight:'500', padding: '15px'}}> £ United Kingdom | GB </Link></Curr>
          </Row>
      </Socials>
      <BottomFooter>
        <span style={{margin: '-40px', fontWeight: '400'}}>© Jimmy Choo S.r.l. P.IVA IT04636090963</span>
      </BottomFooter>
    </Wrapper>
  );
};


const Wrapper = styled.div`
`;

const TopFooter = styled.div`
  font-family: 'Jost', sans-serif;
  width: 100%;
  background-color: #fafafa;
  padding: 32px 60px;
  line-height: 1.5;
  letter-spacing: .03em;
  padding: 64px 0;
`;

const Title = styled.h4`
  color: ${JCTheme.leftWrapperBackground};
  text-align: center;
  font-size: 2.15rem;
  font-weight: 900;
  letter-spacing: 1px;
  line-height: 36px;
  margin-bottom: 10px;
`
const SubTitle = styled.p`
color: ${JCTheme.leftWrapperBackground};
text-align: center;
font-size: 1rem;
margin-bottom: 32px;
`

const EmailField = styled.div`
  width: 354px;
  margin: 0 auto 16px;
`

const Label = styled.label`
  color: #616161;
  font-size: .92rem;
  text-align: left;
  font-weight: 300;
  cursor: pointer;
`

const Input = styled.input`
font-size: 1rem;
line-height: 20px;
display: block;
padding: 9px 16px;
border: 1px solid #bdbdbd;
background: #fff;
width: 100%;
font-weight: 300;
background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHklEQVQ4EaVTO26DQBD1ohQWaS2lg9JybZ+AK7hNwx2oIoVf4UPQ0Lj1FdKktevIpel8AKNUkDcWMxpgSaIEaTVv3sx7uztiTdu2s/98DywOw3Dued4Who/M2aIx5lZV1aEsy0+qiwHELyi+Ytl0PQ69SxAxkWIA4RMRTdNsKE59juMcuZd6xIAFeZ6fGCdJ8kY4y7KAuTRNGd7jyEBXsdOPE3a0QGPsniOnnYMO67LgSQN9T41F2QGrQRRFCwyzoIF2qyBuKKbcOgPXdVeY9rMWgNsjf9ccYesJhk3f5dYT1HX9gR0LLQR30TnjkUEcx2uIuS4RnI+aj6sJR0AM8AaumPaM/rRehyWhXqbFAA9kh3/8/NvHxAYGAsZ/il8IalkCLBfNVAAAAABJRU5ErkJggg==);
background-repeat: no-repeat;
background-attachment: scroll;
background-size: 16px 18px;
background-position: 98% 50%;
cursor: auto;
`

const Small = styled.div`
text-align: center;
color: ${JCTheme.menuHover};
font-size: 1rem;
font-weight: 300;
letter-spacing: -.1px;
`

const NavigationFooter = styled.div`
  font-family: 'Jost', sans-serif;
  width: 100%;
  background-color: ${JCTheme.menuColor};
  padding: 32px 60px;
  @media only screen and (min-width: 1025px){
    padding: 36px 24px 32px;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width : 100%;
  font-size: .92rem;
  color: ${JCTheme.leftWrapperColor}
`

const Column = styled.div`
  width: 15%;
  font-size: .92rem;
`
const Link = styled.a`
  text-decoration: none;
  color: ${JCTheme.leftWrapperColor};
  &:hover {
    text-decoration: underline;
  }
`

const Socials = styled.div`
  width: 100%;
  background-color: ${JCTheme.menuColor};
  padding: 32px 60px;
  border-top: 1px solid #616161;
  border-bottom: 1px solid #616161;
`;

const BottomFooter = styled.div`
  width: 100%;
  background-color: ${JCTheme.menuColor};
  padding: 32px 60px;
  font-size: .77rem;
  color: #e0e0e0;
`;

const LogoWrapper = styled.div`
  width: 85%;
`;

const Col = styled.div`
  @media only screen and (min-width: 500px){
    width: 80px;
  }
`;

const Curr = styled.div`
  text-align: right;
  @media only screen and (min-width: 500px){
    width: 90%;
  }
`;

const Logo = styled.div`
  content: " ";
  background-image: url(https://www.jimmychoo.com/on/demandware.static/Sites-jchgb-Site/-/en_GB/v1658899012371/images/logo-white.svg);
  background-repeat: no-repeat;
  background-size: contain;
  width: 44px;
  height: 56px;
  display: inline-block;
`

export default Footer;
