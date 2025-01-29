import React from 'react'
import { CARDS } from '../utils/helper'
import Slider from "react-slick";

const SliderComponent = () => {
  const settings = {
    dots: false,
    arrows:false,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
     responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,

        },
      },
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          
        },
      },

    ],
  };
  return (
    <div className=' bg-[#070d37] mt-[-2px] pb-[60px] sm:pb-[100px] md:pb-[198px]'>
      <div className='flex items-center justify-center flex-col px-3'>
        <h2 className='font-normal text-5xl leading-[120%] md:leading-[148%] text-center text-white font-oswald mb-[17px] max-w-[632px]'>Your world is the game board, and your mind is at stake.</h2>
        <p className='font-openSans text-base text-center text-white font-normal max-w-[516px] mb-[51px]'>At the heart of Ingress is a desire to bring people together through exploration and teamwork.</p>
      </div>
      <Slider {...settings}>
        {CARDS.map((obj, index) => (
          <div key={index} >
            <img src={obj.image} alt="icon" className='w-full' />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default SliderComponent
