import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "🪴 Riley's Space",
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
          light: "transparent", // Let the sunrise gradient show through
          lightgray: "rgba(229, 227, 225, 0.7)", // Semi-transparent warm gray
          gray: "#7c7975", // Warm gray for standard text
          darkgray: "#3a3a3a", // Deep gray for headings
          dark: "#1a1a1a", // Nearly black for maximum contrast
          secondary: "#4a7d9c", // Sky blue that complements the sunrise gradient
          tertiary: "#d25c46", // Warm terracotta that echoes sunset tones
          highlight: "rgba(74, 125, 156, 0.2)", // Light blue highlight
          textHighlight: "rgba(74, 125, 156, 0.5)", // More visible text highlight
        },
        darkMode: {
          light: "transparent", // Let the sunset gradient show through
          lightgray: "rgba(36, 36, 40, 0.7)", // Semi-transparent dark gray
          gray: "#b8b8c0", // Light gray for standard text
          darkgray: "#e8e8e8", // Very light gray for headings
          dark: "#ffffff", // Pure white for maximum contrast
          secondary: "#84b1d9", // Bright sky blue to contrast with the deep sunset
          tertiary: "#ff9d7a", // Bright orange-coral that pops against dark blues
          highlight: "rgba(132, 177, 217, 0.25)", // Subtle blue highlight
          textHighlight: "rgba(132, 177, 217, 0.6)", // More visible text highlight
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
