import React from 'react'
import styled from "styled-components"


 function Viewers() {
  return (
    <Container>
        <Wrap>
            <img src='./images/viewers-disney.png' alt='1'/>
            <video autoPlay={true} loop={true}  playsInline={true}>
                <source src='./videos/1564674844-disney.mp4' type='video/mp4'/>
            </video>
        </Wrap>
        <Wrap>
            <img src='./images/viewers-marvel.png' alt='2'/>
            <video autoPlay={true} loop={true} playsInline={true}>
                <source src='./videos/1564676115-marvel.mp4' type='video/mp4'/>
            </video>
        </Wrap>
        <Wrap>
            <img src='./images/viewers-national.png' alt='3'/>
            <video autoPlay={true} loop={true} playsInline={true}>
                <source src='./videos/1564676296-national-geographic.mp4' type='video/mp4'/>
            </video>
        </Wrap>
        <Wrap>
            <img src='./images/viewers-pixar.png' alt='4'/>
            <video autoPlay={true} loop={true} playsInline={true}>
                <source src='./videos/1564676714-pixar.mp4' type='video/mp4'/>
            </video>
        </Wrap>
        <Wrap>
            <img src='./images/viewers-starwars.png' alt='5'/>
            <video autoPlay={true} loop={true} playsInline={true}>
                <source src='./videos/1608229455-star-wars.mp4' type='video/mp4'/>
            </video>
        </Wrap>
    </Container>
  )
}

const Container = styled.article`
    ${'' /* display: flex;
    justify-content: space-around;
    align-items: center; */}

    margin-top: 42px;
    padding: 0  36px 36px;

    display: grid;
    gap:25px;
    grid-template-columns: repeat(5,minmax(0,1fr));
    
    ${'' /* grid-template-columns: repeat(5,1fr); */}

    @media(max-width: 768px){
        grid-template-columns: repeat(1,minmax(0,1fr))
    }
`

const Wrap = styled.section`
    ${'' /* background:#999; */}
    border-radius: 8px;
    ${'' /* overflow:hidden; */}
    box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px,
    rgb(0 0 0 / 73%) 0 16px 10px -10px;

    border: 4px solid   rgba(249,249,249, 0.1);
    transition: all 0,255ms cubic-bezier(0.075,0.82,0,165,1);
    cursor:pointer;
    overflow:hidden;
    ${'' /* height: 100%; */}
    position: relative;

    
    
    img{
        width: 100%;
        object-fit:cover;
        position: absolute;
    }

    video{
        width: 100%;
        height: 100%;
        opacity: 0;
       
    }


    &:hover{
        box-shadow: rgb(0 0 0 / 80%) 0 40px 58px -16px;
        transform: scale(1.05);
        z-index: 1;
        border-color:rgba(249,249,249,0.8);


        video{
            opacity: 1;
        }
    }
`


export default Viewers;