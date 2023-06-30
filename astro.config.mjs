import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";
import image from "@astrojs/image";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	site: "https://nightpdf.nullrequest.com",
	integrations: [
		sitemap(),
		tailwind(),
		icon({
			include: {
				mdi: ["*"],
			},
		}),
		react(),
		image(),
	],
	output: "server",
	adapter: vercel(),
});
