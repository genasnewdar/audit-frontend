import { FunctionComponent, InputHTMLAttributes } from "react";

interface IPInput extends InputHTMLAttributes<HTMLInputElement> {
	isRequired?: boolean;
}

const PInput: FunctionComponent<IPInput> = ({
	isRequired = false,
	className,
	...attr
}) => {
	return (
		<input
			type="text"
			className={`w-full px-5 py-2 rounded-2xl border border-[#E8E8E8] bg-[#f5f5f5] ${className}`}
			{...attr}
			required={isRequired}
		/>
	);
};

export default PInput;
