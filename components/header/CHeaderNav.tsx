'use client'

import { usePathname } from 'next/navigation'

import { LIBS } from "@/libs";
import { PNavItem } from "@/partials";

const CHeaderNav = () => {
	const navigation =usePathname()
	console.log(navigation)
	return (
		<div className="flex gap-4 md:gap-[25px]">
			{LIBS.navItems?.map((e, i) => (
				<PNavItem isPath={navigation === e?.href} key={i} href={e.href}>
					{e.name}
				</PNavItem>
			))}
		</div>
	);
};

export default CHeaderNav;
