import React from 'react'
import icon from './../assets/images/svg/icon.svg'
import triangle from "./../assets/images/png/about-top-layer.png"


const Footer = () => {
  return (
    <div className='bg-footer bg-cover bg-center flex items-center justify-center flex-col mt-[-2px] pt-8 relative'>
      <div ><img className='absolute bottom-0 right-0 hidden sm:block' src={triangle} alt="triangle" /></div>
      <div className='container max-w-[1440px] mx-auto px-3'>
        <div className='flex justify-center mb-6'>
          <img src={icon} alt="icon" />
        </div>
        <p className='font-openSans font-normal text-base text-center text-white leading-[136%] max-w-[810px] mx-auto mb-7 md:mb-[52px]'>Volutpat etiam tincidunt leo amet pulvinar. Adipiscing vestibulum enim ornare vestibulum. Mauris sit hendrerit interdum neque mattis enim eget. Quasi.</p>
        <ul className='flex items-center justify-center gap-y-4 gap-x-16 flex-col sm:flex-row'>
          <li>
            <a href="/" className="font-oswald font-normal text-base text-center leading-[148%] text-white link-hover">
              PA02-SIERRA-11 SCOREBOARD
            </a>
          </li>

          <li><a href="/" className='font-oswald font-normal text-base text-center leading-[148%] text-white link-hover'> SMURFLING GUIDE</a></li>
        </ul>
      </div>
      <div className='bg-[#39C6FD] w-full h-[0.5px] mt-8 md:mt-[60px] mb-6'></div>
      <a href="/" className='text-center font-openSans font-normal text-xs text-white opacity-70 hover:opacity-100 mb-9'>copyright2025victorianresistance</a>
    </div>
  )
}

export default Footer
