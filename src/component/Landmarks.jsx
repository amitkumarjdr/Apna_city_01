import React, { useState } from 'react'
import Heading from './Heading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import img1 from "../images/Ellipse 35.png"
import img2 from "../images/Ellipse 37.png"
import img3 from "../images/Ellipse 36.png"
import img4 from "../images/Ellipse 38.png"
import img5 from "../images/Ellipse 40.png"
import bgbanner from "../images/bg-apartment 1.png"

export default function Landmarks() {

    const [active, setActive] = useState(0)

    let faqItem = [
        {
            question: " Education CENTER",
            answer: "Conveniently located on old Mumbai Pune highway  with easy access to urban centers like PCMC & PMC, while surrounded by nature."
        },
        {
            question: " School",
            answer: "Conveniently located on old Mumbai Pune highway  with easy access to urban centers like PCMC & PMC, while surrounded by nature."
        },
        {
            question: " SHOPPING CENTER",
            answer: "Conveniently located on old Mumbai Pune highway  with easy access to urban centers like PCMC & PMC, while surrounded by nature."
        },
        {
            question: "railway station  ",
            answer: "Conveniently located on old Mumbai Pune highway  with easy access to urban centers like PCMC & PMC, while surrounded by nature."
        },

    ]

    return (
        <div className='bg-[#164F42] lg:pt-9 lg:pb-20'>
            <div className=' mx-auto   py-10' style={{ backgroundImage: `url(${bgbanner})` }}>
                <p className={`relative text-4xl text-center uppercase text-white font-[700] md:text-5xl lg:text-[50px] `} >
                    <span className='after:absolute after:w-[22%] after:h-[2px] after:bg-white after:bottom-[-10px] after:left-[38%] '>
                        IMPORTANT LANDMARKS
                    </span>

                </p>
                <div className='sm:flex justify-between  lg:py-8 md:pt-12' >
                    <section className="md:basis-[50%]  basis-[100%] lg:px-4 dark:bg-gray-900  pt-6">
                        <div className="px-4 ">
                            <div className="lg:mt-6 sm:space-y-7 md:space-y-11 space-y-2 md:h-[520px] sm:py-2 overflow-y-auto landmark_Scroll sm:pe-5">
                                {
                                    faqItem.map((item, index) => (
                                        <div key={index} className=" rounded-[10px] bg-white">
                                            <button className="flex items-center justify-between gap-4 w-full px-8 lg:py-4 py-2" onClick={() => setActive(index)}>
                                                <p className="lg:text-[24px] md:text-[20px] sm:text-[16px] text-[14px] font-[700] text-[#276658] uppercase">
                                                    {index + 1}/ {item.question}
                                                </p>
                                                <div className='flex justify-center items-center text-[#276658] lg:size-[30px] md:size-[20px] size-[18px] text-[14px] '>
                                                    <FontAwesomeIcon icon={(active == index) ? faMinus : faPlus} />
                                                </div>
                                            </button>
                                            <p className={`lg:text-[21px] md:text-[17px] sm:text-[14px] text-[12px] font-[600] text-[#696767] lg:px-8 px-2 py-2  border-t border-t-[#C0BCBC] ${(active == index) ? "block" : "hidden"}`}>
                                                {item.answer}
                                            </p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </section>
                    <div className='lg:basis-[60%] md:basis-[50%] relative md:block hidden' >
                        <div className='lg:size-[335px] md:size-[205px] sm:size-[190px] size-[140px] rounded-full overflow-hidden absolute lg:top-[8%] md:top-[5%] left-[0%] ' >
                            <img className='w-full h-full ' src={img1} alt="" />
                        </div>
                        <div className='lg:size-[37px] md:size-[30px] sm:size-[25px] size-[20px] bg-white rounded-full absolute lg:top-[69%] md:top-[45%] lg:left-[13%] md:left-[6%] ' >

                        </div>
                        <div className='lg:size-[37px] md:size-[30px] sm:size-[25px] size-[20px] bg-white rounded-full absolute lg:top-[55%] md:top-[40%] right-[25%] '>

                        </div>
                        <div className='lg:size-[37px] md:size-[30px] sm:size-[25px] size-[20px] border border-white rounded-full absolute lg:top-[15%] md:top-[10%] lg:right-[49%] md:right-[40%] '>

                        </div>
                        <div className='lg:size-[225px] md:size-[150px] sm:size-[150px] size-[100px] rounded-full overflow-hidden absolute lg:top-[15%] md:top-[10%] lg:right-[10%] md:right-[0%] ' >
                            <img className='w-full h-full ' src={img2} alt="" />
                        </div>
                        <div className='lg:size-[271px] md:size-[180px] sm:size-[190px] size-[150px]  rounded-full overflow-hidden absolute lg:bottom-[-7%] md:bottom-[19%] lg:right-[20%] md:right-[19%] ' >
                            <img className='w-full h-full ' src={img3} alt="" />
                        </div>
                        <div className='lg:size-[165px] md:size-[110px] sm:size-[100px] size-[80px] rounded-full overflow-hidden absolute lg:bottom-[-3%] md:bottom-[25%] lg:left-[14%] md:left-[1%] ' >
                            <img className='w-full h-full ' src={img4} alt="" />
                        </div>
                        <div className='lg:size-[97px] md:size-[70px] sm:size-[60px] size-[50px] rounded-full overflow-hidden absolute lg:bottom-[22%] md:bottom-[40%] lg:right-[5%] md:right-0 ' >
                            <img className='w-full h-full ' src={img5} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


// how to create a modal in react js?