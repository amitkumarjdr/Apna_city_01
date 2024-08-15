import kotak from "../images/Group 1466.png"
import icici from "../images/image 7.png"
import sbi from "../images/SBI-Logo 1.png"
import bob from "../images/image 8.png"
import Heading from "./Heading"

export default function Loan() {

    let bankImg = [kotak, icici, sbi, bob]
    let paraStr = 'Within the premises of the Sushma Township are reputed Schools, Offices, Shopping Centers, Walkways, Parks, and Recreational spaces.'

    return (
        <div className="sm:py-12 md:py-0 lg:py-16">
            <Heading  heading='HOME LOAN FACILITY' line="after:w-[30%]" text={paraStr} />
            <div className="flex sm:space-y-2  lg:px-12 lg:justify-between justify-around flex-wrap gap-4 sm:my-9 mx-auto">
                {
                    bankImg.map((bank, index) => (
                        <div key={index} className="lg:w-[255px] lg:h-[95px] md:w-[220px] sm:w-[35%] w-[25%] mx-2 h-[60px] md:h-[80px] overflow-hidden px-3 " >
                            <img className="w-[100%] h-[100%] object-fill" src={bank} alt="bank Image" />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
