import { PFooterCard, PFooterLogo } from "@/partials";

const CTopFooter = () => {
	return (
		<div className="mt-10 px-4 flex-col md:flex-row md:mt-[64px] mb-5 md:mb-[48px] flex justify-between">
			<div>
				<PFooterLogo />
			</div>
			<div className="flex flex-col md:flex-row gap-4 md:gap-10 justify-center items-start">
				<PFooterCard
					header="Products"
					body={["Overview", "Features", "Solutions"]}
				/>
				<PFooterCard
					header="Company"
					body={["About us", "Careers", "News", "SDG"]}
				/>
				<PFooterCard
					header="Social"
					body={["Twitter", "Facebook", "Linkedin", "Github"]}
				/>
				<PFooterCard header="Legal" body={["Terms", "Privacy", "Contact"]} />
			</div>
		</div>
	);
};

export default CTopFooter;
