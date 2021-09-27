module.exports = {
	purge: {
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
			fg: '#EBDBB2',
			primary: '#FE8019',
		},
		extend: {},
	},
	variants: {},
	plugins: [],
}