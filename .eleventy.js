const _ = require('lodash');
const tailwindcss = require('eleventy-plugin-tailwindcss');
const googleFonts = require('eleventy-google-fonts');
const criticalCss = require('eleventy-critical-css');
const automaticNoopener = require('eleventy-plugin-automatic-noopener');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const filesMinifier = require('@sherby/eleventy-plugin-files-minifier');
const sitemap = require('@quasibit/eleventy-plugin-sitemap');

module.exports = function(eleventyConfig) {
	
	eleventyConfig.addPlugin(tailwindcss);
	eleventyConfig.addPlugin(googleFonts);
	eleventyConfig.addPlugin(criticalCss);
	eleventyConfig.addPlugin(automaticNoopener);
	eleventyConfig.addPlugin(syntaxHighlight);
	eleventyConfig.addPlugin(filesMinifier);
	eleventyConfig.addPlugin(sitemap, {
		sitemap: {
			hostname: "https://crodrigues.dev"
		}
	});

	eleventyConfig.addPassthroughCopy('src/static');

	eleventyConfig.addCollection('snippetsByLang', function(collectionApi) {
		return _.chain(collectionApi.getFilteredByTag('snippet'))
			.sortBy(snippet => snippet.data.title)
			.groupBy(snippet => snippet.data.lang)
			.value();
	});

	return {
		dir: {
			input: 'src',
			output: 'public'
		}
	}
};
