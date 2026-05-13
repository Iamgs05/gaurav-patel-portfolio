// @ts-check
import sitemap from "@astrojs/sitemap";
import { filterSitemapByDefaultLocale, i18n } from "astro-i18n-aut/integration";
import { defineConfig } from "astro/config";

const defaultLocale = "en";
const locales = {
	en: "en-US"
};

export default defineConfig({

	site: "https://iamgs05.github.io/gaurav-patel-portfolio",
	base: "/gaurav-patel-portfolio",
	trailingSlash: "ignore",
	build: {
		format: "directory"
	},
	integrations: [
		i18n({
			locales,
			defaultLocale,
			redirectDefaultLocale: false
		}),
		sitemap({
			i18n: {
				locales,
				defaultLocale
			},
			filter: filterSitemapByDefaultLocale({ defaultLocale })
		})
	]
});
