import Image from "next/image"

import { PButton } from "@/partials"


const SHome = () => {


    return <div className=" relative h-[calx(screen - 200px)] relative flex flex-col md:flex-row w-full container m-auto justify-between overflow-hidden">
                <div className="flex flex-col gap-10">
                    <div className="p-10 font-semibold md:leading-[100%] text-2xl md:text-[64px] w-full md:p-[90px] flex flex-col gap-4 md:gap-10">
                        <span>TAKE YOUR<br/></span>
                        <span><span className="text-[#276EF1]">ACADEMY</span> TO <br/></span>
                        <span>THE <span className="text-[#276EF1]">NEXT LEVEL</span> <br/></span>
                    </div>
                    <Image className="top-0 absolute" src="/group.png" alt="boy" width={417} height={600} />
                    <div className="flex pl-10 md:pl-[90px]  ">
                        <PButton className="bg-primary-900 text-white w-auto">Get Started</PButton>
                    </div>
                    <div className="absolute top-1 -left-4 bg-primary-900 rounded-full w-[30px] h-[30px] ">
                    </div>
                </div>
                <div className="relative">
                    <div className=" relative bg-primary-900 rounded-full flex justify-center z-[3] w-[538px] h-[538px] ">
                        <Image src="/boy.png" alt="boy" width={417} height={600} />

                    </div>
                    <Image className="-bottom-[50%] -right-10 absolute" src="/group.png" alt="boy" width={417} height={600} />
                    <div className="absolute -top-4 -left-4 border border-primary-900 rounded-full w-[538px] h-[538px] ">
                    </div>
                    <div className="absolute bottom-1 -left-4 bg-primary-900 rounded-full w-[53px] h-[53px] ">
                    </div>
                </div>
            </div>
}

export default SHome