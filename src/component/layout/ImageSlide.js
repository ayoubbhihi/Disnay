import React from 'react'
import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from "react-slick";

function ImageSlide() {
    
    let setting = {
        dots : true,
        infinite: true,
        speed: 500,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1
    }
  return (
    <Carousel>
            <Slider {...setting}>
                <Wrap>
                    <a>
                        <img src='./images/slider-badag.jpg' alt="badag"/>
                    </a>
                </Wrap>
                <Wrap>
                    <a>
                        <img src='./images/slider-badging.jpg' alt="badag"/>
                    </a>
                </Wrap>
                <Wrap>
                    <a>
                        <img src='./images/slider-scale.jpg' alt="badag"/>
                    </a>
                </Wrap>
                <Wrap>
                    <a>
                        <img src='./images/slider-scales.jpg' alt="badag"/>
                    </a>
                </Wrap>
            </Slider>


    </Carousel>
  )
}

const  Carousel = styled.div`
    margin-top:15px;
   

    button{
        opacity: 0;
        transition:  opacity 0.40s ease;
        height: 100%;
        width: 5vw;
     ; 
        z-index: 100;

        &:hover{
            opacity: 1;
            cursor: pointer
        }
    }

    ul li button{
        &:before{
            font-size: 15px;
            color: rgb(150,150,171)
        }

         li.slick-active &:before{
            color: white;
        }
        
        
    }
    li.slick-active button:before{
            color:white;
    }
    .slick-list{
        overflow:initial;
    }

    .slick-prev{
        left: -75px
    }
    .slick-next{
        right: -75px
    }

    .slick-dots li{
    background-color: rgb(150,150,171);
    opacity: 0.3;
    border-radius: 50%;
    border: 1px solid transparent;
    padding: 4px;
    height: 15px;
    width: 15px;

     ${'' /* &:active{
        opacity: 1;
        background: red;
     } */}
     &:hover{
         background: #fff;
         padding: 4px;
         opacity: 1;
        
     }
    }
    .slick-dots .slick-active{
        opacity: 1;
        background-color: rgb(150,150,171);
        border: 1px solid #fff;
    }


    .slick-dots li button:before {
    line-height: 15px;
    left: -1px;
    width: 15px;
    height: 15px;
    }

    

`

const Wrap = styled.div`
    ${'' /* border-radius: 4px; */}
    border: 2px  solid transparent;
    postion: relative;
    &:hover{
        border-color:white;
    }

    a{
        border-radius: 4px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, 
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        cursor:pointer;
        position: relative;

        img{
            width: 100%;
            height: 100%;
        }
    }
`

export default ImageSlide;

