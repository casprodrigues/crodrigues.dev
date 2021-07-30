module.exports = {
	purge: {
		// enabled: true,
		content: [
			'./src/**/*.html',
			'./src/**/*.md',
			'./src/**/*.njk',
		],
	},
	theme: {
		fontFamily: {
			'sans': ['Open Sans', 'sans-serif']
		},
		colors: {
			transparent: 'transparent',
			bg: '#282828',
			fg: '#FBF1C7',
			primary: '#FE8019',
		},
		extend: {},
	},
	variants: {},
	plugins: [],
}