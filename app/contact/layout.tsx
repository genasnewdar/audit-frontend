export const metadata = {
	title: "Lever Contact",
	description: "lever landing for merchants"
};

export default function ContactLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex justify-center items-center py-10 md:py-[85px] ">{children}</div>
	);
}
