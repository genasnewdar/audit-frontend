import Image from "next/image";

import { CImgBanner, CSwiper, CTextBanner } from "@/components";
import { LIBS } from "@/libs";
import { PButton } from "@/partials";
import { SMockPool, SOurService } from "@/sections";

export default function Home() {
	return (
		<div className="flex px-2 gap-10 md:gap-[200px] mb-[96px] flex-col items-center justify-between ">
			<div className=" relative h-[calx(screen - 200px)] relative flex flex-col md:flex-row w-full container m-auto justify-between">
				<div className="flex flex-col gap-10">
					<div className="p-10 font-semibold text-2xl md:text-[64px] W-FULL md:p-[90px] flex flex-col gap-4 md:gap-10">
						<span>TAKE YOUR<br/></span>
						<span><span className="text-[#276EF1]">ACADEMY</span> TO <br/></span>
						<span>THE <span className="text-[#276EF1]">NEXT LEVEL</span> <br/></span>
					</div>
					<Image className="top-0 absolute" src="/group.png" alt="boy" width={417} height={600} />
					<div className="flex pl-10 md:pl-[90px]  ">
						<PButton className="bg-primary-900 text-white w-auto">Get Started</PButton>
					</div>
					<div className="absolute top-1 -left-4 bg-primary-900 rounded-full w-[30px] h-[30px] ">
					</div>
				</div>
				<div className="relative">
					<div className=" relative bg-primary-900 rounded-full flex justify-center z-[3] w-[538px] h-[538px] ">
						<Image src="/boy.png" alt="boy" width={417} height={600} />

					</div>
					<Image className="-bottom-[50%] -right-10 absolute" src="/group.png" alt="boy" width={417} height={600} />
					<div className="absolute -top-4 -left-4 border border-primary-900 rounded-full w-[538px] h-[538px] ">
					</div>
					<div className="absolute bottom-1 -left-4 bg-primary-900 rounded-full w-[53px] h-[53px] ">
					</div>
				</div>
			</div>
			<CImgBanner style={{background: "url(/banner.png) no-repeat center center/cover"}} className="bg-[#000000]">Unlock the Power of Lever: <br className="hidden md:block"/><br className="hidden md:block"/> <br className="hidden md:block"/> Elevate Your Academy, Online Course, or Educational Organization with Seamless <br className="hidden md:blokc" /> Automation, Empowering Your Educators to Focus on Their True Passion                           –Teaching Excellence!</CImgBanner>
			<SOurService />
			<SMockPool />
			<CTextBanner title="About Us" desk="Lever is an EdTech-as-a-service solution that takes advantage of cutting-edge technology such as automation, AI, and big data." className="text-xl md:text-[32px] leading-[42px] text-black-900"/>
			<CTextBanner title={<div className="h-[48px] w-[170px] relative m-auto"><Image src="/Vector.png" alt="logo" fill /></div>} desk="“Your EdTech Solution”." className="text-xl md:text-[48px] leading-[36px] md:leading-[60px] font-medium bg-[#F9FAFB] text-black-900"/>
		</div>
	);
}


const Card = (data:any) =>  <div className="w-10 h-10 bg-black-600">{data}</div>