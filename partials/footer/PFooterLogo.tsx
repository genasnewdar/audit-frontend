import Image from "next/image";

const PFooterLogo = () => {
	return (
		<div className="flex flex-col gap-4 md:gap-[38px]">
			<div className="h-[48px] w-[170px] relative"><Image src="/Vector-1.png" alt="logo" fill /></div>
			<p className=" text-black-200 ">
				Top learning experiences that create more talent in the world.
			</p>
		</div>
	);
};

export default PFooterLogo;
