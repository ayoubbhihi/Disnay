import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from "styled-components"
import { selectNewDisney } from '../features/Movie/MovieSlice'
import Helper from '../setting/Helper'


function NewDisnay() {
    let movies = useSelector(selectNewDisney)
    
  return (
    <Container>
        <h4>New To disney Plus</h4>
        <Content>
         
            <Helper movie={movies} />

            {/* {movies && movies.map(movie => (
                <Wrap>
                <Link to='/'> 
                    <img  src={movie.titleImg}/>
                </Link>
                </Wrap>
            ))} */}
            {/* <Wrap>
                <Link to='/'> 
                    <img  src='https://images.rtl.fr/~c/2000v2000/rtl/www/1337889-toutes-les-princesse-disney-en-compagnie-de.jpg'/>
                </Link>
            </Wrap>
            <Wrap>
                <Link to='/'> 
                    <img  src='https://fr.web.img4.acsta.net/r_654_368/newsv7/20/04/21/17/46/5864563.jpg'/>
                </Link>
            </Wrap>
            <Wrap>
                <Link to='/'> 
                    <img  src='https://static.hitek.fr/img/actualite/2016/12/28/fb_carte-monde-des-films-disney-cover.jpg'/>
                </Link>
            </Wrap>
            <Wrap>
                <Link to='/'> 
                    <img  src='https://img-3.journaldesfemmes.fr/TxOdNd1obK0CTxQKmwlEM129zSI=/1500x/smart/e24617c031da46b387c5932634d6b436/ccmcms-jdf/32177224.jpg'/>
                </Link>
            </Wrap> */}
        </Content>
    </Container>
  )
}

const Container = styled.article`
    padding-bottom:26px;
`

const Content = styled.div`
    display:grid;
    grid-template-columns: repeat(4, minmax(0,1fr));
    grid-gap: 25px;
    ${'' /* justify-content: space-between;
    gap: 25px; */}

    @media(max-width: 768px){
        grid-template-columns: repeat(2,minmax(0,1fr));
    }
    div{
        width: 100%;
    }
`

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

export default NewDisnay;