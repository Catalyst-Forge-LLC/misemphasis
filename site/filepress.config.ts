import { defineFilepressConfig } from "getfilepress";

const github = "https://github.com/Catalyst-Forge-LLC/misemphasis";
const npm = "https://www.npmjs.com/package/misemphasis";

export default defineFilepressConfig({
	title: "Misemphasis",
	description: "A reader can stress a different word from the one you intended. Misemphasis shows plausible alternate readings and clearer wording for each, so you can choose the meaning before sending the text.",
	tagline: "Did the reader stress the word you meant?",
	lede: "Reading and meaning review skill for your AI agent",
	url: "https://misemphasis.com",
	author: "Catalyst Forge LLC",
	logo: "/logo.png",
	ogImage: "/logo.png",
	homePage: "home",
	nav: [
		{ label: "Home", href: "/" },
		{ label: "Get started", href: "/docs/install" },
		{ label: "Docs", href: "/docs/" },
		{ label: "About", href: "/about" },
		{ label: "GitHub", href: github, icon: "github" },
	],
	footerLinks: [
		{ label: "See the rest of the Catalyst Forge shelf.", href: "https://catalystforge.com/tools/" },
		{ label: "Get started", href: "/docs/install" },
		{ label: "npm", href: npm },
		{ label: "GitHub", href: github, icon: "github" },
	],
	topics: [],
	paths: [{ url: "/docs", dir: "docs/dist" }],
});
