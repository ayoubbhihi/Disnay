
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from "styled-components"
import { selectNewDisney } from '../features/Movie/MovieSlice'


 function Helper(props) {
     console.log(props.movie)
  return (
   <>
            {props.movie && props.movie.map(movie => (

        <Wrap key={movie.id}>
            <Link to={`/details/${movie.id}`} > 
                <img  src={movie.cardImg} alt={movie.title}/>
            </Link>
        </Wrap>
        ))}
  </>
  
  )

}

export default Helper;


const Wrap = styled.div`
    border-radius:  8px;
    overflow:hidden;
    box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px,
    rgb(0 0 0 / 73%) 0 16px 10px -10px;
    border: 4px solid   rgba(249,249,249, 0.1);
    

    img{
        width: 100%;
        object-fit: cover;
         height: 100%;
    }

    :hover{
        box-shadow: rgb(0 0 0 / 80%) 0 40px 58px -16px;
        transform: scale(1.05);
        z-index: 1;
        border-color:rgba(249,249,249,0.8);
    }
`
