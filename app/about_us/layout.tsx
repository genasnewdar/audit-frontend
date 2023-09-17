export const metadata = {
	title: "Lever About us",
	description: "lever landing for merchants"
};

export default function SolutionLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex justify-center items-center py-10 md:py-[85px]">{children}</div>
	);
}
