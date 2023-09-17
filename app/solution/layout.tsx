export const metadata = {
	title: "Lever Solution",
	description: "lever landing for merchants"
};

export default function SolutionLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<div className=" m-auto container max-w-[1200px] py-10 md:py-[85px] mb-24">{children}</div>
	);
}
