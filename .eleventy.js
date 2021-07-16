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

	return {
		dir: {
			input: 'src',
			output: 'public'
		}
	}
};
