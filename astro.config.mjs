import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";
import { searchForWorkspaceRoot } from "vite";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
	site: "https://nightpdf.nullrequest.com",
	integrations: [sitemap(), tailwind(), react(), image()],
	output: "server",
	adapter: vercel(),
});
