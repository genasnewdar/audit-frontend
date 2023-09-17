import Link from "next/link";
import { FunctionComponent, LinkHTMLAttributes, ReactNode } from "react";

interface IPNavItem extends LinkHTMLAttributes<HTMLLinkElement> {
	children: ReactNode | string;
	isPath: boolean;
}

const PNavItem: FunctionComponent<IPNavItem> = ({ children, href, isPath }) => {
	return (
		<Link href={`${href}`}>
			<div className={`${isPath ? "text-primary-900"  :"text-black-900"} font-medium 	`}>{children}</div>
		</Link>
	);
};

export default PNavItem;
