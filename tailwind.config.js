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
			bg: '#3c3836',
			primary: '#fe8019',
			fg: '#ebdbb2',
		},
		extend: {},
	},
	variants: {},
	plugins: [],
}