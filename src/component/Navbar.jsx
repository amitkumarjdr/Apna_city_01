import React from 'react'
import logo from "../images/Group 1480.png";
import realtyLogo from "../images/Group 1.png";
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-scroll';

export function Navbar() {
    const menuItems = [
        "overview",
        "oUR PRODUCTS",
        "project highlights",
        "price list",
        "site plan",
        "location",
        "faq",
        "Contact us",
    ]
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className='sticky top-0 z-[99999] bg-[#F3F3F0]'>
            <div className=" w-full  py-3">
                <div className="mx-auto flex  items-center justify-between lg:container  px-4 py-2 ">
                    <Link to='topview'
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}>
                        <div className="inline-flex  items-center space-x-2">
                            <div className='w-[45px] h-[38px] '>
                                <img src={logo} alt="" />
                            </div>
                            <span className="font-[900] xl:text-[22px] text-[20px] text-nowrap text-[#032019] ">Apna City </span>

                        </div>
                    </Link>
                    <div className="hidden grow justify-end xl:flex ">
                        <ul className="ml-12 inline-flex xl:space-x-6  space-x-4  ">
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    <Link to={item}
                                        className=" font-[500] text-nowrap lg:text-[15px] cursor-pointer text-[#276658] uppercase relative"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={500}
                                    >
                                        <span className='after:absolute after:w-[0%] after:bottom-[-3px] after:left-0 after:h-[2px] after:bg-[#032019] text-[17px] font-[600] hover:after:w-[100%] after:duration-500'>
                                            {item}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="xl:hidden">
                        <FontAwesomeIcon icon={faBars} onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
                    </div>
                    {isMenuOpen && (
                        <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
                            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                                <div className="px-5 pb-6 pt-5">
                                    <div className="flex items-center justify-between">
                                        <div className="inline-flex items-center space-x-2">
                                            <div className='w-[45px] h-[38px] '>
                                                <img src={logo} alt="" />
                                            </div>
                                            <span className="font-bold text-[22px] text-[#032019] ">Apna City </span>
                                        </div>
                                        <div className="-mr-2">
                                            <button
                                                type="button"
                                                onClick={toggleMenu}
                                                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                            >
                                                <span className="sr-only">Close menu</span>
                                                <FontAwesomeIcon icon={faX} className="h-6 w-6" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <nav className="grid list-none">
                                            <ul className='space-y-3'>
                                                {menuItems.map((item, index) => (
                                                    <li key={index}>
                                                        <Link to={item}
                                                            className=' text-[#276658] uppercase font-[600] cursor-pointer hover:px-3 py-3 rounded-sm hover:bg-[#276658] hover:text-white'
                                                            spy={true}
                                                            smooth={true}
                                                            offset={-100}
                                                            duration={500}
                                                            onClick={toggleMenu}
                                                        >
                                                            <span className='after:absolute after:w-[0%] after:bottom-[-3px] after:left-0 after:h-[2px]  after:bg-[#032019] text-[17px] font-[600] hover:after:w-[100%] after:duration-500'>
                                                                {item}
                                                            </span>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
