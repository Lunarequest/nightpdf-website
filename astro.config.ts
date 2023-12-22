import { defineConfig, squooshImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	site: "https://nightpdf.nullrequest.com",
	image: {
		service: squooshImageService(),
	},
	integrations: [
		sitemap(),
		tailwind(),
		icon({
			include: {
				mdi: ["*"],
			},
		}),
		react(),
	],
	output: "server",
	adapter: vercel(),
});
