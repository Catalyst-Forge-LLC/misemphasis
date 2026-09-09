import { defineFilepressConfig } from "getfilepress";

const github = "https://github.com/Catalyst-Forge-LLC/misemphasis";
const npm = "https://www.npmjs.com/package/misemphasis";

export default defineFilepressConfig({
	title: "Misemphasis",
	description:
		"Find how flat prose can be misread when stress is missing. An agent with the skill writes the report.",
	tagline: "Did the reader stress the word you meant?",
	url: "https://misemphasis.com",
	author: "Catalyst Forge LLC",
	logo: "/logo.svg",
	ogImage: "/logo.svg",
	homePage: "home",
	nav: [
		{ label: "Home", href: "/" },
		{ label: "Docs", href: "/docs/" },
		{ label: "Install", href: "/docs/install" },
		{ label: "Skill", href: "/docs/skill" },
		{ label: "Posts", href: "/posts" },
		{ label: "About", href: "/about" },
		{ label: "GitHub", href: github, icon: "github" },
	],
	footerLinks: [
		{ label: "Docs", href: "/docs/" },
		{ label: "npm", href: npm },
		{ label: "GitHub", href: github, icon: "github" },
	],
	topics: [],
	paths: [{ url: "/docs", dir: "docs/dist" }],
});
