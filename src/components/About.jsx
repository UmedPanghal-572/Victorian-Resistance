import React from 'react'
import phone from "./../assets/images/png/phone-image.png"
import phone_bg_layer from "./../assets/images/png/phone-bg-layer.png"
import top_layer from "./../assets/images/png/about-top-layer.png"
import app_store from "./../assets/images/svg/app-store.svg"
import google_store from "./../assets/images/svg/google-play.svg"

const About = () => {
    return (
        <div className='bg-[#070d37]  flex items-center justify-center py-20 md:py-[190px] relative'>
            <div className='absolute top-[-15%]  sm:top-[-32%] right-0 hidden sm:block '><img src={top_layer} alt="layer" /></div>
            <div className='container max-w-[1140px] mx-auto px-3 sm:z-10'>
                <div className='flex flex-row flex-wrap px-[-12px] items-center'>
                    <div className='w-full md:w-5/12 px-3 relative'>
                        <div className='relative  flex items-center justify-center w-full '><img src={phone} alt="phone" />
                            <div className='absolute hidden md:block  top-[50%] left-[24%] translate-x-[-20%] translate-y-[-50%] w-full'> <img src={phone_bg_layer} alt="layer" /></div>
                        </div>
                    </div>

                    <div className='w-full md:w-7/12 px-3'>
                        <h2 className='font-oswald font-normal text-5xl text-white mb-3 leading-[148%]'>ABOUT US</h2>
                        <p className='text-white font-normal font-openSans text-base mb-[40px] md:mb-[63px] leading-[157%]'> Ingress is an augmented reality game that turns the world around you into a battle, with humankind's minds at stake. <br />
                            Play Ingress on the streets of Victoria. Meet agents who play in the areas you do and fight with them to protect humanity's freedom. Discover agents you can depend on to help you when you need assistance in the field. <br />
                            Download the mobile scanner app to discover thousands of portals around you. Buildings, historic landmarks and cultural points of interest become portals for you to fight for and defend from alien incursion.
                            <br />
                            <span className='block pt-3'>  The Victorian Resistance has a long and proud history of teamwork, collaboration and most importantly, fun! <br />
                                By joining us, you'll have access to regular events so you can stock up on gear, regular operations so you can put your mark on the map, as well as help almost any time of the day or night. <br />
                                Joining the community benefits you and everyone else — it takes eight level 8 players to make a level 8 portal, and the easier it is to coordinate with people, the more easily you'll be able to gear up to take and hold your area.</span>
                        </p>
                        <div className="flex flex-col sm-min:flex-row gap-[30px]">
                            <a href="/"> <img src={app_store} alt="app_store" /></a>
                            <a href="/">  <img src={google_store} alt="app_store" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
