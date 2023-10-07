import { FunctionComponent, ReactNode } from "react";

import { SFooter, SHeader } from "@/sections";

interface ITTemplate {
	children: ReactNode;
}

const TTemplate: FunctionComponent<ITTemplate> = ({ children }) => {
	return (
		<div className="w-full min-h-screen mt-40 flex flex-col">
			<SHeader />
			{children}
			<SFooter />
		</div>
	);
};

export default TTemplate;
