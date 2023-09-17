import Link from "next/link";

import { CHeaderNav } from "@/components";
import { PButton, PHeaderLogo, PHeederInput } from "@/partials";

const SHeader = () => {
	return (
		<div className="w-full">
			<div className="m-auto container flex justify-between items-center px-4 py-4 md:px-10 md:py-10 ">
				<PHeaderLogo />
				<PHeederInput placeholder="Want to learn?" />
				<CHeaderNav />
				<Link target="_blank" href="https://cal.com/lever-ed">
					<PButton className="text-white bg-primary-900">Book meeting</PButton>
				</Link>
			</div>
		</div>
	);
};

export default SHeader;
