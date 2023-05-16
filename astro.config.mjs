import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
	site: "https://nightpdf.nullrequest.com",
	experimental: {
		assets: true,
	},
	integrations: [sitemap(), tailwind(), react()],
	output: "server",
	adapter: vercel(),
});
