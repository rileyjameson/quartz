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
          light: "#FFD7AA", // Warm golden sunset background
          lightgray: "#FFB984", // Softer peach-orange glow
          gray: "#B69CA5", // Muted lavender-gray for contrast
          darkgray: "#4E4E4E", // Deep neutral gray for balance
          dark: "#2B2B2B", // Dark contrast for depth
          secondary: "#372772", // Rich twilight blue (sky transitioning to night)
          tertiary: "#D4AA36", // La La Land yellow accent (from Mia’s dress)
          highlight: "rgba(212, 170, 54, 0.15)", // Subtle gold glow
          textHighlight: "#d4aa3688",
        },
        darkMode: {
          light: "#201A4E", // Darker deep night sky (muted twilight blue)
          lightgray: "#2B2366", // Slightly lighter blue-violet for subtle contrast
          gray: "#5F64C2", // Mid-tone cool blue (from cityscape)
          darkgray: "#B5A8FF", // Muted lavender highlight
          dark: "#EDE6FF", // Soft, dreamy light purple for contrast
          secondary: "#D4AA36", // Rich twilight purple (dominant color in the scene)
          tertiary: "#B083D8", // La La Land signature yellow accent (from the dress)
          highlight: "rgba(223, 195, 84, 0.15)", // Soft golden glow
          textHighlight: "#d4aa3688",
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
