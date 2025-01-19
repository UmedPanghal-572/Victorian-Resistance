import React, { useState } from 'react'
import { FAQ } from '../utils/helper'
import drop_down from '../assets/images/svg/down-arrow.svg'

const CustomFaq = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? "" : index)
    };


    return (
        <div className='bg-[#070d37] flex justify-center items-center pb-[60px] md:pb-[120px] lg:pb-[200px] mt-[-2px]'>
            <div className='container max-w-[940px] mx-auto px-3'>
                <h2 className='font-oswald font-normal text-center text-white text-5xl leading-[148%]'>FAQs</h2>
                <p className='font-openSans font-normal text-base leading-[136%] text-center max-w-[680px] text-white mx-auto mb-[77px]'>Porta maecenas consequat sed neque gravida eleifend fusce cursus amet. Turpis enim sed pharetra tempus ullamcorper mauris mauris facilisis.</p>

                {FAQ.map((obj, index) => (
                    <div key={index} className='border-b-[2px] border-[#39C6FD] mb-[52px]'>
                        <button onClick={() => handleToggle(index)} className='font-oswald font-bold text-xl leading-[148%] text-white mb-3 w-full flex justify-between'>{obj.question}
                            <span
                                className={`transform transition-transform duration-300 ease-in-out`}
                            >
                                {activeIndex === index ? (
                                    '-'
                                ) : (
                                   <img src={drop_down} alt="drop_down" />
                                )}
                            </span>
                        </button>
                        <p className={`transition-all  duration-1000 ease-in-out overflow-hidden font-openSans font-normal text-base leading-[136%] text-white max-w-[810px] mb-6 ps-7 ${activeIndex === index
                            ? 'max-h-auto'
                            : 'max-h-0 opacity-0'}`} > {obj.answer}</p>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default CustomFaq
