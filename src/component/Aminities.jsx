

import React from 'react'
import Heading from './Heading'
import img1 from "../images/Rectangle 608.png";
import img2 from "../images/Rectangle 608 (1).png";
import img3 from "../images/Rectangle 608 (2).png";
import img4 from "../images/Rectangle 616.png";
import img5 from "../images/Rectangle 608 (3).png";

export default function Aminities() {

    let aminitiesData = [
        {
            img: img1,
            title: "yoga deck ",
        },
        {
            img: img2,
            title: "herb garden  ",
        },
        {
            img: img3,
            title: "waking Track  ",
        },
        {
            img: img4,
            title: "lawn ",
        },
        {
            img: img5,
            title: "tree court  ",
        },
    ]

    let paraStr = 'Within the premises of the Sushma Township are reputed Schools, Offices, Shopping Centers, Walkways, Parks, and Recreational spaces.'

    return (
        <div className='xl:container mx-auto lg:pt-12'>
            <Heading heading='Amenities' line="after:w-[30%]" text={paraStr} />
            <div className='flex gap-3 lg:flex-nowrap flex-wrap'>
                {
                    aminitiesData.map((item, index) => (
                        <div key={index} className='relative lg:basis-[256px] md:w-[300px] md:h-[300px] sm:w-[280px] w-[88%] sm:h-[250px]  h-[300px] lg:h-[369px] mx-auto'>
                            <img className='w-full h-full fill' src={item.img} alt="" />
                            <p className='capitalize w-full text-center text-white absolute py-2 bottom-0 left-0 lg:text-[25px] md:text-[20px] pt-5  font-[500] boxgradeint  '>{item.title}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
// background: linear-gradient(3.37deg, rgba(0, 0, 0, 0.67) 46.76%, rgba(102, 102, 102, 0) 95.43%);
