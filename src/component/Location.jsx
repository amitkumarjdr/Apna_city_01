import React from 'react'
import Heading from './Heading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faHospital, faPlane, faStore, faTrain } from '@fortawesome/free-solid-svg-icons';
import locationMap from "../images/image 5.png"

export default function Location() {

    let locationDetail = [
        {
            icon: faGraduationCap,
            time: "05",
            title: "education center",
        },
        {
            icon: faTrain,
            time: "15",
            title: "railway station",
        },
        {
            icon: faHospital,
            time: "10",
            title: "Hospital",
        },
        {
            icon: faHospital,
            time: "10",
            title: "Hospital",
        },
        {
            icon: faStore,
            time: "20",
            title: "market",
        },
        {
            icon:faPlane,
            time: "30",
            title: "airport",
        },
        {
            icon: faGraduationCap,
            time: "05",
            title: "education center",
        },
        {
            icon: faTrain,
            time: "15",
            title: "railway station",
        },
        {
            icon: faHospital,
            time: "10",
            title: "hospital",
        },
    ]

    return (
        <div className='lg:pt-12 lg:pb-20 pb-7' id='location'>
            <Heading  heading='LOCATION' line="after:w-[30%]" text="Adj. Bharat Petrol Pump, Near Upcoming Aerocity Extension, Mohali" />
            <div className='md:flex justify-between items-stretch  '>
                <div className='lg:w-[40%] w-[100%]  lg:ps-8 lg:h-[536px] md:h-[436px] h-[300px] ps-4 shadow-[0px_1px_4px_3px_#00000040]' >
                    <p className='lg:text-[50px] md:text-[38px] sm:text-[26px] text-[20px] font-[700] text-[#09644E] '>
                        Smart city
                    </p>
                    <p className='lg:text-[19px] md:text-[17px] sm:text-[15px] text-[12px] font-[600] text-[#737070] pe-20 lg:pb-4 '>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <p className='lg:text-[19px] md:text-[17px] sm:text-[15px] text-[12px] font-[600] lg:py-5 py-2 text-[#09644E]'>
                        Destination falling nearby
                    </p>
                    <div className='grid grid-cols-3  ps-0 lg:gap-y-5 gap-y-2   py-4'>
                        {
                            locationDetail.map((item,index) => (
                                <div key={index} className='leading-tight'>
                                    <div className='flex justify-start items-center gap-2'>
                                        <p className='border-r-[0.63px] border-r-[#8A8A8A] pe-2 '>
                                            <FontAwesomeIcon className='lg:w-[38px] lg:h-[32px] md:w-[30px] md:h-[28px] sm:w-[26px] sm:h-[24px] w-[20px] h-[18px] text-[#09644E] ' icon={item.icon} />
                                        </p>
                                        <p className='flex justify-center items-center  '>
                                            <span className='text-[#09644E] lg:text-[31px] md:text-[26px] sm:text-[20px]  font-[700]  '>{item.time}</span>
                                            <span className='lg:text-[12px] md:text-[11px] text-[10px] text-[#09644E] ps-1 leading-tight'> mins  <br /> from  </span>
                                        </p>
                                    </div>
                                    <div className='capitalize text-[#09644E] lg:ps-5 pe-4 py-1 lg:text-[14px] text-[13px]  font-[600] text-nowrap '>
                                        {item.title}
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
                <div className='lg:w-[60%] w-[100%] lg:h-[536px] md:h-[436px] h-[300px] shadow-[0px_1px_4px_3px_#00000040]  border-l-[10px] border-l-[#09644E]' >
                        <img className='w-full h-full ' src={locationMap} alt="" />
                </div>
            </div>
        </div>
    )
}
