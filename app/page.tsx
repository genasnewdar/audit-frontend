import Image from "next/image";

import { CImgBanner, CSwiper, CSwiperFull, CTextBanner } from "@/components";
import { LIBS } from "@/libs";
import { PButton } from "@/partials";
import { SHome, SMockPool, SOurService } from "@/sections";

export default function Home() {
	return (
		<div className="flex px-2 gap-10 md:gap-[200px] mb-[96px] flex-col items-center justify-between ">
			<SHome/>
			<CImgBanner style={{background: "url(/banner.png) no-repeat center center/cover"}} className="bg-[#000000]">Unlock the Power of Lever: <br className="hidden md:block"/><br className="hidden md:block"/> <br className="hidden md:block"/> Elevate Your Academy, Online Course, or Educational Organization with Seamless <br className="hidden md:blokc" /> Automation, Empowering Your Educators to Focus on Their True Passion                           –Teaching Excellence!</CImgBanner>
			<SOurService />
			<SMockPool />
			<CSwiperFull data={[<CTextBanner key={0} title={<div className="h-[48px] w-[170px] relative m-auto"><Image src="/Vector.png" alt="logo" fill /></div>} desk="“Your EdTech Solution”." className="text-xl md:text-[48px] leading-[36px] md:leading-[60px] font-medium bg-[#F9FAFB] text-black-900"/>
		,<CTextBanner key={0} title={<div className="h-[48px] w-[170px] relative m-auto"><Image src="/Vector.png" alt="logo" fill /></div>} desk="“Future of Education System”." className="text-xl md:text-[48px] leading-[36px] md:leading-[60px] font-medium bg-[#F9FAFB] text-black-900"/>
	,<CTextBanner key={0} title={<div className="h-[48px] w-[170px] relative m-auto"><Image src="/Vector.png" alt="logo" fill /></div>} desk="“AI integrated Education”." className="text-xl md:text-[48px] leading-[36px] md:leading-[60px] font-medium bg-[#F9FAFB] text-black-900"/>
]}  />
			<CTextBanner title="About Us" desk="Lever is an EdTech-as-a-service solution that takes advantage of cutting-edge technology such as automation, AI, and big data." className="text-xl md:text-[32px] leading-[42px] text-black-900"/>
			</div>
	);
}


const Card = (data:any) =>  <div className="w-10 h-10 bg-black-600">{data}</div>