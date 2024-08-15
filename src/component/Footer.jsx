
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../images/Group.png";
import { faLocationDot, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import footerLogo from "../images/Group 2368.png";


export default function Footer() {

    let projectDetail = ['overview',
        'project highlights ',
        'site plan ',
        'location',
        'price  list'
    ];

    let otherDetails = ['Gallery',
        'Help & Supports',
        'Terms of Service',
        'Contact Us'
    ]

    return (
        <div className="bg-[#0A3E33] my-5 py-5 " >
            <div className="container mx-auto grid md:grid-cols-4 grid-cols-2 md:px-8 px-8 gap-3 lg:py-8 ">
                <div>
                    <div className="inline-flex  items-center space-x-2">
                        <div className='w-[45px] h-[38px] '>
                            <img src={logo} alt="" />
                        </div>
                        <span className="font-[600] xl:text-[24px] text-[20px] text-nowrap text-[#FFFFFF] ">Apna City </span>
                    </div>
                    <p className="xl:text-[14px] sm:text-[12px] text-[10px] text-[#FCFCFC] font-[600] py-4">
                        Lorem Ipsum is simply dummy text of
                        the printing and typesetting industry.
                        Lorem Ipsum has been the industry's
                        standard dummy text ever since the
                        1500s, when an unknown
                    </p>
                    <p className="xl:text-[14px] sm:text-[12px] text-[10px] text-[#FCFCFC] font-[600] py-2 ">
                        Lorem Ipsum is simply dummy text of
                        the printing and typesetting
                    </p>
                </div>
                <div>
                    <ul className="list-disc xl:ps-24 ps-4 pt-9 xl:space-y-2">
                        {
                            projectDetail.map((item, index) => (
                                <li key={index} className="capitalize xl:text-[22px] md:text-[18px] text-[15px]  font-[700] text-[#FCFCFC] hover:ps-4 hover:border-b hover:duration-700 cursor-pointer">
                                    {item}
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div>
                    <ul className="list-disc xl:ps-24 pt-9 xl:space-y-2">
                        {
                            otherDetails.map((item, index) => (
                                <li key={index} className="capitalize xl:text-[22px] md:text-[18px] text-[15px]  font-[600] text-[#FCFCFC] hover:ps-4 hover:border-b hover:duration-700 cursor-pointer">
                                    {item}
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="space-y-4 xl:ps-24 pt-9">
                    <ul className="flex justify-start items-center gap-3 xl:text-[19px] md:text-[16px] text-[14px] text-nowrap   text-[#FCFCFC] ">
                        <li className="xl:size-[43px] md:size-[30px] sm:size-[30px] p-1 rounded-full bg-[rgba(252,252,252,0.5)] flex justify-center items-center ">
                            <FontAwesomeIcon icon={faPhoneVolume} />
                        </li>
                        <li className="">
                            <p className="hover:ps-4 hover:border-b hover:duration-700 cursor-pointer">+91 1234567890</p>
                            <p className="hover:ps-4 hover:border-b hover:duration-700 cursor-pointer">+91 1234567890</p>
                        </li>
                    </ul>
                    <ul className="flex justify-start items-center gap-3 xl:text-[19px] md:text-[16px] text-[14px] text-[#FCFCFC] ">
                        <li className="lg:size-[43px] md:size-[30px] md:px-3 p-1 sm:size-[30px] rounded-full bg-[rgba(252,252,252,0.5)] flex justify-center items-center">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </li>
                        <li className="">
                            <p className=" hover:border-b hover:duration-700 cursor-pointer">Needhelp@gmail.com</p>
                            <p className="hover:ps-4 hover:border-b hover:duration-700 cursor-pointer">sushma@gmail.com</p>
                        </li>
                    </ul>
                    <ul className="flex justify-start items-center gap-3 text-[#FCFCFC] xl:text-[19px] md:text-[16px] text-[14px] ">
                        <li className="xl:size-[43px] md:size-[30px] sm:size-[30px] p-1 rounded-full bg-[rgba(252,252,252,0.5)] flex justify-center items-center">
                            <FontAwesomeIcon icon={faLocationDot} />
                        </li>
                        <li className="hover:ps-4 hover:border-b hover:duration-700 cursor-pointer ">
                            <p>PR-7 Airport Road, </p>
                            <p>Zirakpur, Punjab</p>
                        </li>
                    </ul>
                    <div className="lg:w-[200px] lg:h-[64px] md:w-[150px] w-[100px] md:h-[50px] h-[40px] ">
                        <img className="w-full h-full " src={footerLogo} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
