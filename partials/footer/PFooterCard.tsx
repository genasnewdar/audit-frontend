import { FunctionComponent } from "react";

interface IPFooterCard {
	header: string;
	body: Array<string>;
}

const PFooterCard: FunctionComponent<IPFooterCard> = ({ header, body }) => {
	return (
		<div className="flex min-w-[180px] flex-col gap-4 ">
			<h6 className="text-black-400">{header}</h6>
			<div className="flex flex-col gap-3 text-black-200">
				{body?.map((e, i) => (
					<p key={i}>{e}</p>
				))}
			</div>
		</div>
	);
};

export default PFooterCard;
