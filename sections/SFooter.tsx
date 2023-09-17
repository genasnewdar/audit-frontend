import { CBottomFooter, CTopFooter } from "@/components";

const SFooter = () => {
	return (
		<div className=" text-white bg-primary-900 ">
			<div className="m-auto flex flex-col container">
				<CTopFooter />
				<CBottomFooter />
			</div>
		</div>
	);
};

export default SFooter;
