import "./globals.css";

import { Inter } from "next/font/google";

import TTemplate from "@/template/TTemplate";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Lever landing",
	description: "lever landing for merchants"
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			 <head>
				<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" />
			</head>
			<body className={`${inter.className} bg-white`}>
				<TTemplate>{children}</TTemplate>
			</body>
		</html>
	);
}
