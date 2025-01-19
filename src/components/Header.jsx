import React from 'react'
import bottom_layer from '../assets/images/png/header-bottom-layer.png'
import icon from '../assets/images/svg/icon.svg'
import top_layer from '../assets/images/png/top-blur-layer.png'
import left_layer from '../assets/images/png/left-blur-layer.png'


const Header = () => {
  return (
    <div className='min-h-screen start1920:h-800  flex justify-center items-center bg-header bg-cover bg-center flex-col  relative pt-[10px]'>
      <div className='absolute bottom-[-2px] left-0 right-0 '> <img src={bottom_layer} alt="layer" /> </div>
      <div className='absolute top-0 right-0 '> <img src={top_layer} alt="layer" /></div>
      <div className='absolute bottom-[112px]  left-0 max-w-[243px] '> <img src={left_layer} alt="layer" /></div>
      <div className='container max-w-[1140px] mx-auto px-3 flex justify-between z-[1]'>
        <div className='flex gap-6 items-center'>
          <img src={icon} alt="icon" />
          <a href="/" className='font-oswald font-bold text-base text-center text-[#39C6FD]'>VICTORIAN RESISTANCE</a>
        </div>
        <div className='flex items-center gap-5'>
          <button className='font-oswald font-bold text-base text-center text-[#39C6FD] hover:text-[#070D37] hover:bg-[#39C6FD] py-2 px-5 rounded border-[#39c6fd] border-[1px] transition-all duration-500'>LOGIN</button>
          <button className='font-oswald font-bold text-base text-center text-[#39C6FD] hover:text-[#070D37] hover:bg-[#39C6FD] py-2 px-5 rounded border-[#39c6fd] border-[1px] transition-all duration-500'>SIGN UP</button>
        </div>
      </div>
      <div className='flex-grow flex justify-center items-center w-full z-10'>
        <div className='max-w-[1140px] mx-auto px-3'>
          <h1 className='font-oswald font-normal text-[40px] sm:text-[60px] md:text-[80px] leading-[148%] text-center text-white max-w-[900px] mb-2'>JOIN THE VICTORIAN RESISTANCE</h1>
          <p className='text-white text-center font-normal text-base mb-7 md:mb-[68px] font-openSans'>Defend the world, protect what's yours. Join the Resistance!</p>
          <div className='flex justify-center'>
            <button className='font-oswald rounded-[5px] bg-[#39C6FD] text-[#070D37] py-[14px] px-[27px] font-bold text-center  text-[20px] hover:text-[#39c6fd] hover:bg-[#070d37] transition-all duration-500'>JOIN THE RESISTANT</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
