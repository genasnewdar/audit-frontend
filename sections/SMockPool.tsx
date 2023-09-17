import { CSwiper } from "@/components"
import { LIBS } from "@/libs"


const SMockPool = () => {


    return (
        <div className="container m-auto flex flex-col gap-5 md:gap-10 justify-center items-start">
            <div className="flex flex-col gap-4">
                <p className=" text-primary-900 font-semibold" >Explore program</p>
                <h2 className="text-2xl leading-[44px] font-semibold mb-2 text-[36px]">Mock Test Pool</h2>
                <p className="text-black-500 text-xl">Lever System has a wide range of standard test pool</p>

            </div>
            <div className="w-full flex justify-center">
                <CSwiper data={LIBS.LMock} />
            </div>
        </div>
    )
}

export default SMockPool