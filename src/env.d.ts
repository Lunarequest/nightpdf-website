///  <reference types="astro/client-image" />

interface ImportMetaEnv {
	readonly GITHUB_TOKEN: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
