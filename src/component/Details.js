import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from "styled-components"
import db from './firebase';

const  Details = (props) => {

    const {id} = useParams();
    const [detailsData,SetDetailsData] = useState({});

    
    
    useEffect(() => {
        db.collection('movies').doc(id).get()
        .then(doc => {
          
            if(doc.exists){
       
                SetDetailsData(doc.data());
            }else{

            }
        }).catch((errors) => {
            console.log('Details: ' + errors);
        });
    },[id])


console.log(detailsData)


  return (
    <Container> 
        <Background>
            <img  src={detailsData.backgroundImg} alt={detailsData.title}/>
        </Background>
        <ImageTitle>
            <img src={detailsData.titleImg} alt={detailsData.title}/>
        </ImageTitle>
        <ContentMeta>
            <Controls>
                <Player>
                    <img src='/images/play-icon-black.png' alt='play-icon' />
                    <span>Play</span>
                </Player>
                <Trailer>
                    <img src='/images/play-icon-white.png' alt='play-icon' />
                    <span>Trailer</span>
                </Trailer>
                <AddList>
                    <span />
                    <span />
                </AddList>
                <GroupWatch>
                    <img src='/images/group-icon.png'  alt="watch"/>
                </GroupWatch>
                
            </Controls>
            <SubTitle>{detailsData.subTitle}</SubTitle>
            <SubDescription>{detailsData.description}</SubDescription>
        </ContentMeta>
    </Container>
  )
}

const Container = styled.div`
    color: #fff;
    min-height: calc(100vh - 250px);
    position: relative;
    top: 69px;
    padding: 0 calc(3.25vw + 5px);
   
`

const Background = styled.div`
    position: fixed;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    opacity: 0.8;
    
    img{
        width: 100vw;
        height: 100vh;


        @media(max-width: 768px){
           width: initial;
        }
       
    }

`

const ImageTitle = styled.div`
    margin-top: 2rem;

    img {
        width: 43vw;
        max-width: 367px;
        min-width: 263px;
    }
`

const ContentMeta = styled.div`



`

const Controls =  styled.div`
    display:flex;
    margin-top: 1rem;
    gap: .5rem;
`


const Player = styled.button`
    display: flex;
    align-items: center;
    border: 1px solid transparent;
    padding: 5px 15px;
    font-size: 15px;
    border-radius: 4px;
    letter-spacing: 5px;
    text-transform: uppercase;
    height: 65px;
    background-color: rgb(249,249,249);
    cursor:pointer;
    img{
        width: 32px;
    }

    &:hover{
        background-color: rgb(198,198,198)
    }

    @media(max-width: 768px){
        height: 48px;
        font-size: 13px;
        padding: 0px 12px;
  
        img{
            width: 24px;
        }
    }
}`

const Trailer = styled(Player)`
    background-color: rgba(0,0,0,0.6);
    border: 1px rgb(249,249,249) solid;
    color: rgb(249,249,249);

`

const AddList = styled.div`
    width: 48px;
    height: 48px;
    background-color: rgba(0, 0, 0, 0.6);
    border: 1px solid rgba(249 249 249);
    border-radius: 3px;
    display: flex;
    justify-content: center;
    /* vector-effect: non-scaling-stroke; */
    align-items: center;
    border-radius:50%;
    cursor:pointer;

    span{
        background-color: rgb(249,249,249);

        &:first-child{
            height: 2px;
            background-color:  rgb(249,249,249);
            width: 16px;
            transform: translate(1px,0) ;
        }

        &:nth-child(2){
            height: 16px;
            background-color:   rgb(249,249,249);
            width: 2px;
            transform: translateX(-8px);
        }
    }

    @media(min-width: 768px){   
        height: 65px;
        width: 65px;
    }
}
`
const GroupWatch = styled(AddList)`
`

const SubTitle = styled.div`
    color: rgb(249,249,249);
    font-size: 14px;
    min-height: 20px;
    margin-top: 2.4rem;


    @media(max-width: 768px){
        font-size: 12px;
    }
`
const SubDescription = styled.div`
    color: rgb(249,249,249);
    min-height: 20px;
    line-height: 2;
    padding-top: 10px;

    @media(max:width: 786px){
        font-size: 14px;
    }
`
export default Details;
