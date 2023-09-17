import { SFooter, SHeader } from "@/sections";
import { FunctionComponent, ReactNode } from "react";

interface ITTemplate {
	children: ReactNode;
}

const TTemplate: FunctionComponent<ITTemplate> = ({ children }) => {
	return (
		<div className="w-full flex flex-col min-h-screen">
			<SHeader />
			{children}
			<SFooter />
		</div>
	);
};

export default TTemplate;
