
import broucher from "../images/Vector (1).png"
import rupee from "../images/₹.png"
import siteImg from "../images/Group 1989.png"
import bgImg from "../images/Rectangle 2098.png"
import coverImg from "../images/Rectangle 2099.png"


import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"

export default function DownloadSection() {

    const [active, setActive] = useState(1)

    let downloadContent = [
        {
            img: broucher,
            title: "Brochure",
        },
        {
            img: rupee,
            title: "Price List",
        },
        {
            img: siteImg,
            title: "Site Plan",
        },
    ]

    return (
        <div className='bg-[#E7F5F2] my-5 lg:mb-12'>
            <div className=' mx-auto  flex justify-center my-5'>
                <div className='basis-[52%] lg:px-16 md:px-7 px-2 flex gap-2 md:gap-20 justify-center items-center py-5 '>
                    {
                        downloadContent.map((item, index) => (
                            <div key={index} className="text-center  ">
                                <div className="lg:size-[149px] md:size-[120px] size-[70px] bg-[#FFFFFF] flex justify-center items-center rounded-full md:border-[10px] border-[5px] border-[rgba(211,117,67,0.5)] " >
                                    <div className="size-[30px] lg:size-[50px]  ">
                                        <img className=" w-full h-full " src={item.img} alt="" />
                                    </div>
                                </div>
                                <p className="lg:text-[32px] md:text-[25px] text-[15px] text-[#09644E] font-[500]  ">
                                    {item.title}
                                </p>
                                <button className={`lg:text-[18px] md:text-[15px]  text-[10px] px-2 lg:px-8 md:px-6 py-1 border border-[#09644E] rounded-[5px] ${(active == index) ? "text-white bg-[#09644E]" : " bg-white text-[#09644E]"} `}
                                    onClick={() => setActive(index)}
                                >
                                    Download
                                </button>
                            </div>
                        ))
                    }

                </div>
                <div className='basis-[48%]  ' >
                    <div className="w-full h-full relative group overflow-hidden">
                        <img  className="w-full h-full " src={bgImg} alt="" />
                        <div className="absolute w-full h-full top-0 flex justify-center items-center  left-[100%]  duration-1000 group-hover:left-0 " 
                        >
                            <img className="overflow-hidden  w-full h-full" src={coverImg} alt="" />
                            <div className=" absolute lg:ps-28 md:ps-16 ps-8">
                                <p className="text-white xl:text-[52px] md:text-[32px] font-[700]  leading-tight ">
                                    SCHEDULE YOUR SITE VISIT
                                </p>
                                <button className="capitalize lg:text-[23px] md:text-[17px] text-[13px] rounded-[8px] text-[#09644E] bg-white lg:px-6 md:px-4 px-2 py-1 mt-4 hover:bg-[#09644E] hover:text-white hover:border hover:border-white  ">
                                    <FontAwesomeIcon className="pe-3" icon={faPaperPlane} />
                                    make a call
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
