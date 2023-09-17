import { LIBS } from "@/libs"
import { PMiniBanner } from "@/partials"



const CMiniBanners = () => {

    return (
        <div className="flex max-w-[1100px] gap-[20px]">
            {LIBS.LMiniBanners.map((e,i) => <PMiniBanner name={e.name} desk={e.desk} key={i} className={`${i === 1 ? "bg-primary-900 text-white  border-r-[1px] border-l-[1px] border-black-900" : ""} `}/>)}
        </div>
    )
}

export default CMiniBanners