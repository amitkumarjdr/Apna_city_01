
import React, { useEffect, useRef, useState } from 'react'
import { Navbar } from '../component/Navbar'
import bgImg from "../images/Rectangle 1.png"
import Heading from '../component/Heading';
import img01 from "../images/Union.png"
import img02 from "../images/Union (1).png"
import bgImg1 from "../images/Rectangle 409.png"
import ProjectOverView from '../component/ProjectOverView';
import Products from '../component/Products';
import Footer from '../component/Footer';
import DownloadSection from '../component/DownloadSection';
import Loan from '../component/Loan';
import Testimonial from "../component/Testimonial";
import Gallery from "../component/Gallery";
import Faq from '../component/Faq';
import Aminities from '../component/Aminities';
import Location from '../component/Location';
import SitePlan from '../component/SitePlan';
import LocationVideo from '../component/LocationVideo';
import MasterPlan from '../component/MasterPlan';
import Highlights from '../component/Highlights';
import PriceList from '../component/PriceList';
import DistanceFromHome from '../component/DistanceFromHome';
import Landmarks from '../component/Landmarks';
import icon1 from "../images/Group 2329.png";
import icon2 from "../images/Group 2327.png";
import icon3 from "../images/Group 2328.png";
import icon4 from "../images/Vector (1).png";
import banner from "../images/Group 2369.png";

