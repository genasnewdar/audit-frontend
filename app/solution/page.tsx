import { CMiniBanners, CTrend, CVideoBanner } from "@/components";
import CSolList from "@/components/solutions/CSolList";
import { LIBS } from "@/libs";

export default function Solution() {
	return (
		<div className="flex px-4 flex-col items-center gap-[120px] justify-between ">
			<CMiniBanners/>
			<CTrend/>
			{/* <CVideoBanner/> */}
			<div className="flex flex-col md:flex-row gap-[40px] w-full justify-evenly">
				<CSolList title="Problems" data={LIBS.problemItems} />
				<CSolList title="Solutions" data={LIBS.solutionItems} />
			</div>
		</div>
	);
}
