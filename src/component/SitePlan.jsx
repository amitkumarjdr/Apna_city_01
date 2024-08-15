import React from 'react'
import Heading from './Heading'
import siteMap from "../images/image 3.png"

export default function SitePlan() {

   

    return (
        <div className='lg:pt-12' id='site plan'>
            <Heading  heading='SITE PLAN' line="after:w-[25%] after:left-[38%]" text="Adj. Bharat Petrol Pump, Near Upcoming Aerocity Extension, Mohali" />
            <div className='md:flex justify-between items-center  '>
                <div className='lg:w-[60%] w-[100%]  lg:h-[536px] md:h-[436px] h-[300px] border-r-[10px] border-r-[#09644E] shadow-[0px_1px_4px_3px_#00000040]' >
                        <img className='w-full h-full' src={siteMap} alt="" />
                </div>
                <div className='lg:w-[40%] w-[100%] lg:py-[16px] lg:h-[536px] md:h-[436px] h-[300px]  lg:ps-8 ps-4 shadow-[0px_1px_4px_3px_#00000040] ' >
                    <p className='lg:text-[50px] md:text-[38px] sm:text-[26px] text-[20px] font-[700] py-3 text-[#09644E] '>
                        Smart city
                    </p>
                    <p className='lg:text-[19px] md:text-[17px] sm:text-[15px] text-[12px] font-[600] text-[#737070] pe-20 pb-4 '>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <ul  className='lg:text-[19px] md:text-[17px] sm:text-[15px] text-[14px] font-[600] text-[#09644E] list-disc ps-4 lg:space-y-[16px] space-y-[5px]     '>
                        <li className='marker:text-[#E3802D] marker:size-[13px] '>Villa Plot (200)</li>
                        <li className='marker:text-[#EEC76E] '>Kothi Plot (100)</li>
                        <li className='marker:text-[#85CE97] '>Office (700)</li>
                        <li className='marker:text-[#ACDAF2] '>Shop Plot (300)</li>
                        <li className='marker:text-[#ECADD4] '>Mall Plot (100)</li>
                    </ul>
                    <p className='lg:text-[19px] md:text-[17px] sm:text-[15px] text-[12px] font-[600] lg:py-9 py-4 text-[#737070] pe-20 lg:pb-4 '>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
            </div>
        </div>
    )
}

