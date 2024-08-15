import React from 'react'
import img1 from "../images/Rectangle 2078.png";
import img2 from "../images/Rectangle 2165.png";
import img3 from "../images/Rectangle 2163.png";
import img4 from "../images/Rectangle 2164.png";
import img5 from "../images/Rectangle 2165.png";
import building from "../images/Group (1).png";
import Heading from './Heading';


export default function Highlights() {

    let paraStr = 'Within the premises of the Sushma Township are reputed Schools, Offices, Shopping Centers, Walkways, Parks, and Recreational spaces.';

    let images = [img1, img2, img3, img4, img5, img1, img2, img3, img4, img5]

    return (
        <div className='lg:container mx-auto lg:pt-9 text-center' id='project highlights'>
            <Heading heading='HIGHLIGHTS ' line="after:w-[30%]" text={paraStr} />
            <div className='flex flex-wrap gap-1'>
                {
                    images.map((img, index) => (
                        <div key={index} className='sm:w-[247px] h-[261px] w-full group  runded-[8.27px] relative mx-auto overflow-hidden '>
                            <img className='w-full h-full group-hover:brightness-50' src={img} alt="" />
                            <div className='absolute opacity-0 group-hover:opacity-100 top-0 left-0 w-full h-full flex flex-col justify-center items-center '>
                                <div className='w-[43px] h-[54px] overflow-hidden '>
                                    <img className='w-full h-full' src={building} alt="" />
                                </div>
                                <p className='text-white text-[17px] font-[600] px-5'>
                                    Just 5 Mins Drive From Infosys & IT City Mohali
                                </p>
                            </div>
                        </div>
                    ))
                }

            </div>
            <button className="button-55 my-4 bg-[#276658] border border-[#276658] rounded-[0px_9.94px_0px_9.94px] text-[white] cursor-pointer inline-block leading-[20px] py-[12px] px-[10px] text-[20px] font-[700]  text-center shadow-[#fff_4px_4px_0_0,#276658_4px_4px_0_1px] lg:mt-10" role="button">
                <span className="text uppercase"> book site visit </span>
            </button>
        </div>
    )
}
