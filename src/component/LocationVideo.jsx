import React from 'react'
import Heading from './Heading';
import img01 from "../images/Group 1443.png";
import img02 from "../images/Group 1444.png";

export default function LocationVideo() {
    let paraStr = "Within the premises of the Sushma Township are reputed Schools, Offices, Shopping Centers, Walkways, Parks, and Recreational spaces."
    return (
        <div className='lg:container mx-auto lg:pt-12'>
            <Heading  heading='EXPERIENCE THE LOCATION' line="after:w-[30%]"  text={paraStr} />
            <div className='grid sm:grid-cols-2 grid-cols-1 gap-4'>
                <div className='w-full lg:h-[390px] md:h-[290px] h-[190px]  overflow-hidden'>
                    {/* <iframe className='w-full h-full' src="" title="YouTube video player"  ></iframe> */}
                    <img src={img01} alt="" />
                </div>
                <div className='w-full lg:h-[390px] md:h-[290px] sm:h-[190px] '>
                    {/* <iframe className='w-full h-full' src="" title="YouTube video player" ></iframe> */}
                    <img src={img02} alt="" />
                </div>
            </div>
        </div>
    )
}
