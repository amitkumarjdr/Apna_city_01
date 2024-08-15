
import roller from "../images/Group 1388.png";
import img1 from "../images/Group 2377.png";

export default function ProjectOverView() {
    return (
        <div className="sm:flex justify-between items-center lg:pt-24 pt-7" id="overview">
            <div className='sm:basis-[60%] sm:ps-9 ps-4' >
                <div className="flex  justify-start items-center gap-3" >
                    <div className="w-[7px] sm:h-[52px] h-[30px] ">
                        <img className="w-full h-full object-contain" src={roller} alt="" />
                    </div>
                    <p className="lg:text-[50px] md:text-[40px] sm:text-[30px] text-[20px]  text-[#276658] font-[700] ">
                        PROJECT OVERVIEW
                    </p>
                </div>
                <div className="text-[#3F3E3E]  lg:text-[20px] md:text-[15px]  ps-2 text-[13px] font-[600] ">
                    <p className="lg:pt-5 pt-3 pe-9">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                    <p className="lg:pt-[40px] pt-[20px] pe-9">
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    </p>
                    <ul className=" list-disc ps-4 py-5 space-y-3" >
                        <li>
                            Plot Size - 80/100/110/137 Sq.Yards
                        </li>
                        <li>
                            Price Starts From - ₹ 20 Lakhs
                        </li>
                        <li>
                            RERA Approved
                        </li>
                        <li>
                            Possession - Immediate
                        </li>
                    </ul>
                </div>
                <button className="button-55 my-4 bg-[#276658] border border-[#276658] rounded-[0px_9.94px_0px_9.94px] text-[white] cursor-pointer inline-block leading-[20px] py-[12px] px-[40px] text-center shadow-[#fff_4px_4px_0_0,#276658_4px_4px_0_1px] " role="button">
                    <span className="text uppercase">book now </span>
                </button>

            </div>
            <div className='sm:basis-[40%] lg:h-[728px] md:h-[500px]  h-[450px]' >
                <img className="w-full h-full  " src={img1} alt="" />
            </div>
        </div>
    )
}
