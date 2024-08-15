import React, { useState } from 'react';
import img from "../images/Group 1617.png";
import img2 from "../images/Rectangle 2059.png";
import img3 from "../images/Vector (2).png";
import '../index.css'

export default function DistanceFromHome() {

    const [activeScroll, setActiveScroll] = useState(0);
    const [viewText, setViewText] = useState("24X7 SECURITY")

    let facility = ["24X7 SECURITY",
        "CLOSE TO EDUCATIONAL INSTITUTIONS",
        "KIDS PLAY AREA",
        "NEAR AERO CITY  & IT CITY MOHALI",
        "24X7 SECURITY",
        "24X7 SECURITY",
        "24X7 SECURITY",
        "24X7 SECURITY",
    ]

    const handleScroll = (el, index) => {
        console.log(el, index)
        setActiveScroll(index)
        setViewText(el)
    }

    return (
        <div className=' bg-[#F4F0F0] lg:py-12 py-5'>
            <div className=' lg:container mx-auto '>
                <p className='text-[38px] font-[700] text-[#276658]  text-center' >
                    MORE THAN JUST A PLOT
                </p >
                <p className='text-[#5D615B] text-[20px] font-[500] text-center' >
                    Your Dream Home Awaits you to Own Exquisite Site in the Smart City.
                </p>
                <div className='md:flex  justify-between   pt-9'>
                    <div className='md:w-[30%]  w-[100%] scroll_details px-4' >
                        {
                            facility.map((item, index) => (
                                <div key={index} className={`${(activeScroll == index) ? "bg-[#276658] text-white" : "text-black"} flex justify-start items-center lg:mb-6 mb-3 cursor-pointer`} onClick={() => { handleScroll(item, index) }}>
                                    <p  className='lg:text-[19px] text-[16px]  font-[500] px-4 py-1'> {index + 1} </p>
                                    <div  className={`flex justify-start items-center gap-3 border-l ${(activeScroll == index) ? "border-l-white" : "border-l-black"}  ps-2 py-1 `}>
                                        <div  className='lg:w-[44px] lg:h-[32px] w-[34px] h-[22px] '>
                                            <img className='w-full h-full object-contain' src={(activeScroll == index) ? img : img3} alt="" />
                                        </div>
                                        <p className='lg:text-[19px] text-[14px]  font-[500] leading-tight '> {item} </p>
                                    </div>
                                </div>
                            ))

                        }

                    </div>
                    <div className='bg-[#000000] text-white md:w-[70%] w-[100%] flex justify-end'>
                        <div className='w-[43%] py-4 mx-auto lg:px-11 px-3'>
                            <div className='flex justify-start items-center gap-2'>
                                <div className='lg:w-[62px] md:w-[52px] sm:w-[42px] w-[32px] lg:h-[50px] md:h-[40px] sm:h-[30px] h-[20px] '>
                                    <img className='w-full h-full ' src={img} alt="" />
                                </div>
                                <p className='lg:text-[25px] md:text-[20px]  font-[500]  '>{viewText}</p>
                            </div>
                            <p className='lg:text-[14px] text-[12px]  lg:py-6 py-2'>
                                Lorem Ipsum is simply dummy text of
                                the printing industry. Lorem Ipsum has been
                                the industry's standar dummy the 1500s, when
                                an unknown printer took a galley of type and
                                scrambled it to make a type specimen book.
                            </p>
                            <ul className='list-disc marker:text-[#276658] lg:space-y-6 space-y-2 lg:text-[14px] text-[12px]  ps-4'>
                                <li>
                                    Lorem Ipsum is simply dummy text of
                                    the printing industry.
                                </li>
                                <li>
                                    Lorem Ipsum is simply dummy text.
                                </li>
                                <li>
                                    Lorem Ipsum is simply dummy text of
                                    the printing industry.
                                </li>
                            </ul>
                        </div>
                        <div className=' w-[57%] ' >
                            <div className='w-full h-full'>
                                <img className='w-full h-full object-fill' src={img2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <p className='font-[500] text-[#276658] text-center py-3 lg:pb-12'>
                    Registry Ready Plots Rera No - PBRERA-SAS81-PR0693
                </p>
            </div>
        </div>
    )
}
