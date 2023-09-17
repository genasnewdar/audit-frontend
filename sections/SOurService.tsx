import { ChevronRight, MonitorCheckIcon, TrendingUp } from "lucide-react"

import { CSwiper } from "@/components"
import { LIBS } from "@/libs"


const SOurService = () => {


    return (
        <div className="container m-auto flex flex-col gap-5 md:gap-10 justify-center items-start">
            <div className="flex w-full flex-col justify-center gap-4">
                <p className=" text-primary-900 text-center font-semibold" >Our Services</p>
                <h2 className="text-2xl leading-[44px] text-center font-semibold mb-2 text-[36px]">Our Services</h2>
        </div>
            <div className="w-full flex justify-center">
                <div className='flex flex-col md:flex-row py-10 items-center justify-center gap-10'>
                    <div className="px-5 rounded-2xl py-4 shadow-2xl min-w-full md:min-w-[370px] md:px-[30px] md:py-[30px] w-full flex max-w-[380px] justify-start items-start flex-col gap-4 md:gap-[30px]">
                        <div className="flex gap-4 items-center">
                            <div className="p-[11px] bg-[#F4EBFF] rounded-lg"><MonitorCheckIcon className="text-primary-900" /></div>
                            <h2 className="text-[24px] font-semibold">EaaS</h2>
                        </div>
                        <p className="text-[#646464]">
                            EdTech-as-a-Service <br/>
                            Offering main Lever service
                        </p>
                        <p className=" text-primary-900 text-start font-semibold flex items-center" >Learn More <ChevronRight/></p>
                    </div>
                    <div className="px-5 rounded-2xl py-4 shadow-2xl min-w-full md:min-w-[370px] md:px-[30px] md:py-[30px] w-full flex max-w-[380px] justify-start items-start flex-col gap-4 md:gap-[30px]">
                        <div className="flex gap-4 items-center">
                            <div className="p-[11px] bg-[#FCE7F6] rounded-lg"><TrendingUp className="text-[#C11574]"/></div>
                            <h2 className="text-[24px] font-semibold">Enterprise Solution</h2>
                        </div>
                        <p className="text-[#646464]">
                            Offering unique service especially <br/> meets your needs
                        </p>
                        <p className=" text-primary-900 text-start font-semibold flex items-center" >Learn More <ChevronRight/></p>
                    </div>
                    <div className="px-5 rounded-2xl py-4 shadow-2xl min-w-full md:min-w-[370px] md:px-[30px] md:py-[30px] w-full flex max-w-[380px] justify-start items-start flex-col gap-4 md:gap-[30px]">
                        <div className="flex gap-4 items-center">
                            <div className="p-[11px] bg-[#E0EAFF] rounded-lg"><MonitorCheckIcon/></div>
                            <h2 className="text-[24px] font-semibold">Online Course</h2>
                        </div>
                        <p className="text-[#646464]">
                        Offering infrastructure for the online <br/> teachers
                        </p>
                        <p className=" text-primary-900 text-start font-semibold flex items-center" >Learn More <ChevronRight/></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SOurService