import { FunctionComponent, HTMLAttributes, ReactNode } from "react";

interface ICImgBanner extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode | string;
}

const CImgBanner: FunctionComponent<ICImgBanner> = ({
	children,
	className,
	...attr
}) => {
	return (
		<div
			className={`banner overflow-hidden relative text-center  text-white  text-xl md:text-[28px] md:leading-[38px] flex justify-center items-center container py-10 md:py-[111px] tracking-tighter px-5 md:px-[64px] ${className}`}
			{...attr}>

			<p className="z-[2]">{children}</p>
		</div>
	);
};

export default CImgBanner
