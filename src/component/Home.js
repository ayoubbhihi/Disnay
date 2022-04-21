import React from 'react'
import styled from 'styled-components'
import ImageSlide from './layout/ImageSlide'
import NewDisnay from './layout/NewDisnay'
import Original from './layout/Original'
import Reccomands from './layout/Reccomands'
import Trending from './layout/Trending'
import Viewers from './layout/Viewers'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import db from './firebase';
import {setMovies}  from "../component/features/Movie/MovieSlice"
import {selectUserName} from "../component/features/user/userSlice"


export default function Home() {

    const dispach = useDispatch();
    const userName = useSelector(selectUserName);
    let recommend = [];
    let newDisnay = [];
    let original = [];
    let trending = [];
  

    useEffect(() => {
      
     db.collection('movies').onSnapshot((snapshot) => {
       
        snapshot.docs.map(doc => {
          
         
          switch(doc.data().type){
            
            case 'recommend':
            
              recommend.push({id:doc.id, ...doc.data()})
              break;
            case 'trending':
              trending.push({id: doc.id, ...doc.data()});
              break;
            case 'new':
              newDisnay.push({id: doc.id, ...doc.data()});
              break
            case "original":  
            original.push({id:doc.id,...doc.data()})
              break
              

          }

          
        })
        dispach(setMovies({
          recommend :recommend,
          newDisnay : newDisnay,
          original : original,
          trending : trending
    
        }), [userName])

  
        
     })
   

    
    })


              return (
                <HomePage>
                  <ImageSlide />
                  <Viewers />
                  <Reccomands />
                  <NewDisnay />
                  <Original />
                  <Trending />
                </HomePage>
              )
}


const HomePage = styled.div`
    ${'' /* height: 100vh; */}
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    top: 72px;
    min-height: calc(100vh - 250px);
  
    overflow:hidden;
    postion: relative;
    ${'' /* min-height: calc(100vh -250px;) */}

    &:after{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        background: url(./images/home-background.png) center center / cover no-repeat fixed;
        z-index:-1;

`