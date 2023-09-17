import { FunctionComponent, ReactNode } from "react";

interface ITContainer {
	children: ReactNode;
}

const TContainer: FunctionComponent<ITContainer> = ({ children }) => {
	return (
		<div className="m-auto w-full px-2 md:px-4 max-w-[1199px] ">{children}</div>
	);
};

export default TContainer;
