import Image from "next/image";

import { CImgBanner, CTextBanner } from "@/components";

export default function Home() {
	return (
		<div className="flex gap-10 mb-[96px] flex-col items-center justify-between ">
			<CImgBanner className="bg-[#000000]">Unlock the Power of Lever: Elevate Your Academy, Online Course, or Educational <br className="hidden md:block" /> Organization with Seamless Automation, Empowering Your Educators to Focus on Their <br className="hidden md:block" /> True Passion – Teaching Excellence!</CImgBanner>
			<CTextBanner title="About Us" desk="Lever is an EdTech-as-a-service solution that takes advantage of cutting-edge technology such as automation, AI, and big data." className="text-[32px] leading-[42px] text-black-900"/>
			<CTextBanner desk="Courses was fantastic! It is Master platform for those looking to start a new career, or need a refresher." className="text-[48px] leading-[60px] font-medium bg-[#F9FAFB] text-black-900"/>
		</div>
	);
}
