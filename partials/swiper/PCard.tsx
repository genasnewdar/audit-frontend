import Image from "next/image";
import { FunctionComponent } from "react";

interface IPCard {
    title: string; 
    desk: string; 
    imgUrl: string; 
}

const PCard:FunctionComponent<IPCard> = (data) => {

    return (
        <div className="p-4 shadow-2xl md:p-[24px] w-full flex max-w-[380px] justify-center items-center flex-col gap-4 md:gap-[24px]">
            <div className="relative w-full h-[240px]">
                <Image fill src={data?.imgUrl} alt="delta" />
            </div>
            <h2 className="text-black-900 w-full text-start text-[24px] font-medium">{data?.title}</h2>
            <p className="text-black-500 text-start">{data?.desk}</p>
        </div>
    )
} 

export default PCard