export default function Home() {


    const [viewIcon, setViewIcon] = useState("hidden")
    const [activeIcon, setActiveIcon] = useState(true);
    const [isHover, setIsHover] = useState(img01)

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);

    const sectionRef = useRef(null)
    const intervalIdRef = useRef(null)

    const handleScroll = () => {
        let section = sectionRef.current
        if (section) {
            const rect = sectionRef.current.getBoundingClientRect();
            const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
            if (isVisible && !intervalIdRef.current) {
                intervalIdRef.current = setInterval(() => {
                    setCount1(prevCount => {
                        if (prevCount >= 446) {
                            clearInterval(intervalIdRef.current);
                            // intervalIdRef.current = null;
                            return prevCount;
                        }
                        return 10 + prevCount + 2;
                    });
                },
                    1);
                intervalIdRef.current = setInterval(() => {
                    setCount2(prevCount => {
                        if (prevCount >= 20) {
                            clearInterval(intervalIdRef.current);
                            intervalIdRef.current = null;
                            return prevCount;
                        }
                        return prevCount + 1;
                    });
                }, 10)

                intervalIdRef.current = setInterval(() => {
                    setCount3(prevCount => {
                        if (prevCount >= 22) {
                            clearInterval(intervalIdRef.current);
                            intervalIdRef.current = null;
                            return prevCount;
                        }
                        return prevCount + 1;
                    });
                }, 10)

                intervalIdRef.current = setInterval(() => {
                    setCount4(prevCount => {
                        if (prevCount >= 24) {
                            clearInterval(intervalIdRef.current);
                            intervalIdRef.current = null;
                            return prevCount;
                        }
                        return prevCount + 5;
                    });
                }, 1);

            } else if (!isVisible && intervalIdRef.current) {
                clearInterval(intervalIdRef.current);
                intervalIdRef.current = null;
            }

        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearInterval(intervalIdRef.current);
        };
    }, []);

    const icons = [
        {
            icon: icon1,
            title: "Call"
        },
        {
            icon: icon2,
            title: "Whatsapp"
        },
        {
            icon: icon3,
            title: "Chat"
        },
        {
            icon: icon4,
            title: "Broucher"
        },
    ];


    const showIcon = () => {
        if (activeIcon) {
            setViewIcon("block duration-700 ease-in-out")
            setActiveIcon(false)
        }
        else {
            setViewIcon("hidden")
            setActiveIcon(true)
        }
    };





    return (
        <div className='w-full mx-0'>
            <Navbar />
            <div id='topview'
                className='w-[100%] xl:h-[800px] lg:h-[700px] md:h-[500px] sm:h-[400px] py-4 bg-no-repeat bg-cover  grid grid-cols-2 justify-center items-center bannergradeint'
                style={{
                    backgroundImage: ` linear-gradient(180deg, rgba(0, 0, 0, 0.8 ) 5.24%, rgba(0, 0, 0, 0) 49.76%) ,url(${bgImg}) `,
                }}>
                <ul className='text-white  leading-none px-7'>
                    <li className='lg:text-[50px] md:text-[33px] sm:text-[26px] text-[20px] sm:text-nowrap'>
                        ADVANTAGES OF INVESTING IN
                    </li>
                    <li className='xl:text-[136px] lg:text-[100px] md:text-[80px] sm:text-[50px] text-nowrap text-[30px]  py-2'>
                        RESIDENTIAL <br /> PLOTS
                    </li>
                    <li className='lg:text-[19px] md:text-[17px] sm:text-[15px] text-[12px] sm:text-nowrap '>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />
                        Lorem Ipsum has been the industry's standard dummy text ever since
                    </li>
                </ul>
            </div>
            <div className='bg-[#276658] py-6 text-center  '>
                <p className='lg:text-[34px] md:text-[24px] sm:text-[18px] text-white uppercase ' >
                    Are you interested in FREE Site Visit
                </p>
                <form action="" className='grid md:grid-cols-4 sm:grid-cols-3 grid-cols-1 px-4 lg:gap-10 gap-5 container mx-auto py-4'>

                    <input
                        className="flex  w-full  borde-0 bg-[#559A8B] px-3 py-2 lg:text-[20px] placeholder:text-white focus:outline-none   disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        placeholder="Enter Name"

                    />
                    <input
                        className="flex  w-full  borde-0 bg-[#559A8B] px-3 py-2 lg:text-[20px] placeholder:text-white focus:outline-none   disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        placeholder="Enter Mobile No"

                    />
                    <input
                        className="flex  w-full  borde-0 bg-[#559A8B] px-3 py-2 lg:text-[20px] placeholder:text-white focus:outline-none   disabled:cursor-not-allowed disabled:opacity-50"
                        type="email"
                        placeholder="Enter Email Id"
                    />
                    <button
                        type="button"
                        className=" bg-[#D6A916] capitalize px-3 py-2 lg:text-[20px] font-semibold border-0 text-white shadow-sm hover:bg-yellow-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600 text-nowrap"
                    >
                        book a free visit site
                    </button>

                </form>
            </div>
            <div className='border-b border-b-[#D4D4D4]'>
                <div className=' lg:container lg:mx-auto lg:pt-20  pt-6'>
                    <h1 className={` text-4xl text-center uppercase leading-tight text-[#276658] font-[700] md:text-5xl lg:text-[50px] relative `} >
                        WHY SMART CITY ?
                    </h1>
                    <p className="mb-7 mt-4 text-lg text-center capitalize font-normal text-[#5D615B] lg:text-[20px] sm:px-16 lg:px-[250px] dark:text-gray-400" >
                        Your Dream Home Awaits you to Own Exquisite Site in the Smart City.
                    </p>

                    <div className='grid lg:grid-cols-5 md:grid-cols-3 mx-2 grid-cols-2 sm:pb-20 pb-5 gap-4 lg:mt-16 '>
                        {
                            [1, 2, 3, 4, 5].map((item, index) => (
                                <div key={index} className='border border-[#276658] rounded-[13px] cursor-pointer bg-white text-[#276658] flex justify-center items-center px-4 lg:py-7 py-4 hover:bg-[#276658] hover:text-white group'>
                                    <div className='lg:size-[60px] md:size-10 size-8  '>
                                        <img className='w-full h-full object-contain group-hover:hidden' src={img01} alt="" />
                                        <img className='w-full h-full object-contain hidden group-hover:block' src={img02} alt="" />
                                    </div>
                                    <p className='lg:text-[22px] md:text-[18px]  ps-2 xl:ps-6  leading-tight'>
                                        Storm water Drain
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
            <ProjectOverView />
             <Products />
           <DistanceFromHome />
            <div className='lg:mt-16 relative py-16 ' style={{ background: `url(${bgImg1})`, backgroundPosition: "center" }} ref={sectionRef}>
                <div className=' mx-auto absolute w-full h-full lg:py-9 py-4 top-0 left-0 flex justify-evenly   sm:flex-nowrap flex-wrap items-center px-4 bg-[rgba(29,80,68,0.9)] '>
                    <ul className='text-[white] flex justify-center items-center ps-2 border-r border-r-white lg:pe-5   pe-9' >
                        <li className='lg:text-[60px] md:text-[35px] sm:text-[30px] text-[20px] font-[700] pe-3 '> {count1}+</li>
                        <li className='lg:text-[23px] md:text-[16px] sm:text-[15px] text-[13px] font-[600] border-l border-l-white uppercase  ps-2 sm:py-2'> plots </li>
                    </ul>
                    <ul className='text-white flex justify-center items-center ps-2 sm:border-r sm:border-r-white sm:pe-9' >
                        <li className='lg:text-[60px] md:text-[35px] sm:text-[30px] text-[20px] font-[700] pe-3 '> {count2}+</li>
                        <li className='lg:text-[23px] md:text-[16px] sm:text-[15px] text-[13px] font-[600] border-l border-l-white uppercase ps-2 sm:py-2 '> ACRES </li>
                    </ul>
                    <ul className='text-white flex justify-center items-center ps-2  border-r border-r-white sm:pe-6 pe-5' >
                        <li className='lg:text-[60px] md:text-[35px] sm:text-[30px] text-[20px] font-[700] pe-3 '> {count3}+</li>
                        <li className='lg:text-[23px] md:text-[16px] sm:text-[15px] text-[13px] font-[600] border-l border-l-white uppercase  ps-2   leading-tight'> LIFESTYLE <br /> AMENITIES </li>
                    </ul>
                    <ul className='text-white flex lg:justify-center justify-start lg:ps-2 items-center ps-2' >
                        <li className='lg:text-[60px] md:text-[35px] sm:text-[30px] text-[20px] font-[700]  pe-3'> {count4} </li>
                        <li className='lg:text-[23px] md:text-[14px] sm:text-[15px] text-[13px] font-[600] border-l border-l-white uppercase  ps-2 sm:py-2 '> LAKHS </li>
                    </ul>
                </div>
            </div>
            <PriceList />
            <MasterPlan />
            <Highlights />
            <div className='bg-[#0F5040] lg:h-[145px] mt-12' >
                <img className='w-full h-full' src={banner} alt="" />
            </div>
            <LocationVideo />
            <SitePlan />
            <Location />
            <Landmarks />
            <Aminities />
            <Faq />
            <Gallery />
            <Testimonial />
            <Loan />
            <DownloadSection />
            <div className='fixed bottom-[150px] right-[50px] flex justify-center items-center z-[99]' >
                <div className={`lg:h-[60px] h-[45px] bg-white flex justify-center pe-16 z-[-1] items-center  ${viewIcon} ps-6 rounded-full right-[20px]  gap-8 absolute border border-[#09644E] `} >
                    {
                        icons.map((el, index) => (
                            <div key={index} className='w-[21px] h-[20px] group '>
                                <img className='w-full h-full ' src={el.icon} alt="" />
                                <p className='hidden group-hover:block  text-[#09644E] font-[600] text-[11px] '>
                                    {el.title}
                                </p>
                            </div>
                        ))
                    }
                </div>
                <div className='bg-[#09644E] lg:w-[60px] lg:h-[60px] w-[45px] h-[45px] flex justify-center items-center rounded-full'>
                    <button className='text-[55px] text-white text-center ' onClick={showIcon}> + </button>
                </div>

            </div>
            <Footer />
        </div>
    )
}
