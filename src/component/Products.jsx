
import React, { useState } from 'react'
import Heading from './Heading';
import villaImg from "../images/Rectangle 2222.png";
import KothiImg from "../images/Rectangle 2222 (1).png";
import officeImg from "../images/Rectangle 2222 (2).png";
import squareBox from "../images/Vector.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Villa from './Villa';
import { faIndianRupeeSign, faKey, faMinimize, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export default function Products() {

    let [activeProduct, setActiveProduct] = useState(0)

    let productsBtn = ["All", "Villa", "Kothi", "Office", "Shop"]

    let productDetail = [
        {
            name: "Villa",
            img: villaImg,
        },
        {
            name: "Kothi",
            img: KothiImg,
        },
        {
            name: "Office",
            img: officeImg,
        },
    ]



    return (
        <div className='lg:pt-9  lg:container mx-auto sm:mb-16' id='oUR PRODUCTS'>
            <Heading  heading="our products " line="after:w-0" text="Your Dream Home Awaits you to Own Exquisite Site in the Smart City." />
            <div className="text-sm font-medium text-center text-gray-500 border-b border-[#CCCCCC] dark:text-gray-400 dark:border-gray-700 ">
                <ul className='flex  border-b border-b-[#CCCCCC]   '>
                    {
                        productsBtn.map((item, index) => (
                            <li key={index} className=' relative capitalize cursor-pointer text-[#09644E] lg:text-[20px] text-[18px] font-[700] lg:mx-6 sm:mx-5  lg:px-6 px-3 pb-2  ' onClick={() => setActiveProduct(index)}>
                                <span className={` ${(activeProduct == index) ? "after:absolute after:w-[100%] after:mx-2 after:h-[5px] after:bottom-[-7%] after:rounded-[15px] after:left-[-10%] after:bg-[#09644E]" : " "} `}>
                                    {item}
                                </span>
                            </li>
                        ))
                    }
                </ul>
            </div>
            {
                (activeProduct == 0) ?
                    <div className='flex flex-wrap justify-around items-center lg:gap-2 gap-6 lg:pt-12 lg:pb-20 pb-16'>
                        {
                            productDetail.map((product, index) => (
                                <div key={index} className='lg:h-[467px] lg:w-[32%] md:w-[45%] md:h-[367px] w-[84%] h-[267px] rounded-[13px]  relative lg:my-5 md:my-9 my-4'>
                                    <img className='w-full h-full ' src={product.img} alt="" />
                                    <div className='absolute right-0 mt-[-60px] lg:ms-[45px]   group  bg-white  border border-[#276658] px-3 '>
                                        <div className='border-b py-1 flex justify-between items-center border-b-[#CCCCCC]'>
                                            <p className='text-[#276658] lg:text-[25px] md:text-[18px] sm:text[16px]  font-[700] '>
                                                {product.name}
                                            </p>
                                            <div className='flex  justify-center items-center lg:gap-3'>
                                                <div className='xl:w-auto xl:h-auto w-[18px] h-[22px] '>
                                                    <img src={squareBox} alt="" />
                                                </div>
                                                <p className='lg:text-[17px] md:text-[15px] sm:text-[12px] text-[11px] text-[#515151] font-[700] '>
                                                    300
                                                </p>
                                            </div>
                                        </div>
                                        <p className='flex justify-start items-center gap-2 xl:text-[15px] md:text-[13px] sm:text-[11px] text-[10px]  text-[#404348] font-[600] text-nowrap '>
                                        <FontAwesomeIcon icon={faMinimize} />  100/120/150/sq.yards
                                        </p>
                                        <div className='flex  xl:text-[15px] md:text-[13px] sm:text-[11px] text-[10px] gap-3 text-[#404348] font-[600]  py-2'>
                                            <p className='flex justify-center items-center gap-2'>
                                            <FontAwesomeIcon icon={faIndianRupeeSign} />  Start From 20 lakh
                                            </p>
                                            <p className='flex justify-center items-center gap-2 xl:text-[15px] md:text-[13px] sm:text-[11px] text-[10px]  text-[#404348] font-[600] '>
                                            <FontAwesomeIcon icon={faKey} />  Under CONSTRUCTION
                                            </p>
                                        </div>
                                        <div className=' justify-between flex opacity-0 group-hover:opacity-100 items-center   bg-[#276658] absolute rounded-[0px_0px_20px_20px] lg:translate-x-[28%] md:translate-x-[25%] translate-x-[20%]  gap-4 lg:py-3 md:py-2 py-1 px-5'>
                                            <p className='flex justify-center items-center gap-1 sm:text-[12px] text-[8px] text-white '>
                                            <FontAwesomeIcon icon={faPaperPlane} /> Enquire now
                                            </p>
                                            <button className='border-0 bg-white text-[8px] sm:text-[12px] px-2 gap-1 py-[2px] flex justify-between items-center'>
                                                <FontAwesomeIcon icon={faWhatsapp} />
                                                Whatsapp
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))

                        }


                    </div>
                    :
                    (activeProduct == 1) ?
                        <Villa text="Villa" /> :
                        (activeProduct == 2) ?
                            <Villa text="Kothi" /> :
                            (activeProduct == 3) ?
                                <Villa text="Office" /> :
                                (activeProduct == 4) ?
                                    <Villa text="Shop" /> : ''}

        </div>
        )

    }
