import React, { useState } from 'react'
import Heading from './Heading';
import plotImg from "../images/Rectangle 2082.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';

export default function PriceList() {

    const [activeBtn, setActiveBtn] = useState(0);
    const [unlock, setUnlock] = useState(false);
    const [property, setProperty] = useState("Villa")

    let btn = ["villa", "Kothi", "office", "shop"];
    let plotSize = [80, 100, 125, 200];
    let price = ["90 lakh", "23 Cr", "35 Cr", "75 Cr"]

    const handleBtn = (item,index)=>{
        console.log(item,index)
        setActiveBtn(index)
        setProperty(item)
    }

    return (
        <div className='lg:container mx-auto lg:pt-16' id='price list'>
            <Heading heading=' Price list' line="after:w-[30%]" text='AVAIL LIMITED PERIOD OFFERS Register To Unlock Special Offer Prices Now' />
            <ul className='flex  border-b border-b-[#CCCCCC]   '>
                {
                    btn.map((item, index) => (
                        <li key={index} className=' relative capitalize cursor-pointer text-[#09644E] lg:text-[20px] text-[18px] font-[700] lg:mx-9 sm:mx-5  lg:px-6 px-3 pb-2 ' onClick={()=>handleBtn(item,index)}>
                            <span className={` ${(activeBtn == index) ? "after:absolute after:w-[100%] after:mx-2 after:h-[5px] after:bottom-[-7%] after:rounded-[15px] after:left-[-10%] after:bg-[#09644E]" : " "} `}>
                                {item}
                            </span>
                        </li>
                    ))
                }
            </ul>
            <ul className='bg-[#276658] text-white font-[700] md:text-[20px] ttext-[18px] grid grid-cols-3 text-center  mt-9'>
                <li className='md:py-4 py-2 capitalize'> {property} </li>
                <li className='md:py-4 py-2'>Plot size</li>
                <li className='border-l border-l-white md:py-4 py-2'>Price</li>
            </ul>
            <ul className='grid grid-cols-3 my-3'>
                <li className='md:h-[513px] sm:h-[313px] h-[250px] '>
                    <img className='w-full h-full ' src={plotImg} alt="" />
                </li>
                <li className='grid grid-rows-4 gap-3'>
                    {
                        plotSize.map((item, index) => (
                            <p key={index} className='text-[#272727] uppercase md:py-8 sm:py-2 py-0 md:text-[20px] sm:text-[18px] text-[13px] font-[700] bg-[#EBEBEB]
                            text-center flex justify-center items-center'>{item}  Sq.Yards</p>
                        ))
                    }
                </li>
                <li className='grid grid-rows-4 gap-3 relative overflow-hidden'>
                    {
                        price.map((item, index) => (
                            <p key={index} className={`text-[#272727] uppercase md:py-8 sm:py-2 py-0 md:text-[20px] sm:text-[18px] text-[13px] font-[700] bg-[#EBEBEB] text-center flex justify-center items-center border-l border-l-[rgba(142,142,142,0.51)] ${(unlock) ? "blur-[0px]" : "blur-[4px]"}`} >{item}  Sq.Yards</p>
                        ))
                    }
                    <div className={`absolute w-full h-full flex justify-center items-center duration-500 ${(unlock) ? "scale-0" : "scale-100"}`} >
                        <button className='md:rounded-[12.39px] rounded-[6px] text-white bg-[#276658] md:px-12 sm:px-6 px-2 md:py-6 sm:py-3 ' onClick={() => setUnlock(true)} >
                            <FontAwesomeIcon className='md:text-[28px] text-[17px] ' icon={faLock} />
                            <p className='md:text-[17px] text-[13px] uppercase'>
                                unlock pricing
                            </p>
                        </button>
                    </div>
                </li>
            </ul>

        </div>
    )
}
