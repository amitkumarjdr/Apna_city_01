
import React from 'react'

export default function Heading({ heading, text,line }) {
    return (
        <div className='  lg:pt-10 pt-5'>

            <h1 className={` text-4xl text-center uppercase leading-tight text-[#276658] font-[700] md:text-5xl lg:text-[50px] relative `} >
                <span className={`after:absolute  ${line} after:h-[2px] after:bg-[#276658] after:bottom-[-10px] after:left-[35%]`}>

                    {heading}
                </span>
            </h1>
            <p className="lg:mb-12 mb-6 mt-5 text-lg text-center capitalize font-normal text-[#5D615B] lg:text-[20px] sm:px-16 lg:px-[250px] dark:text-gray-400" >
                {text}
            </p>

        </div>

    )
}
//after:w-[22%]