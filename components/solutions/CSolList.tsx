import { FunctionComponent } from "react";

import { PSolItem } from "@/partials";

interface ICSolList {
    title: string,
    data: Array<string>,
}

const CSolList:FunctionComponent<ICSolList> = ({title, data}) => {

    return (
        <div className=" flex flex-col gap-8 justify-start ">
            <h1 className=" text-2xl md:text-[50px] text-black-900 font-semibold ">{title}</h1>
            <div className="flex gap-4 justify-start flex-col">
                {data?.map((e,i) => <PSolItem key={i} number={i} title={e} />)}
            </div>
        </div>
    )
}


export default CSolList