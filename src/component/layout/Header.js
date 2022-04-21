import React, { useEffect } from 'react'
import styled from 'styled-components'
import { auth, provider } from '../firebase'
import {useNavigate} from 'react-router-dom'
import { useDispatch , useSelector } from 'react-redux'

import {selectUserName , selectUserPhoto, selectUserEmail , setUserLoginDetails , setSignOutState} from "../features/user/userSlice"
const Header = () => {

    const dispatch = useDispatch()
    const navigatore = useNavigate();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);
    const userEmail = useSelector(selectUserEmail);

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
         
           if(user ){
                setUser(user);
                if(window.document.location.pathname == '/'){
                    navigatore('/home')
                }
                
           }
        })
    }, [userName])




    const handleAuth = () => {

        if(!userName){
 
        auth.signInWithPopup(provider).then((result) => {
            setUser(result.user)
        }).catch((error) => alert(error.message));
        }

        auth.signOut().then(() => {
            dispatch(setSignOutState())
            navigatore('/')
        });
    }


   const setUser = (user) => {
    dispatch(setUserLoginDetails({
           name: user.displayName,
           email: user.email,
           photo: user.photoURL,
       }))

    
   }


  return (
    <Nav>
        <Logo>
            <img src='/images/logo.svg' alt='logo'/>
      
           
        </Logo>


        {!userName ? <Login onClick={handleAuth}>Login</Login> : <>

        <NavMenu>
            <a href='/home'>
                <img src='/images/home-icon.svg'/>
                <span>HOME</span>
            </a>
          
            <a href='/home'>
                <img src='/images/search-icon.svg'/>
                <span>search</span>
            </a>
          
            <a href='/home'>
                <img src='/images/watchlist-icon.svg'/>
                <span>watchlist</span>
            </a>
          
            <a href='/home'>
                <img src='/images/original-icon.svg'/>
                <span>original</span>
            </a>
          
            <a href='/home'>
                <img src='/images/movie-icon.svg'/>
                <span>movie</span>
            </a>
          
            <a href='/home'>
                <img src='/images/series-icon.svg'/>
                <span>series</span>
            </a>
          
        </NavMenu>
        <SingOut>
            <UserImage  src={userPhoto} alt={userName}/>
            <DropDown>
                <span onClick={handleAuth}>Sing out</span>
            </DropDown>
        </SingOut>
        </> }
        
    
    </Nav>
  )
}

const Nav = styled.nav`
   position: fixed;
    top: 0;
    left: 0;
    height: 70px;
    width: 100%;
    background: #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    letter-spacing: 16px;
    z-index: 3;

`


const Logo = styled.a`
    padding: 0;
    width: 80px;
    margin-top:4px;
    max-height:70px;
    font-size:0;
    display:inline-block;
    
    img{
        width: 100%;
        display: block;
    }

`

const NavMenu = styled.div`
    color: #fff;

    display: flex;
    align-items: center;
    flex-flow: row nowrap;

    postion:relative;

    margin: 0;
    margin-right: auto;
    margin-left: 28px;


    @media(max-width:768px){
        display:none
    }


    a{
        display:flex;
        align-items:center;
        padding:0 12px;

        img{
            height: 20px;
            width:20px;
            min-width:20px
        }
    }

    span{
        color:rgba(249,249,249);
        font-size: 13px;
   
        letter-spacing: 1.42px;
        line-height: 1.3;
        white-space: nowrap;
        position: relative;
        padding: 2px 0;

        text-transform: uppercase;


        &:before{
            content:"";
            background-color:rgba(249,249,249);
            border-radius: 0 0 4px 4px;

            position:absolute;
            bottom: 0;
            left: 0;
            right: 0;

            height: 2px;
            width:  auto;

            transform-origin: left center; 
            transform: scalex(0);
            transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
            ${'' /* visibility:hidden; */}
            opacity:0; 



        }
    }

    a:hover{

        span:before{
            ${'' /* visibility: visible;  */}
            transform: scaleX(1);
            opacity:1; 
        }
    }

}
`

const Login = styled.a`
    text-transform:uppercase;
    letter-spacing: 1.5px;
    background-color: rgba(0,0,0,0.6);
    padding: 10px 16px;
    border: 1px solid #f6f6f6;
    border-radius: 6px;
    transition: all .2s ease;
    cursor:pointer;

    &:hover{
        background-color: #f6f6f6;
        color:#000;
        border-color:transparent;
    }


`

const UserImage = styled.img`
    width: 100%;
    border: 1px solid #fff;
    border-radius: 50%;

`


const DropDown = styled.div`
    position: absolute;
    top: 50px;
    right: 5px;
    letter-spacing: 3px;
    background-color: rgba(19,19,19);
    border: 1px solid #555;
    padding: 10px;
    transition-duration: 0.4s;
    transition-property: opacity;
    transition-timing-function: ease-in-out;
    font-size: 14px;
    width: 100px;
    text-align:center;
    opacity: 0;
`
const SingOut = styled.div`
    position: relative;
    height: 50px;
    width: 50px;
    cursor:pointer;

    &:hover{
        ${DropDown}{
        opacity: 1;
        }
    }
`





export default Header