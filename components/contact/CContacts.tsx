import { LIBS } from "@/libs"
import { PItem } from "@/partials"

const CContacts = () => {


    return <div className="flex gap-4 md:gap-10 items-center ">{LIBS.LContacts?.map((e,i) => <PItem key={i} name={e.name} icon={e.icon}/>)}</div>
}

export default CContacts