import { FunctionComponent, HTMLAttributes, ReactNode } from "react"

interface ICTextBanner extends HTMLAttributes<HTMLDivElement> {
    title?: any
    desk: string
}

const CTextBanner:FunctionComponent<ICTextBanner> = ({title,desk, className, ...attr}) => {
    return (
        <div className={` w-full flex flex-col gap-[32px] justify-center px-10 py-[96px] text-center ${className}`} {...attr}>
            {title && <div className="text-black-900 font-semibold text-3xl md:text-[48px]">{title}</div>}
            <p className="m-auto container max-w-[1400px]">{desk}</p>
        </div>
    )
}

export default CTextBanner