/// <reference path="../.astro/types.d.ts" />
/// <reference types="@astrojs/image/client" />

interface ImportMetaEnv {
	readonly GITHUB_TOKEN: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
	glob: <T>(arg: string, { import: string, eager: bool }) => T;
}
