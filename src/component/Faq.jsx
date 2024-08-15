

import React, { useState } from 'react'
import Heading from './Heading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

export default function Faq() {

    const [active , setActive] = useState(0)

    let paraStr = 'Within the premises of the Sushma Township are reputed Schools, Offices, Shopping Centers, Walkways, Parks, and Recreational spaces.'

    let faqItem = [
        {
            question: 'Where is it located?',
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hasbeen the industry's standard dummy text ever since the 1500s",
        },
        {
            question: 'How far is SMART CITY from Aero City ?',
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hasbeen the industry's standard dummy text ever since the 1500s"
        },
        {
            question: 'How many Plot units are there?',
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hasbeen the industry's standard dummy text ever since the 1500s"
        },
        {
            question: 'What is the total land area?',
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hasbeen the industry's standard dummy text ever since the 1500s"
        },
        {
            question: 'What is the area of the plots?',
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hasbeen the industry's standard dummy text ever since the 1500s"
        },
        {
            question: 'Are the plots ready to register?',
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hasbeen the industry's standard dummy text ever since the 1500s"
        },
    ]

    

    return (
        <div className='sm:py-6 lg:pt-10' id='faq'>
            <Heading  heading='faq' line="after:w-[20%] after:left-[40%]" text={paraStr} />
            <section className="bg-white dark:bg-gray-900">
                <div className="container lg:px-12 px-6 mx-auto">
                    <div className="sm:mt-12 space-y-2 lg:px-12">
                        {
                            faqItem.map((item, index) => (
                                <div key={index} className="border-2 border-[#D9D9D9] " >
                                    <button className="flex items-center justify-start gap-4 pb-4 w-full px-8 py-2" onClick={()=>setActive(index)}>
                                        <div className='flex justify-center items-center bg-[#276658] text-white lg:size-[25px] md:size-[20px] size-[18px] text-[14px] rounded-[3px] '>
                                            <FontAwesomeIcon icon={(active == index) ? faMinus : faPlus} />
                                        </div>
                                        <p className="lg:text-[24px]  md:text-[20px] sm:text-[16px] text-[14px] font-[700] text-[#276658] ">
                                            {item.question}
                                        </p>
                                    </button>
                                    {/* <hr class="border-[#C0BCBC]" /> */}
                                    <p className={`lg:text-[21px] md:text-[17px] pb-6 sm:text-[14px] text-[12px] font-[600] text-[#696767] px-8 py-2  border-t border-t-[#C0BCBC] ${(active == index ) ? "block" : "hidden"}`}>
                                        {item.answer}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}
