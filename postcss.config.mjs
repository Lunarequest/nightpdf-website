import autoprefixer from "autoprefixer";
import cssnano from "cssnano";

module.exports = {
	plugins: [
		autoprefixer({ cascade: true }),
		cssnano({
			preset: [
				"advanced",
				{
					discardComments: {
						removeAll: true,
					},
					discardEmpty: true,
					normalizeUrl: true,
					autoprefixer: true,
				},
			],
		}),
	],
};
