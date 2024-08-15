import React from 'react'
import Heading from './Heading';
import masterImg from "../images/Rectangle 605.png";

export default function MasterPlan() {

    let paraStr = 'Within the premises of the Sushma Township are reputed Schools, Offices, Shopping Centers, Walkways, Parks, and Recreational spaces.';

    return (
        <div className='lg:container lg:mx-auto lg:pt-9 '>
            <Heading  heading='Masterfully Designed Masterplan' line="after:w-[30%]" text={paraStr} />
            <div className='w-full lg:h-[557px] md:h-[457px] sm:h-[357px] h-[257px]  '>
            {/* <iframe className='w-full h-full ' src="" title="YouTube video player" ></iframe> */}
            <img src={masterImg} alt="masterplan" className='w-full h-full' />
            </div>
        </div>
    )
}
