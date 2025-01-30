import React from 'react'
import mobile_phone from "./../assets/images/png/mobile-phone.png"
import mobile_shadow from "./../assets/images/png/mobile_shadow.png"


const Resistance = () => {
    return (
        <div className='bg-resistance flex items-center justify-center bg-cover bg-center bg-[#070D37]  lg:pt-[153px] pb-[60px] sm:pb-[100px] lg:pb-[222px] mt-[-2px] '>
           
            <div className='container max-w-[1140px] mx-auto px-3 '>
                <div className=' border-[3px] rounded-[10px] border-[#39C6FD] pt-10 lg:pt-[65px] pb-10 lg:pb-[89px] bg-[#070D37] px-10 lg:ps-[73px] lg:relative'>
                    <h2 className='font-oswald font-normal text-5xl leading-[148%] text-center text-white lg:max-w-[381px] mb-[10px]'>JOIN THE RESISTANCE</h2>
                    <p className='font-openSans font-normal text-base leading-[136%] text-white mx-auto lg:mx-0 max-w-[582px] mb-6 lg:mb-[60px]'>Volutpat etiam tincidunt leo amet pulvinar. Adipiscing vestibulum enim ornare vestibulum. Mauris sit hendrerit interdum neque mattis enim egenisi.</p>
                    <div className='flex justify-center lg:justify-start '>     <button className='font-oswald font-bold text-base text-center  text-[#39C6FD] hover:text-[#070D37] hover:bg-[#39C6FD] py-[11px] px-[27px] rounded border-[#39c6fd] border-[1px] transition-all duration-500'>JOIN NOW</button>
                    </div>   <div className='lg:absolute  right-[41px] top-[-127px] z-10'>
                        <div className='lg:relative flex justify-center mt-4 lg:mt-0'>
                            <img src={mobile_phone} alt="mobile_phone" />
                            <img src={mobile_shadow} alt="shadow" className=' hidden lg:block lg:absolute lg:top-[71px] lg;right-[-39px]' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resistance
