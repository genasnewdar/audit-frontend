import { FunctionComponent, HTMLAttributes } from "react"


interface IPMiniBanner extends HTMLAttributes<HTMLDivElement> {
    name: string;
    desk: string;
}

const PMiniBanner:FunctionComponent<IPMiniBanner> = ({className, name, desk}) => {

    return <div className={`flex text-black-900 text-center flex-col gap-5 px-5 py-10 md:py-[84px] rounded-[30px] ${className}`}>
                <h2 className="text-[25px] font-semibold">{name}</h2>
                <p className="text-xl">{desk}</p>
            </div>
}

export default PMiniBanner