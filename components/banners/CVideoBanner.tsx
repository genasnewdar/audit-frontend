"use client"
import { Play } from "lucide-react"
import { FunctionComponent, useRef,VideoHTMLAttributes } from "react"



interface ICVIdeoBanner extends VideoHTMLAttributes<HTMLVideoElement> {}

const CVIdeoBanner:FunctionComponent<ICVIdeoBanner> = ({src, ...atr}) => {
    const videoRef = useRef()

    return (
        <div className="relative bg-black-300 overflow-hidden rounded-[20px] md:rounded-[70px] h-[374px] w-full max-w-[1200px] ">
            <iframe
                // ref={videoRef}
                width="100%"
                height="100%"
                src={src}
                title="YouTube Video Player"
                allowFullScreen
            ></iframe>
            <div className=" top-1/2 left-1/2 cursor-pointer -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden absolute bg-white w-[20px] h-[20px] md:h-[120px] md:w-[120px] flex justify-center items-center">
                <Play size={40}/>
            </div>
        </div>
    )
}

export default CVIdeoBanner