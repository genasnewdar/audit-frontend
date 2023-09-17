import { FunctionComponent, HTMLAttributes } from "react"

interface IPSolItem extends HTMLAttributes<HTMLDivElement> {
    number: number;
    title: string;
}

const PSolItem:FunctionComponent<IPSolItem> = ({number, title, className, ...attr}) => {


    return (
        <div className="flex gap-[40px] items-center" {...attr}>
            <div className="text-[#CDA274] text-lg md:text-[25px] leading-7 ">{number}</div>
            <p className="text-[#4D5053]  text-lg md:text-[22px] leading-[150%]">{title}</p>
        </div>
    )
}


export default PSolItem