import React from "react";
import styled from "styled-components";



const  Login = () => {
    return(
        <Container>
            <Content>
                <CTA>
                    <CtaLogoOne />
                    <SingUp>Get All There</SingUp>
                    <Description>
                    Get Premier Access to Raya and the Last Dragon for an additional fee
                    with a Disney+ subscription. As of 03/26/21, the price of Disney+
                    and The Disney Bundle will increase by $1.
                    </Description>
                    <CtaLogoTwo src="/images/cta-logo-two.png"/> 
                </CTA>
                <BgImage />
  
            </Content>
        </Container>
    )
}


const Container = styled.section`
    overflow:hidden;
    display:flex;
    justify-content:center;
    text-align: center;
    height:100vh;
  
`
const Content = styled.div`
    margin-bottom:10vw;
    width:100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction:column;
`

const BgImage = styled.div`
    height: 100%;
    width: 100%;
    background-image: url('/images/login-background.jpg');
    background-size: cover;
    background-repeat:no-repeat;
    position:absolute;
    top: 0;
    left: 0;
    z-index:-1

`

const CTA = styled.div`
     margin-bottom: 2vw;
     width: 100%;
     justify-content: center;
     align-items: center;
     flex-flow: column wrap;
     padding-left: 20px;
     padding-right:20px


`

const CtaLogoOne = styled.svg`
    margin-bottom: 12px;
    margin: auto;
    
    max-width:600px;
    min-height:1px;
    display:block;
    width:100%;

    background-image: url('/images/cta-logo-one.svg');
    background-size:contain;
    background-repeat:no-repeat;

`

const SingUp = styled.a`
    color: #f9f9f9;
    background-color:#0063e5;

    margin-bottom: 12px;
    width: 100%;
    padding: 16.5px 0;
    font-size: 35px;
    border-radius: 7px;
    border: 1px solid transparent;
    font-weight: bold;

    display:inline-block;
    letter-spacing: 1.5px;
    cursor:pointer;
    max-width: 600px;

    &:hover{
        background-color:#0483ee;
    }
`
const Description = styled.p`
    color: hsla(0 , 0 , 95.3% , 1);
    font-size: 11px;
    margin: 0 auto 24px;
    line-height: 1.6;
    max-width: 600px;
`

const CtaLogoTwo = styled.img`
    display: inline-block;
    max-width: 600px;
    vertical-align: bottom;
    margin-bottom: 20Px;
    width:100%;
`

export default Login