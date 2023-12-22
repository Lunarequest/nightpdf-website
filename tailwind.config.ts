/** @type {import('tailwindcss').Config} */
import tailwindcss from "tailwindcss";

module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {},
	},
	plugins: [
		tailwindcss(function ({ addBase, theme }) {
			addBase({
				h1: { fontSize: theme("fontSize.2xl") },
				h2: { fontSize: theme("fontSize.xl") },
				h3: { fontSize: theme("fontSize.lg") },
			});
		}),
	],
};
