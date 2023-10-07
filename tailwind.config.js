/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./node_modules/flowbite-react/**/*.js',
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./sections/**/*.{js,ts,jsx,tsx,mdx}",
		"./template/**/*.{js,ts,jsx,tsx,mdx}",
		"./partials/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
			},
			colors: {
				primary: {
					25: "#FCFAFF",
					50: "#e9f1fe",
					100: "#d4e2fc",
					200: "#bed4fb",
					300: "#a9c5f9",
					400: "#7da8f7",
					500: "#7da8f7",
					600: "#689af5",
					700: "#528bf4",
					800: "#3d7df2",
					900: "#276ef1"
				},
				secondary: {
					25: "#FCFAFF",
					50: "#FCFAFF",
					100: "#F4EBFF",
					200: "#E9D7FE",
					300: "#D6BBFB",
					400: "#B692F6",
					500: "#9E77ED",
					600: "#9E77ED",
					700: "#6941C6",
					800: "#53389E",
					900: "#42307D"
				},
				black: {
					25: "#FCFCFD",
					50: "#F9FAFB",
					100: "#F2F4F7",
					200: "#EAECF0",
					300: "#D0D5DD",
					400: "#98A2B3",
					500: "#667085",
					600: "#475467",
					700: "#344054",
					800: "#1D2939",
					900: "#101828"
				}
			}
		}
	},
	plugins: [require('flowbite/plugin')],
};
