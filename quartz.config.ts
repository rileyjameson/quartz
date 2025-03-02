import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "🪴 Riley's Website",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "rileyjameson.com",
    ignorePatterns: ["private", "templates", ".obsidian", "content/private/**/*"],
    defaultDateType: "created",
    generateSocialImages: false,
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#f1efe7", // Clean, warm white background
          lightgray: "#e5e3e1", // Subtle gray with warm undertones
          gray: "#b8b4b0", // Medium warm gray
          darkgray: "#4a4a4a", // Deep readable gray
          dark: "#2b2b2b", // Near black
          secondary: "#77b5a7", // Muted sage green
          tertiary: "#f28482", // Soft coral accent
          highlight: "rgba(132, 165, 157, 0.15)", // Subtle sage highlight
          textHighlight: "rgba(132, 165, 157, 0.4)", // Stronger sage highlight
        },
        darkMode: {
          light: "#262624", // Deep space background
          lightgray: "#242428", // Slightly lighter background
          gray: "#5e5e65", // Mid-tone neutral
          darkgray: "#d4d4d4", // Light readable gray
          dark: "#ebebec", // Near white
          secondary: "#77b5a7", // Muted sage green (consistent with light)
          tertiary: "#f28482", // Soft coral (consistent with light)
          highlight: "rgba(132, 165, 157, 0.15)", // Subtle sage highlight
          textHighlight: "rgba(132, 165, 157, 0.4)", // Stronger sage highlight
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
