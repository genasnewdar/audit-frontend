import { ArrowRight } from "lucide-react";
import Image from "next/image";

import { PButton } from "@/partials";

export default function AboutUS() {
	return (
		<div className="flex gap-10 m-auto container md:gap-[200px] px-4 py-10 md:py-[92px] flex-col items-center justify-between ">
			<div className="flex flex-col md:flex-row w-full items-center justify-between gap-10">
				<div className="flex flex-col gap-10 w-full md:w-1/3">
					<h2 className="text-black-900 text-xl md:text-[54px] font-semibold" >What We Do</h2>
					<p className="text-black-900 md:leading-[150%] text-sm md:text-[22px]">It is a long established fact that a reader will be distracted by the of readable content of a page 
					when lookings at its layouts the points of using 
					that it has a more-or-less normal.</p>
					<div>
						{/* <PButton className="flex gap-4 rounded-3xl py-[20px] text-white bg-black-900 px-[20px]">Our Concept <ArrowRight/></PButton> */}
					</div>
				</div>
				<div className="w-full md:w-1/2 rounded-[62px] overflow-hidden relative h-[300px] md:h-[500px]">
					<Image fill src="/Photo.jpg" alt="/Phone.jpg"/>
				</div>
			</div>
			<div className="flex flex-col md:flex-row w-full items-center justify-between gap-10">
				<div className="w-full md:w-1/2 rounded-[62px] overflow-hidden relative h-[300px] md:h-[500px]">
					<Image fill src="/Photo-2.jpg" alt="/Phone.jpg"/>
				</div>
				<div className="flex flex-col gap-10 w-full md:w-1/3">
					<h2 className="text-black-900 text-xl md:text-[54px] font-semibold" >The End Result</h2>
					<p className="text-black-900  md:leading-[150%] text-sm md:text-[22px]">It is a long established fact that a reader will be distracted by the of readable content of a page 
					when lookings at its layouts the points of using 
					that it has a more-or-less normal.</p>
					<div>
						{/* <PButton className="flex gap-4 rounded-3xl py-[20px] text-white bg-black-900 px-[20px]">Our Portfolio <ArrowRight/></PButton> */}
					</div>
				</div>
			</div>
			<div className="w-full h-[300px] flex justify-center items-center relative border-primary-900 border-[10px] rounded-[60px] ">
				<div className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xl text-center leading-[150%] md:text-[36px] flex justify-center items-center bg-white h-[400px] max-w-[751px] px-4">
					Lever is dedicated to championing six transformative objectives aligned with the United Nations Sustainable Development Goals (SDGs), driving positive change and global impact. 
				</div>
			</div>
		</div>
	);
}
