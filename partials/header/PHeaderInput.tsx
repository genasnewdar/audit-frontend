import { ChevronDown, Search } from "lucide-react";
import { FunctionComponent, InputHTMLAttributes } from "react";

import { PButton } from "../buttons";

interface IPHeaderInput extends InputHTMLAttributes<HTMLInputElement> {}

const PHeaderInput: FunctionComponent<IPHeaderInput> = ({
	className,
	...attr
}) => {
	return (
		<div className="border rounded-[8px] relative overflow-hidden min-w-[360px] p-[2px] flex justify-between ">
			<Search className="absolute top-1/2 text-black-400 -translate-y-1/2 left-2 " />
			<input
				type="text"
				className={`active:border-none ml-4 px-4 focus:border-none focus:outline-none focus-visible:outline-none  bg-transparent border-none ${className}`}
				{...attr}
			/>
			<PButton className="flex items-center py-[8px] shadow-none text-primary-900 bg-[#F9F5FF] ">
				<span>Explore</span> <ChevronDown />
			</PButton>
		</div>
	);
};

export default PHeaderInput;
