import { PSocial } from "@/partials";

const CBottomFooter = () => {
	return (
		<div className="w-full py-10 md:py-[48px] text-black-400 flex flex-col md:flex-row justify-between items-center">
			<div>
				<p>© 2023 Lever education system. All rights reserved.</p>
			</div>
			<PSocial />
		</div>
	);
};

export default CBottomFooter;
