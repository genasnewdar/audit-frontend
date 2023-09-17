import Image from "next/image";

import { CImgBanner, CSwiper, CTextBanner } from "@/components";
import { LIBS } from "@/libs";
import { PButton } from "@/partials";
import { SMockPool, SOurService } from "@/sections";

export default function Home() {
	return (
		<div className="flex px-2 gap-10 md:gap-[200px] mb-[96px] flex-col items-center justify-between ">
			<div className="h-[calx(screen - 200px)] relative flex w-full container m-auto justify-between">
				<div className="flex flex-col gap-10">
					<div className="p-10 font-semibold text-2xl md:text-[64px] W-FULL md:p-[90px] flex flex-col gap-10">
						<span>TAKE YOUR<br/></span>
						<span><span className="text-[#276EF1]">ACADEMY</span> TO <br/></span>
						<span>THE <span className="text-[#276EF1]">NEXT LEVEL</span> <br/></span>
					</div>
					<div className="flex pl-10 md:pl-[90px]  ">
						<PButton className="bg-primary-900 text-white w-auto">Get Started</PButton>
					</div>
				</div>
				<div className="relative">
					<div className="bg-primary-900 rounded-full w-[538px] h-[538px] ">

					</div>
					<div className="absolute -top-4 -left-4 border border-primary-900 rounded-full w-[538px] h-[538px] ">
					</div>
					<div className="absolute bottom-1 -left-4 bg-primary-900 rounded-full w-[53px] h-[53px] ">
					</div>
				</div>
			</div>
			<CImgBanner style={{background: "url(/banner.png) no-repeat center center/cover"}} className="bg-[#000000]">Unlock the Power of Lever: Elevate Your Academy, Online Course, or Educational <br className="hidden md:block" /> Organization with Seamless Automation, Empowering Your Educators to Focus on Their <br className="hidden md:block" /> True Passion – Teaching Excellence!</CImgBanner>
			<SOurService />
			<SMockPool />
			<CTextBanner title="About Us" desk="Lever is an EdTech-as-a-service solution that takes advantage of cutting-edge technology such as automation, AI, and big data." className="text-xl md:text-[32px] leading-[42px] text-black-900"/>
			<CTextBanner desk="Courses was fantastic! It is Master platform for those looking to start a new career, or need a refresher." className="text-xl md:text-[48px] leading-[36px] md:leading-[60px] font-medium bg-[#F9FAFB] text-black-900"/>
		</div>
	);
}


const Card = (data:any) =>  <div className="w-10 h-10 bg-black-600">{data}</div>