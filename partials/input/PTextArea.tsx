import { FunctionComponent, InputHTMLAttributes } from "react";

interface IPTextArea extends InputHTMLAttributes<HTMLTextAreaElement> {
	isRequired?: boolean;
}

const PTextArea: FunctionComponent<IPTextArea> = ({
	isRequired = false,
	className,
	...attr
}) => {
	return (
		<textarea
			type="text"
			className={`w-full px-5 py-2 rounded-2xl border min-h-[162px] border-[#E8E8E8] bg-[#f5f5f5] ${className}`}
			{...attr}
			required={isRequired}
		/>
	);
};

export default PTextArea;
