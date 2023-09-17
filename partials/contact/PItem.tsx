import { FunctionComponent, HTMLAttributes, ReactNode } from "react"


interface IPItem extends HTMLAttributes<HTMLDivElement> {
    icon: ReactNode
    name: ReactNode | string

}

const PItem: FunctionComponent<IPItem> = ({icon, name, className, ...attr}) => {

    return <div className={` flex flex-col gap-4 justify-center items-center ${className}`} {...attr}>
        <div className="text-primary-900">{icon}</div>
        <p className="text-black-900">{name}</p>
    </div>
}

export default PItem